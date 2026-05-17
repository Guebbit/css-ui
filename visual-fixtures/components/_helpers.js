// Cross-environment loader for docs/examples HTML snippets.
//
// The visual-fixtures manifest is consumed both by Node (the Playwright spec
// imports it directly to enumerate scenarios) and by the in-browser harness
// (Vite bundles render.js → manifest.js → docs-derived.fixtures.js → every
// per-component fixture file). Several fixtures call loadSharedExample() at
// module-init time to splice in shared HTML snippets from docs/examples.
//
// Strategy: in the browser, Vite eagerly inlines every docs/examples HTML file
// as a string via import.meta.glob. In Node, fall back to fs.readFileSync.
// Both paths are synchronous, so existing fixture authors keep their sync API.
// The "fs"/"path"/"url" specifiers are externalized by Vite for the browser,
// but they are *only invoked* in the Node branch, so the browser never trips
// over the externalized stubs.
// The named imports below stay namespace-style so Vite does NOT hoist a
// `const fileURLToPath = __externalized_url["fileURLToPath"]` to the top of the
// module — that hoisting unconditionally accesses the externalized stub at load
// time and throws "Module 'url' has been externalized…" before any of our
// runtime checks run. Namespace imports defer property access until call time.
import * as nodeFs from "fs";
import * as nodePath from "path";
import * as nodeUrl from "url";

// In Vite, this expression is statically transformed into an object literal of
// { '../../docs/examples/foo.html': '<raw html>', … }. In plain Node it throws
// because import.meta.glob is undefined; we catch that and fall back to fs.
let viteSharedExamples = null;
try {
    viteSharedExamples = import.meta.glob("../../docs/examples/**/*.html", {
        query: "?raw",
        import: "default",
        eager: true,
    });
} catch {
    viteSharedExamples = null;
}

const PLACEHOLDER_IMAGE_URL = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'%3E%3Crect width='800' height='500' fill='%23d7dbe0'/%3E%3Cpath d='M0 360 L170 220 L305 325 L470 150 L800 360 L800 500 L0 500 Z' fill='%23c1c7cf'/%3E%3Ccircle cx='620' cy='120' r='54' fill='%23ffffff' fill-opacity='0.75'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23525b67' font-family='Arial, Helvetica, sans-serif' font-size='42'%3Efixture image%3C/text%3E%3C/svg%3E";

let cachedNodeRoot = null;
function readSharedExampleFile(filePath) {
    if (viteSharedExamples) {
        const viteKey = `../../docs/examples/${filePath}`;
        const inlined = viteSharedExamples[viteKey];
        if (inlined === undefined) {
            throw new Error(`Missing shared example file "${filePath}" in Vite bundle.`);
        }
        return inlined;
    }

    if (cachedNodeRoot === null) {
        const path = nodePath.default ?? nodePath;
        const fileURLToPath = nodeUrl.fileURLToPath;
        cachedNodeRoot = path.resolve(
            path.dirname(fileURLToPath(import.meta.url)),
            "../../docs/examples",
        );
    }
    const fs = nodeFs.default ?? nodeFs;
    const path = nodePath.default ?? nodePath;
    return fs.readFileSync(path.join(cachedNodeRoot, filePath), "utf8");
}

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
const externalAssetPattern = /https?:\/\/[^\s"')>]+/g;
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

export function loadSharedExample(examplePath) {
    const [filePath, regionName] = examplePath.split("#");
    const markup = readSharedExampleFile(filePath);

    if (!regionName) {
        return markup;
    }

    const regionPattern = new RegExp(
        `<!--\\s*#region\\s+${regionName}\\s*-->([\\s\\S]*?)<!--\\s*#endregion\\s+${regionName}\\s*-->`,
        "m",
    );
    const regionMatch = markup.match(regionPattern);

    if (!regionMatch) {
        throw new Error(`Missing shared example region "${regionName}" in "${filePath}".`);
    }

    return regionMatch[1];
}

export function createSharedExampleScenario(scenarioId, examplePath, options = {}) {
    const sharedMarkup = Array.isArray(examplePath)
        ? examplePath.map(loadSharedExample).join("\n")
        : loadSharedExample(examplePath);

    return createDocsScenario(scenarioId, sharedMarkup, options);
}
