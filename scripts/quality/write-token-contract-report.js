import fs from "fs";
import path from "path";

import {
    collectTokenContract,
    formatTokenContractMarkdown,
} from "./token-contract.js";

/**
 * Tiny CLI parser:
 * reads `--name value` pairs from `process.argv`.
 */
function getCommandLineArgument(name, fallback = null){
    const index = process.argv.indexOf(name);
    return index === -1 ? fallback : process.argv[index + 1];
}

const rootDirectory = path.resolve(getCommandLineArgument("--root", process.cwd()));
const jsonOutputPath = getCommandLineArgument("--json");
const markdownOutputPath = getCommandLineArgument("--markdown");

/**
 * Generate the contract once, then write requested outputs.
 */
const tokenContract = collectTokenContract(rootDirectory);

/**
 * JSON output is for machines (tests, scripts, CI checks).
 */
if(jsonOutputPath){
    fs.mkdirSync(path.dirname(jsonOutputPath), { recursive: true });
    fs.writeFileSync(jsonOutputPath, `${JSON.stringify(tokenContract, null, 2)}\n`);
}

/**
 * Markdown output is for humans reading artifacts quickly.
 */
if(markdownOutputPath){
    fs.mkdirSync(path.dirname(markdownOutputPath), { recursive: true });
    fs.writeFileSync(markdownOutputPath, `${formatTokenContractMarkdown(tokenContract)}\n`);
}
