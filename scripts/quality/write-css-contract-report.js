import fs from "fs";
import path from "path";

import {
    collectCssContract,
    formatCssContractMarkdown,
} from "./css-contract.js";

function getArgument(name, fallback = null){
    const index = process.argv.indexOf(name);
    return index === -1 ? fallback : process.argv[index + 1];
}

const rootDir = path.resolve(getArgument("--root", process.cwd()));
const jsonOutputPath = getArgument("--json");
const markdownOutputPath = getArgument("--markdown");

const contract = await collectCssContract(rootDir);

if(jsonOutputPath){
    fs.mkdirSync(path.dirname(jsonOutputPath), { recursive: true });
    fs.writeFileSync(jsonOutputPath, `${JSON.stringify(contract, null, 2)}\n`);
}

if(markdownOutputPath){
    fs.mkdirSync(path.dirname(markdownOutputPath), { recursive: true });
    fs.writeFileSync(markdownOutputPath, `${formatCssContractMarkdown(contract)}\n`);
}
