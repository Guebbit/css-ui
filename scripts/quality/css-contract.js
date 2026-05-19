import fs from "fs";
import path from "path";
import postcss from "postcss";
import * as sass from "sass";
import { createPostcssPlugins } from "../tooling/create-postcss-plugins.js";

/**
 * These are the files reviewers usually care about when CSS output shifts.
 */
const DIST_FILES = ["css-ui.css", "css-ui.min.css", "components.css", "utilities.css", "core.css"];
/**
 * Pull public class names from compiled CSS.
 */
const CLASS_SELECTOR_PATTERN = /(^|[\s+,>{~])\.([A-Z_a-z][\w-]*)/gm;
/**
 * Pull declared CSS custom properties from compiled CSS.
 */
const CUSTOM_PROPERTY_PATTERN = /(^|[\s;{])--([A-Z_a-z][\w-]*)\s*:/gm;
/**
 * Pull cascade-layer names so layer API changes stay visible.
 */
const LAYER_PATTERN = /@layer\s+([^;{]+)/g;

/**
 * Small helper: stable ordering makes diffs readable and deterministic.
 */
function sortedUnique(values){
    return [...new Set(values)].sort((left, right) => left.localeCompare(right));
}

/**
 * Generic extractor used by selectors and custom properties.
 */
function extractMatches(source, pattern){
    return sortedUnique([...source.matchAll(pattern)].map((match) => match[2] ?? match[1]).filter(Boolean));
}

/**
 * Layers can be declared as a comma-separated list, so normalize them first.
 */
function extractLayers(source){
    const layers = [];

    for(const match of source.matchAll(LAYER_PATTERN)){
        const names = match[1]
            .split(",")
            .map((entry) => entry.trim())
            .filter(Boolean);
        layers.push(...names);
    }

    return sortedUnique(layers);
}

/**
 * Fallback path: if dist/ is missing, compile the library so the report still works.
 */
async function compileEntry(rootDirectory, relativePath){
    const inputFile = path.join(rootDirectory, relativePath);
    const css = sass.compile(inputFile, {
        loadPaths: [rootDirectory, path.join(rootDirectory, "node_modules")],
        style: "expanded",
    }).css;

    const result = await postcss(createPostcssPlugins(rootDirectory)).process(css, {
        from: inputFile,
        to: inputFile.replace(/\.scss$/, ".css"),
    });

    return result.css;
}

/**
 * Prefer the already-built artifact because that is what ships to consumers.
 */
async function loadContractCss(rootDirectory){
    const contractCssPath = path.join(rootDirectory, "dist", "css-ui.css");

    if(fs.existsSync(contractCssPath)){
        return fs.readFileSync(contractCssPath, "utf8");
    }

    return compileEntry(rootDirectory, "index.scss");
}

/**
 * Package exports are part of the public CSS API, so read package.json too.
 */
function readPackageJson(rootDirectory){
    return JSON.parse(fs.readFileSync(path.join(rootDirectory, "package.json"), "utf8"));
}

/**
 * Main report builder: gather the CSS surface reviewers care about in one place.
 */
export async function collectCssContract(rootDirectory){
    const packageJson = readPackageJson(rootDirectory);
    const contractCss = await loadContractCss(rootDirectory);
    const distributionDirectory = path.join(rootDirectory, "dist");
    const distributionFiles = Object.fromEntries(
        DIST_FILES.map((filename) => {
            const filePath = path.join(distributionDirectory, filename);
            return [filename, fs.existsSync(filePath) ? fs.statSync(filePath).size : null];
        }),
    );

    const contract = {
        generatedAt: new Date().toISOString(),
        packageName: packageJson.name,
        packageVersion: packageJson.version,
        exports: sortedUnique(Object.keys(packageJson.exports ?? {})),
        selectors: extractMatches(contractCss, CLASS_SELECTOR_PATTERN),
        customProperties: extractMatches(contractCss, CUSTOM_PROPERTY_PATTERN),
        layers: extractLayers(contractCss),
        distFiles: distributionFiles,
    };

    contract.counts = {
        exports: contract.exports.length,
        selectors: contract.selectors.length,
        customProperties: contract.customProperties.length,
        layers: contract.layers.length,
    };

    return contract;
}

/**
 * Simple add/remove diff used for selectors, exports, vars, and layers.
 */
function diffValues(baseValues = [], currentValues = []){
    const baseSet = new Set(baseValues);
    const currentSet = new Set(currentValues);

    return {
        added: [...currentSet].filter((value) => !baseSet.has(value)).sort((left, right) => left.localeCompare(right)),
        removed: [...baseSet].filter((value) => !currentSet.has(value)).sort((left, right) => left.localeCompare(right)),
    };
}

/**
 * Compare two reports so CI can say exactly what changed, not just "CSS changed".
 */
export function compareCssContracts(baseContract, currentContract){
    const distributionFiles = Object.fromEntries(
        DIST_FILES.map((filename) => {
            const baseSize = baseContract?.distFiles?.[filename] ?? null;
            const currentSize = currentContract?.distFiles?.[filename] ?? null;
            return [filename, {
                baseSize,
                currentSize,
                delta: baseSize === null || currentSize === null ? null : currentSize - baseSize,
            }];
        }),
    );

    return {
        generatedAt: new Date().toISOString(),
        baseVersion: baseContract?.packageVersion ?? null,
        currentVersion: currentContract.packageVersion,
        exports: diffValues(baseContract?.exports, currentContract.exports),
        selectors: diffValues(baseContract?.selectors, currentContract.selectors),
        customProperties: diffValues(baseContract?.customProperties, currentContract.customProperties),
        layers: diffValues(baseContract?.layers, currentContract.layers),
        distFiles: distributionFiles,
    };
}

/**
 * Human-friendly summary for artifacts and manual review.
 */
export function formatCssContractMarkdown(contract){
    const distributionRows = Object.entries(contract.distFiles)
        .map(([filename, size]) => `| ${filename} | ${size ?? "not built"} |`)
        .join("\n");

    return [
        "# CSS contract report",
        "",
        `- Package: ${contract.packageName}@${contract.packageVersion}`,
        `- Selectors: ${contract.counts.selectors}`,
        `- Custom properties: ${contract.counts.customProperties}`,
        `- Cascade layers: ${contract.counts.layers}`,
        `- Public exports: ${contract.counts.exports}`,
        "",
        "## Dist file sizes",
        "",
        "| File | Bytes |",
        "| --- | ---: |",
        distributionRows,
        "",
    ].join("\n");
}

/**
 * Avoid giant markdown dumps when the diff is large.
 */
function formatDiffList(title, values){
    if(values.length === 0){
        return [`### ${title}`, "", "- none", ""];
    }

    return [
        `### ${title}`,
        "",
        ...values.slice(0, 20).map((value) => `- ${value}`),
        values.length > 20 ? `- …and ${values.length - 20} more` : null,
        "",
    ].filter(Boolean);
}

/**
 * Human-friendly diff report for CI artifacts and step summaries.
 */
export function formatCssContractDiffMarkdown(diff){
    const distributionRows = Object.entries(diff.distFiles)
        .map(([filename, sizes]) => `| ${filename} | ${sizes.baseSize ?? "n/a"} | ${sizes.currentSize ?? "n/a"} | ${sizes.delta ?? "n/a"} |`)
        .join("\n");

    return [
        "# CSS contract diff",
        "",
        `- Base version: ${diff.baseVersion ?? "unavailable"}`,
        `- Current version: ${diff.currentVersion}`,
        "",
        "## Dist file size delta",
        "",
        "| File | Base | Current | Delta |",
        "| --- | ---: | ---: | ---: |",
        distributionRows,
        "",
        ...formatDiffList("Added exports", diff.exports.added),
        ...formatDiffList("Removed exports", diff.exports.removed),
        ...formatDiffList("Added selectors", diff.selectors.added),
        ...formatDiffList("Removed selectors", diff.selectors.removed),
        ...formatDiffList("Added custom properties", diff.customProperties.added),
        ...formatDiffList("Removed custom properties", diff.customProperties.removed),
        ...formatDiffList("Added layers", diff.layers.added),
        ...formatDiffList("Removed layers", diff.layers.removed),
    ].join("\n");
}
