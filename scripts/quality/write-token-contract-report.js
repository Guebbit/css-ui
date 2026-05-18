import fs from "fs";
import path from "path";

import {
    collectTokenContract,
    formatTokenContractMarkdown,
} from "./token-contract.js";

function getArgument(name, fallback = null){
    const index = process.argv.indexOf(name);
    return index === -1 ? fallback : process.argv[index + 1];
}

const rootDirectory = path.resolve(getArgument("--root", process.cwd()));
const jsonOutputPath = getArgument("--json");
const markdownOutputPath = getArgument("--markdown");

const tokenContract = collectTokenContract(rootDirectory);

if(jsonOutputPath){
    fs.mkdirSync(path.dirname(jsonOutputPath), { recursive: true });
    fs.writeFileSync(jsonOutputPath, `${JSON.stringify(tokenContract, null, 2)}\n`);
}

if(markdownOutputPath){
    fs.mkdirSync(path.dirname(markdownOutputPath), { recursive: true });
    fs.writeFileSync(markdownOutputPath, `${formatTokenContractMarkdown(tokenContract)}\n`);
}
