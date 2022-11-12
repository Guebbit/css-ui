const util = require("util");
const sass = require("sass");
const path = require("path");

describe("It compiles in CSS", () => {
    it("It compiles in CSS", () => {
        const sassRender = util.promisify(sass.render);
        return sassRender({
            includePaths: ['./scss'],
            file: path.join(__dirname, '../library.scss')
        });
    });
});