import fs from "fs";
import path from "path";

/**
 * Mental model:
 * SCSS stays the source of truth.
 * This file reads SCSS token settings and exports a stable JSON contract.
 */
const TOKEN_SOURCE_PATHS = {
    foundation: {
        palettes: "src/_generics/settings/_palettes.scss",
        spacing: "src/_generics/settings/_spacing.scss",
        typography: "src/_generics/settings/_typography.scss",
        categories: "src/_generics/settings/_token-categories.scss",
    },
    semantic: {
        semantic: "src/_generics/settings/_semantic.scss",
    },
};

const SCALAR_VARIABLE_PATTERN = /^\$(?<name>[\w-]+):\s*(?<value>.+?)\s*!default;/gm;
const MAP_VARIABLE_PATTERN = /^\$(?<name>[\w-]+):\s*\((?<body>[\s\S]*?)\)\s*!default;/gm;
const MAP_ENTRY_PATTERN = /^\s*(?<key>[^:\n]+):\s*(?<value>[^,\n]+),?$/gm;
const CATEGORY_LIST_PATTERN = /\$token-categories:\s*\((?<body>[\s\S]*?)\)\s*!default;/m;

/**
 * Small file-reader helper so path handling stays in one place.
 */
function readTextFile(rootDirectory, relativePath){
    return fs.readFileSync(path.join(rootDirectory, relativePath), "utf8");
}

/**
 * Extract `$token-name: value !default;` variables.
 */
function collectScalarVariables(source){
    const variables = {};

    for(const match of source.matchAll(SCALAR_VARIABLE_PATTERN)){
        const { name, value } = match.groups;
        variables[name] = value.trim();
    }

    return variables;
}

/**
 * Extract SCSS maps like:
 * `$palette-primary: (100: #fff, 200: #eee) !default;`
 */
function collectMapVariables(source){
    const maps = {};

    for(const match of source.matchAll(MAP_VARIABLE_PATTERN)){
        const { name, body } = match.groups;
        const entries = {};

        for(const entry of body.matchAll(MAP_ENTRY_PATTERN)){
            const key = entry.groups.key.trim().replace(/^['"]|['"]$/g, "");
            const value = entry.groups.value.trim().replace(/^['"]|['"]$/g, "");
            entries[key] = value;
        }

        maps[name] = entries;
    }

    return maps;
}

/**
 * Extract the canonical token category list from `$token-categories`.
 */
function collectTokenCategories(source){
    const categoryMatch = source.match(CATEGORY_LIST_PATTERN);
    if(!categoryMatch?.groups?.body){
        return [];
    }

    return categoryMatch.groups.body
        .split("\n")
        .map((entry) => entry.replace(/\/\/.*$/, "").trim())
        .map((entry) => entry.replace(/,$/, ""))
        .filter(Boolean)
        .map((entry) => entry.replace(/^['"]|['"]$/g, ""));
}

/**
 * Parse one SCSS token file into a structured object.
 */
function collectTokenFile(rootDirectory, relativePath){
    const source = readTextFile(rootDirectory, relativePath);
    return {
        file: relativePath,
        scalarVariables: collectScalarVariables(source),
        mapVariables: collectMapVariables(source),
        tokenCategories: collectTokenCategories(source),
    };
}

/**
 * Parse all files in one token layer (foundation or semantic).
 */
function collectLayer(rootDirectory, layerSourcePaths){
    return Object.fromEntries(
        Object.entries(layerSourcePaths).map(([categoryName, relativePath]) => [categoryName, collectTokenFile(rootDirectory, relativePath)]),
    );
}

/**
 * Build the machine-readable token contract.
 * Output is intentionally stable for tests and tooling consumers.
 */
export function collectTokenContract(rootDirectory){
    const packageJson = JSON.parse(readTextFile(rootDirectory, "package.json"));
    const tokenLayers = {
        foundation: collectLayer(rootDirectory, TOKEN_SOURCE_PATHS.foundation),
        semantic: collectLayer(rootDirectory, TOKEN_SOURCE_PATHS.semantic),
    };

    const sourceFiles = Object.values(tokenLayers)
        .flatMap((layer) => Object.values(layer))
        .map((entry) => entry.file);
    const tokenCategoryNames = tokenLayers.foundation.categories.tokenCategories;
    const scalarTokenCount = Object.values(tokenLayers)
        .flatMap((layer) => Object.values(layer))
        .reduce((total, entry) => total + Object.keys(entry.scalarVariables).length, 0);
    const mapTokenCount = Object.values(tokenLayers)
        .flatMap((layer) => Object.values(layer))
        .reduce((total, entry) => total + Object.keys(entry.mapVariables).length, 0);

    return {
        generatedAt: new Date().toISOString(),
        schemaVersion: 1,
        packageName: packageJson.name,
        packageVersion: packageJson.version,
        sourceFiles,
        tokenCategoryNames,
        tokenLayers,
        counts: {
            sourceFiles: sourceFiles.length,
            tokenCategories: tokenCategoryNames.length,
            scalarTokens: scalarTokenCount,
            mapTokens: mapTokenCount,
            totalTokens: scalarTokenCount + mapTokenCount,
        },
    };
}

/**
 * Human-friendly summary for quick review in CI artifacts.
 */
export function formatTokenContractMarkdown(contract){
    return [
        "# Token contract report",
        "",
        `- Package: ${contract.packageName}@${contract.packageVersion}`,
        `- Token source files: ${contract.counts.sourceFiles}`,
        `- Token categories: ${contract.counts.tokenCategories}`,
        `- Scalar tokens: ${contract.counts.scalarTokens}`,
        `- Map tokens: ${contract.counts.mapTokens}`,
        `- Total tokens: ${contract.counts.totalTokens}`,
        "",
        "## Token categories",
        "",
        ...contract.tokenCategoryNames.map((categoryName) => `- ${categoryName}`),
        "",
    ].join("\n");
}
