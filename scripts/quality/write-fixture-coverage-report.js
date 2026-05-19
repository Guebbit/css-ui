import fs from "fs";
import path from "path";

import {
    collectFixtureCoverage,
    formatFixtureCoverageMarkdown,
} from "./fixture-coverage.js";

/**
 * Tiny CLI parser: enough for our internal report commands.
 */
function getArgument(name, fallback = null){
    const index = process.argv.indexOf(name);
    return index === -1 ? fallback : process.argv[index + 1];
}

/**
 * The command can target the current checkout or another worktree if needed.
 */
const rootDirectory = path.resolve(getArgument("--root", process.cwd()));
const jsonOutputPath = getArgument("--json");
const markdownOutputPath = getArgument("--markdown");

const report = collectFixtureCoverage(rootDirectory);

/**
 * JSON is for automation and machine comparisons.
 */
if(jsonOutputPath){
    fs.mkdirSync(path.dirname(jsonOutputPath), { recursive: true });
    fs.writeFileSync(jsonOutputPath, `${JSON.stringify(report, null, 2)}\n`);
}

/**
 * Markdown is for humans reading CI artifacts.
 */
if(markdownOutputPath){
    fs.mkdirSync(path.dirname(markdownOutputPath), { recursive: true });
    fs.writeFileSync(markdownOutputPath, `${formatFixtureCoverageMarkdown(report)}\n`);
}
