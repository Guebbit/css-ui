import fs from "fs";
import path from "path";

import {
    compareCssContracts,
    formatCssContractDiffMarkdown,
} from "./css-contract.js";

function getArgument(name, fallback = null){
    const index = process.argv.indexOf(name);
    return index === -1 ? fallback : process.argv[index + 1];
}

function readJson(filePath){
    if(!filePath || !fs.existsSync(filePath)){
        return null;
    }

    return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

const baseContract = readJson(getArgument("--base"));
const currentContract = readJson(getArgument("--current"));
const jsonOutputPath = getArgument("--json");
const markdownOutputPath = getArgument("--markdown");

if(!currentContract){
    throw new Error("Current CSS contract report is required.");
}

const diff = compareCssContracts(baseContract, currentContract);

if(jsonOutputPath){
    fs.mkdirSync(path.dirname(jsonOutputPath), { recursive: true });
    fs.writeFileSync(jsonOutputPath, `${JSON.stringify(diff, null, 2)}\n`);
}

if(markdownOutputPath){
    fs.mkdirSync(path.dirname(markdownOutputPath), { recursive: true });
    fs.writeFileSync(markdownOutputPath, `${formatCssContractDiffMarkdown(diff)}\n`);
}
