import path from "path";
import { describe, it } from "mocha";
import { expect } from "chai";
import { fileURLToPath } from "url";

import { collectCssContract } from "../scripts/quality/css-contract.js";
import { collectFixtureCoverage } from "../scripts/quality/fixture-coverage.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repositoryRoot = path.resolve(__dirname, "..");

describe("QUALITY REPORTS", function () {
    this.timeout(120000);

    it("collects a CSS contract report", async function () {
        /**
         * This proves the report can see the public CSS surface reviewers care about.
         */
        const contract = await collectCssContract(repositoryRoot);

        expect(contract.packageName).to.equal("@guebbit/css-ui");
        expect(contract.selectors).to.include("guebbit-simple-button");
        expect(contract.customProperties.length).to.be.greaterThan(0);
        expect(contract.exports).to.include("./components");
    });

    it("collects fixture coverage and edge-case coverage", function () {
        /**
         * This proves observability data exists for both default and edge-case coverage.
         */
        const report = collectFixtureCoverage(repositoryRoot);

        expect(report.summary.manifestComponentCount).to.be.greaterThan(0);
        expect(report.summary.docsBackedComponentCount).to.be.greaterThan(0);
        expect(report.summary.edgeCoveredComponentCount).to.be.greaterThan(0);
        expect(report.edgeCaseContexts.map((context) => context.id)).to.include("rtl");
    });
});
