import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const PLACEHOLDER_IMAGE_URL = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'%3E%3Crect width='800' height='500' fill='%23d7dbe0'/%3E%3Cpath d='M0 360 L170 220 L305 325 L470 150 L800 360 L800 500 L0 500 Z' fill='%23c1c7cf'/%3E%3Ccircle cx='620' cy='120' r='54' fill='%23ffffff' fill-opacity='0.75'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23525b67' font-family='Arial, Helvetica, sans-serif' font-size='42'%3Efixture image%3C/text%3E%3C/svg%3E";
const sharedExamplesRoot = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "../../docs/examples",
);

// Docs-derived fixtures should stay self-contained in the harness, so any remote
// http(s) asset reference is replaced with the local placeholder image.
//
// Interaction-state note:
// The parity harness renders static HTML snapshots, so pseudo-class states such as
// :hover/:active cannot be driven by user input deterministically at screenshot
// time. Docs snippets that rely on animate-on-hover / animate-on-active are mapped
// to animate-active (dropping the "on-" prefix) so we can still assert the visual
// "engaged" appearance with the utility class supported by components.
// Native states such as [disabled], .active or dedicated state classes are kept.
const externalAssetPattern = /https?:\/\/[^"')\s>]+/g;
const hoverStatePattern = /\banimate-on-(?:hover|active)\b/g;

function wrapFixtureMarkup(markup){
    const trimmedMarkup = markup.trim();

    if(trimmedMarkup.startsWith('<div class="fixture-section"')){
        return trimmedMarkup;
    }

    return `
        <div class="fixture-section">
            ${trimmedMarkup}
        </div>
    `;
}

export function sanitizeFixtureMarkup(markup){
    return markup
        .trim()
        .replace(externalAssetPattern, PLACEHOLDER_IMAGE_URL)
        .replace(hoverStatePattern, "animate-active");
}

export function createDocsScenario(scenarioId, markup, options = {}){
    const scenario = {
        scenarioId,
        fixtureGroup: options.fixtureGroup ?? "docs",
        markup: wrapFixtureMarkup(sanitizeFixtureMarkup(markup)),
    };

    if(options.maxDiffRatio !== undefined){
        scenario.maxDiffRatio = options.maxDiffRatio;
    }

    return scenario;
}

export function loadSharedExample(examplePath){
    const [filePath, regionName] = examplePath.split("#");
    const markup = fs.readFileSync(path.join(sharedExamplesRoot, filePath), "utf8");

    if (!regionName){
        return markup;
    }

    const regionPattern = new RegExp(
        `<!--\\s*#region\\s+${regionName}\\s*-->([\\s\\S]*?)<!--\\s*#endregion\\s+${regionName}\\s*-->`,
        "m",
    );
    const regionMatch = markup.match(regionPattern);

    if (!regionMatch){
        throw new Error(`Missing shared example region "${regionName}" in "${filePath}".`);
    }

    return regionMatch[0];
}

export function createSharedExampleScenario(scenarioId, examplePath, options = {}) {
    const sharedMarkup = Array.isArray(examplePath)
        ? examplePath.map(loadSharedExample).join("\n")
        : loadSharedExample(examplePath);

    return createDocsScenario(scenarioId, sharedMarkup, options);
}
