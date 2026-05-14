import { simpleButtonScenarios } from "./components/simple-button.fixtures.js";
import { raindropConcentricScenarios } from "./components/raindrop-concentric.fixtures.js";

function createFixtureId(componentId, scenarioId){
    return `${componentId}-${scenarioId}`;
}

// Manifest-driven parity catalog.
// Components explicitly listed here are the shared v1↔v2 parity target set.
// Any v2 component not listed is treated as "draft" in this migration phase.
export const visualManifest = {
    manifestVersion: 1,
    defaultUnlistedV2Status: "draft",
    components: [
        {
            componentId: "simple-button",
            status: "finished",
            parityEnabled: true,
            fixtureGroup: "atoms/buttons",
            defaultMaxDiffRatio: 0.03,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/buttons/SimpleButton.scss",
                v2: "../src/atoms/buttons/simple-button/index.scss",
            },
            scenarios: simpleButtonScenarios,
        },
        {
            componentId: "raindrop-concentric",
            status: "finished",
            parityEnabled: true,
            fixtureGroup: "atoms/animations",
            defaultMaxDiffRatio: 0.03,
            styleImports: {
                v1: "@guebbit/css-ui-v1/src/atoms/animations/RaindropConcentric.scss",
                v2: "../src/atoms/animations/raindrop-concentric/index.scss",
            },
            scenarios: raindropConcentricScenarios,
        },
    ],
};

export const allFixtureScenarios = visualManifest.components.flatMap((component) => (
    component.scenarios.map((scenario) => ({
        componentId: component.componentId,
        status: component.status,
        fixtureGroup: scenario.fixtureGroup ?? component.fixtureGroup,
        scenarioId: scenario.scenarioId,
        fixtureId: createFixtureId(component.componentId, scenario.scenarioId),
        maxDiffRatio: scenario.maxDiffRatio ?? component.defaultMaxDiffRatio,
        markup: scenario.markup,
        parityEnabled: component.parityEnabled,
    }))
));

export const parityFixtureScenarios = allFixtureScenarios.filter((scenario) => scenario.parityEnabled);

export const fixturesById = Object.fromEntries(
    allFixtureScenarios.map((scenario) => [scenario.fixtureId, scenario.markup]),
);
