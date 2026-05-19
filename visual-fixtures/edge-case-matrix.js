import { renderableFixtureScenarios } from "./manifest.js";

/**
 * Resolve one manifest fixture by component + scenario id.
 */
function findFixture(componentId, scenarioId){
    const scenario = renderableFixtureScenarios.find(
        (entry) => entry.componentId === componentId && entry.scenarioId === scenarioId,
    );

    if(!scenario){
        throw new Error(`Missing renderable edge-case fixture ${componentId}/${scenarioId}.`);
    }

    return scenario;
}

/**
 * Convenience helper so the matrix stays compact and readable.
 */
function withFixtures(fixtures){
    return fixtures.map(({ componentId, scenarioId }) => findFixture(componentId, scenarioId));
}

/**
 * This matrix defines the "non-default user/environment states" we explicitly exercise.
 */
export const edgeCaseMatrix = [
    {
        id: "rtl",
        label: "RTL layout smoke",
        description: "Exercises representative fixtures under right-to-left document flow.",
        urlParams: { dir: "rtl" },
        media: {},
        scenarios: withFixtures([
            { componentId: "simple-button", scenarioId: "defaults" },
            { componentId: "simple-input", scenarioId: "default" },
            { componentId: "event-long-card", scenarioId: "default" },
            { componentId: "pricing-card", scenarioId: "default" },
        ]),
    },
    {
        id: "forced-colors",
        label: "Forced colors smoke",
        description: "Checks representative controls when the browser enables high-contrast forced colors.",
        urlParams: {},
        media: { forcedColors: "active" },
        scenarios: withFixtures([
            { componentId: "simple-button", scenarioId: "defaults" },
            { componentId: "simple-input", scenarioId: "default" },
            { componentId: "pricing-card", scenarioId: "default" },
        ]),
    },
    {
        id: "reduced-motion",
        label: "Reduced motion smoke",
        description: "Ensures animated or stateful fixtures still render when reduced motion is requested.",
        urlParams: {},
        media: { reducedMotion: "reduce" },
        scenarios: withFixtures([
            { componentId: "animation-raindrop-concentric", scenarioId: "default-active" },
            { componentId: "simple-button", scenarioId: "active" },
            { componentId: "pricing-card", scenarioId: "default" },
        ]),
    },
    {
        id: "dark-mode",
        label: "Dark mode smoke",
        description: "Renders a representative slice of fixtures with a dark color scheme preference.",
        urlParams: {},
        media: { colorScheme: "dark" },
        scenarios: withFixtures([
            { componentId: "simple-button", scenarioId: "outlined" },
            { componentId: "event-long-card", scenarioId: "default" },
            { componentId: "pricing-card", scenarioId: "custom" },
        ]),
    },
];

/**
 * Reverse index: for each component, list which edge contexts touch it.
 */
export const edgeCaseCoverageByComponent = Object.fromEntries(
    renderableFixtureScenarios.map((scenario) => [scenario.componentId, []]),
);

/**
 * Fill the reverse index from the matrix above.
 */
for(const context of edgeCaseMatrix){
    for(const scenario of context.scenarios){
        edgeCaseCoverageByComponent[scenario.componentId].push(context.id);
    }
}

/**
 * Deduplicate because one component can appear multiple times per context.
 */
for(const [componentId, contexts] of Object.entries(edgeCaseCoverageByComponent)){
    edgeCaseCoverageByComponent[componentId] = [...new Set(contexts)].sort();
}
