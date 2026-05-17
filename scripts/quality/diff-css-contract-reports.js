import fs from "fs";
import path from "path";

import {
    compareCssContracts,
    formatCssContractDiffMarkdown,
} from "./css-contract.js";

// Tiny CLI parser: enough for our internal report commands.
function getArgument(name, fallback = null){
    const index = process.argv.indexOf(name);
    return index === -1 ? fallback : process.argv[index + 1];
}

// Missing base data is allowed, but missing current data is not.
function readJson(filePath){
    if(!filePath || !fs.existsSync(filePath)){
        return null;
    }

    return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

// Base may be absent on first runs; current must always exist.
const baseContract = readJson(getArgument("--base"));
const currentContract = readJson(getArgument("--current"));
const jsonOutputPath = getArgument("--json");
const markdownOutputPath = getArgument("--markdown");

if(!currentContract){
    throw new Error("Current CSS contract report is required.");
}

const diff = compareCssContracts(baseContract, currentContract);

// JSON is for automation and machine comparisons.
if(jsonOutputPath){
    fs.mkdirSync(path.dirname(jsonOutputPath), { recursive: true });
    fs.writeFileSync(jsonOutputPath, `${JSON.stringify(diff, null, 2)}\n`);
}

// Markdown is for humans reading CI artifacts.
if(markdownOutputPath){
    fs.mkdirSync(path.dirname(markdownOutputPath), { recursive: true });
    fs.writeFileSync(markdownOutputPath, `${formatCssContractDiffMarkdown(diff)}\n`);
}
