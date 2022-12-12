const stylelint = require("stylelint");
const path = require("path");
const styleLintFormatter = require("stylelint-config-standard-scss");
const assert = require("assert");

describe("LINT", () => {
    it('Generic linting', async () => {
        return stylelint.lint({
            configFile: path.join(__dirname, '../.stylelintrc.json'),
            ignorePath: path.join(__dirname, '../.stylelintignore'),
            formatter: styleLintFormatter,
            files: [
                path.join(__dirname, '../test.scss'),
            ],
        }).then(function (lintResults) {
            // console.log("results", lintResults.results)
            // console.log("output", lintResults.output)
            // console.log("errored", lintResults.errored)
            return assert.equal(lintResults.errored, false);
        }).catch(function (error) {
            // do things with err e.g.
            console.error("ERROR", error.stack);
            return false;
        });
    });
});
