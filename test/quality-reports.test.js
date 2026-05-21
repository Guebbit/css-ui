import path from "path";
import { describe, it } from "mocha";
import { expect } from "chai";
import { fileURLToPath } from "url";

import { collectCssContract } from "../scripts/css-contract.js";
import { collectFixtureCoverage } from "../scripts/fixture-coverage.js";
import { collectTokenContract } from "../scripts/token-contract.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repositoryRoot = path.resolve(__dirname, "..");

describe("QUALITY REPORTS", function () {
    this.timeout(120000);

    it("collects a CSS contract report", async function () {
        /**
         * The CSS contract report is the machine-readable view of the library's public styling surface.
         */
        const contract = await collectCssContract(repositoryRoot);

        expect(contract.packageName).to.equal("@guebbit/css-ui");
        expect(contract.selectors).to.include("button");
        expect(contract.selectors).to.not.include("guebbit-button");
        expect(contract.customProperties.length).to.be.greaterThan(0);
        expect(contract.exports).to.include("./components");
        expect(contract.layers).to.deep.equal(["helpers", "reset", "tokens"]);
    });

    it("collects fixture coverage and edge-case coverage", function () {
        /**
         * Fixture coverage tells you whether docs, fixtures, and edge-case exercise still overlap enough.
         */
        const report = collectFixtureCoverage(repositoryRoot);

        expect(report.summary.manifestComponentCount).to.be.greaterThan(0);
        expect(report.summary.docsBackedComponentCount).to.be.greaterThan(0);
        expect(report.summary.edgeCoveredComponentCount).to.be.greaterThan(0);
        expect(report.edgeCaseContexts.map((context) => context.id)).to.include("rtl");
    });

    it("collects a machine-readable token contract", function () {
        /**
         * Token reporting keeps the SCSS-first token model understandable to external tooling.
         */
        const tokenContract = collectTokenContract(repositoryRoot);

        expect(tokenContract.packageName).to.equal("@guebbit/css-ui");
        expect(tokenContract.schemaVersion).to.equal(1);
        expect(tokenContract.sourceFiles).to.include("src/_generics/settings/_semantic.scss");
        expect(tokenContract.sourceFiles).to.include("src/_generics/settings/_token-categories.scss");
        expect(tokenContract.tokenCategoryNames).to.include("color");
        expect(tokenContract.tokenCategoryNames).to.include("spacing");
        expect(tokenContract.tokenLayers.foundation.spacing.scalarVariables).to.have.property("spacing-unit");
        expect(tokenContract.tokenLayers.semantic.semantic.scalarVariables).to.have.property("semantic-surface-light");
        expect(tokenContract.tokenLayers.foundation.palettes.mapVariables).to.have.property("palette-primary");
        expect(tokenContract.counts.totalTokens).to.be.greaterThan(0);

        /**
         * Round-tripping guards the contract against non-serializable shapes sneaking in.
         */
        const roundTrippedContract = JSON.parse(JSON.stringify(tokenContract));
        expect(roundTrippedContract.tokenCategoryNames).to.deep.equal(tokenContract.tokenCategoryNames);
    });
});
