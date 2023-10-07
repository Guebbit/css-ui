const util = require("util");
const sass = require("sass");
const path = require("path");

describe("COMPILE", function() {
    this.timeout(10000);
    it("Compiles in CSS", () => {
        const sassRender = util.promisify(sass.render);
        return sassRender({
            includePaths: ['./scss'],
            file: path.join(__dirname, '../test.scss')
        });
    });
});