import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";

function readJson(filePath){
    if(!filePath || !fs.existsSync(filePath)){
        return null;
    }

    return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function runGit(args){
    const result = spawnSync("git", args, {
        cwd: process.cwd(),
        encoding: "utf8",
    });

    if(result.status !== 0){
        return "";
    }

    return result.stdout.trim();
}

function detectDiffRange(){
    if(process.env.GITHUB_BASE_REF){
        const baseRef = `origin/${process.env.GITHUB_BASE_REF}`;
        const mergeBase = runGit(["merge-base", "HEAD", baseRef]);
        if(mergeBase){
            return `${mergeBase}...HEAD`;
        }
    }

    if(process.env.GITHUB_EVENT_BEFORE && !/^0+$/.test(process.env.GITHUB_EVENT_BEFORE)){
        return `${process.env.GITHUB_EVENT_BEFORE}...HEAD`;
    }

    return "HEAD^...HEAD";
}

function detectChangedComponents(){
    const diffRange = detectDiffRange();
    const output = runGit(["diff", "--name-only", diffRange]);
    const changedComponents = new Set();

    for(const filePath of output.split("\n").filter(Boolean)){
        const srcMatch = filePath.match(/^src\/components\/[^/]+\/([^/]+)\//);
        if(srcMatch){
            changedComponents.add(srcMatch[1]);
        }
    }

    return [...changedComponents].sort((left, right) => left.localeCompare(right));
}

function formatList(values, emptyValue = "none"){
    return values.length > 0 ? values.join(", ") : emptyValue;
}

const cssDiff = readJson(process.env.CSS_CONTRACT_DIFF_PATH);
const fixtureCoverage = readJson(process.env.FIXTURE_COVERAGE_PATH);
const outputPath = process.env.CI_SUMMARY_PATH ?? path.join(process.cwd(), "artifacts", "job-summary.md");
const changedComponents = detectChangedComponents();
const visualPrimaryOutcome = process.env.VISUAL_PRIMARY_OUTCOME ?? "success";
const visualRetryOutcome = process.env.VISUAL_RETRY_OUTCOME ?? "skipped";

const lines = [
    "# CI observability summary",
    "",
    `- Checks: build, test, lint, docs build, consumer smoke, CSS contract, fixture coverage, visual parity, edge-case visual smoke`,
    `- Changed components: ${formatList(changedComponents)}`,
    `- Visual retry status: ${visualPrimaryOutcome === "failure" && visualRetryOutcome === "success" ? "flaky (retry passed)" : visualRetryOutcome === "failure" ? "failed twice" : visualPrimaryOutcome}`,
];

if(cssDiff){
    const distChanges = Object.entries(cssDiff.distFiles)
        .map(([filename, sizes]) => `${filename}: ${sizes.delta ?? "n/a"}`)
        .join(", ");
    lines.push(`- CSS size delta: ${distChanges}`);
    lines.push(`- CSS contract delta: +${cssDiff.selectors.added.length}/-${cssDiff.selectors.removed.length} selectors, +${cssDiff.customProperties.added.length}/-${cssDiff.customProperties.removed.length} custom properties, +${cssDiff.layers.added.length}/-${cssDiff.layers.removed.length} layers`);
}

if(fixtureCoverage){
    lines.push(`- Fixture coverage: ${fixtureCoverage.summary.renderableComponentCount}/${fixtureCoverage.summary.manifestComponentCount} renderable, ${fixtureCoverage.summary.docsBackedComponentCount} docs-backed, ${fixtureCoverage.summary.edgeCoveredComponentCount} edge-covered`);
    lines.push(`- Edge contexts: ${fixtureCoverage.edgeCaseContexts.map((context) => `${context.id} (${context.fixtureCount})`).join(", ")}`);
}

lines.push("");

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${lines.join("\n")}\n`);

if(process.env.GITHUB_STEP_SUMMARY){
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, `${lines.join("\n")}\n`);
}
