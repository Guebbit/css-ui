#!/usr/bin/env node
/**
 * Linter: every component's `$css-ui-component-name` (the CSS class root)
 * must match its containing folder name.
 *
 * Convention: folders under src/components/{atoms,molecules,organisms} are
 * kebab-case in `<category>-<modifier>` form (e.g. `button-cyberpunk`,
 * `card-pricing`, `panel-action`). The class name emitted by each
 * component must use the same string so users can predict the class from
 * the folder import path.
 *
 * Exits non-zero on any mismatch so CI fails fast.
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const COMPONENTS_ROOT = path.resolve(__dirname, "../src/components");
const TIERS = ["atoms", "molecules", "organisms"];
// Pull the literal value of `$css-ui-component-name: '<name>'` from SCSS.
const NAME_RE = /\$css-ui-component-name:\s*['"]([^'"]+)['"]/;

async function readComponentName(varsFile){
    const text = await fs.readFile(varsFile, "utf8");
    const m = text.match(NAME_RE);
    return m ? m[1] : null;
}

const issues = [];
let checked = 0;
for(const tier of TIERS){
    const tierDir = path.join(COMPONENTS_ROOT, tier);
    const entries = await fs.readdir(tierDir, { withFileTypes: true });
    for(const e of entries){
        if(!e.isDirectory()) continue;
        const folder = e.name;
        const varsFile = path.join(tierDir, folder, "_variables.scss");
        try{
            await fs.access(varsFile);
        }catch{
            issues.push(`${tier}/${folder}: missing _variables.scss (expected $css-ui-component-name declaration)`);
            continue;
        }
        const declared = await readComponentName(varsFile);
        checked++;
        if(declared === null){
            issues.push(`${tier}/${folder}: _variables.scss has no $css-ui-component-name declaration`);
        }else if(declared !== folder){
            issues.push(`${tier}/${folder}: class name "${declared}" does not match folder name "${folder}"`);
        }
    }
}

if(issues.length > 0){
    console.error(`✖ component-name lint failed (${issues.length} issue${issues.length === 1 ? "" : "s"}):`);
    for(const i of issues) console.error(`  - ${i}`);
    console.error(`\nEach component's $css-ui-component-name must equal its folder name (kebab-case <category>-<modifier>).`);
    process.exit(1);
}

console.log(`✓ component-name lint passed (${checked} components)`);
