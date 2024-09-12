import { describe, it } from "mocha";
import { expect } from "chai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {sassCompiler, findFiles, getFilenameFromPath, convertFilename} from "./_utils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let cssCompiled;

describe("COMPILE", function() {
    // to remove timeout error
    this.timeout(10000);

    it('Should compile', async function() {
        cssCompiled = await sassCompiler(path.join(__dirname, './test.scss'), ['./node_modules']);
        // Not necessary, but let's compile the file
        fs.writeFile(path.join(__dirname, 'test.css'), cssCompiled, () => {});
    });

    it('Check that all files are imported correctly', function() {
        // get all src files paths...
        findFiles([
            "./src/atoms",
            "./src/molecules",
            "./src/organisms",
        ], [".scss"])
            .map((filePath) =>
                // ...and translate the names in a different naming convention (standard of library)
                // to check their presence in the compiled file
                expect(cssCompiled).to.contain(
                    getFilenameFromPath(
                        convertFilename(
                            filePath
                        )
                    )
                )
            );
    });

    it('Check some rules', function() {
        expect(cssCompiled).to.contain('--global-background');
        expect(cssCompiled).to.contain('(prefers-color-scheme: dark)');
    });
});