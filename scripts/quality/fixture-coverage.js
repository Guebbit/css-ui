import fs from "fs";
import path from "path";

import {
    draftParityFixtureScenarios,
    enforcedParityFixtureScenarios,
    inventoryOnlyComponents,
    renderableFixtureScenarios,
    visualManifest,
} from "../../visual-fixtures/manifest.js";
import { edgeCaseCoverageByComponent, edgeCaseMatrix } from "../../visual-fixtures/edge-case-matrix.js";

/**
 * Stable ordering keeps coverage reports easy to scan and diff.
 */
function sortedUnique(values){
    return [...new Set(values)].sort((left, right) => left.localeCompare(right));
}

/**
 * Source folders tell us which components exist even before fixtures are added.
 */
function listSourceComponentIds(rootDir){
    const tiers = ["atoms", "molecules", "organisms"];
    const componentIds = [];

    for(const tier of tiers){
        const tierDirectory = path.join(rootDir, "src", "components", tier);
        const entries = fs.readdirSync(tierDirectory, { withFileTypes: true });

        for(const entry of entries){
            if(entry.isDirectory()){
                componentIds.push(entry.name);
            }
        }
    }

    return sortedUnique(componentIds);
}

/**
 * Main coverage report: answer "what is covered?" instead of only "did tests pass?".
 */
export function collectFixtureCoverage(rootDir){
    const sourceComponentIds = listSourceComponentIds(rootDir);
    const manifestComponentIds = visualManifest.components.map((component) => component.componentId);
    const missingManifestEntries = sourceComponentIds.filter((componentId) => !manifestComponentIds.includes(componentId));

    const components = visualManifest.components
        .map((component) => {
            const docsScenarioCount = component.scenarios.filter((scenario) => (scenario.fixtureGroup ?? "docs") === "docs").length;
            const renderableScenarioCount = renderableFixtureScenarios.filter(
                (scenario) => scenario.componentId === component.componentId,
            ).length;
            const enforcedParityCount = enforcedParityFixtureScenarios.filter(
                (scenario) => scenario.componentId === component.componentId,
            ).length;
            const draftParityCount = draftParityFixtureScenarios.filter(
                (scenario) => scenario.componentId === component.componentId,
            ).length;

            return {
                componentId: component.componentId,
                status: component.status,
                parityMode: component.parityMode,
                scenarioCount: component.scenarios.length,
                docsScenarioCount,
                renderableScenarioCount,
                enforcedParityCount,
                draftParityCount,
                edgeContexts: edgeCaseCoverageByComponent[component.componentId] ?? [],
            };
        })
        .sort((left, right) => left.componentId.localeCompare(right.componentId));

    return {
        generatedAt: new Date().toISOString(),
        summary: {
            sourceComponentCount: sourceComponentIds.length,
            manifestComponentCount: visualManifest.components.length,
            renderableComponentCount: components.filter((component) => component.renderableScenarioCount > 0).length,
            docsBackedComponentCount: components.filter((component) => component.docsScenarioCount > 0).length,
            enforcedParityComponentCount: components.filter((component) => component.enforcedParityCount > 0).length,
            draftParityComponentCount: components.filter((component) => component.draftParityCount > 0).length,
            inventoryOnlyComponentCount: inventoryOnlyComponents.length,
            edgeCoveredComponentCount: components.filter((component) => component.edgeContexts.length > 0).length,
            edgeCaseContextCount: edgeCaseMatrix.length,
            missingManifestEntries,
        },
        edgeCaseContexts: edgeCaseMatrix.map((context) => ({
            id: context.id,
            label: context.label,
            fixtureCount: context.scenarios.length,
            componentIds: sortedUnique(context.scenarios.map((scenario) => scenario.componentId)),
        })),
        components,
    };
}

/**
 * Markdown version for CI artifacts and quick manual reading.
 */
export function formatFixtureCoverageMarkdown(report){
    const contextRows = report.edgeCaseContexts
        .map((context) => `| ${context.id} | ${context.fixtureCount} | ${context.componentIds.join(", ")} |`)
        .join("\n");

    const componentRows = report.components
        .map((component) => `| ${component.componentId} | ${component.status} | ${component.parityMode} | ${component.scenarioCount} | ${component.docsScenarioCount} | ${component.edgeContexts.join(", ") || "—"} |`)
        .join("\n");

    return [
        "# Fixture coverage report",
        "",
        `- Source components: ${report.summary.sourceComponentCount}`,
        `- Manifest components: ${report.summary.manifestComponentCount}`,
        `- Renderable components: ${report.summary.renderableComponentCount}`,
        `- Docs-backed components: ${report.summary.docsBackedComponentCount}`,
        `- Enforced parity components: ${report.summary.enforcedParityComponentCount}`,
        `- Draft parity components: ${report.summary.draftParityComponentCount}`,
        `- Inventory-only components: ${report.summary.inventoryOnlyComponentCount}`,
        `- Edge-covered components: ${report.summary.edgeCoveredComponentCount}`,
        `- Missing manifest entries: ${report.summary.missingManifestEntries.join(", ") || "none"}`,
        "",
        "## Edge-case contexts",
        "",
        "| Context | Fixtures | Components |",
        "| --- | ---: | --- |",
        contextRows,
        "",
        "## Component coverage",
        "",
        "| Component | Status | Parity | Scenarios | Docs-backed | Edge contexts |",
        "| --- | --- | --- | ---: | ---: | --- |",
        componentRows,
        "",
    ].join("\n");
}
