import { describe, it } from 'mocha';
import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { cssCompiler, findFiles, getFilenameFromPath, convertFilename } from './_utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let cssCompiled;

describe('COMPILE', function () {
    // to remove timeout error
    this.timeout(60000);

    it('Should compile', async function () {
        cssCompiled = await cssCompiler(path.join(__dirname, './test.css'));
    });

    it('Check that all files are imported correctly', function () {
        // get all src css files paths...
        findFiles(['./src/atoms', './src/molecules', './src/organisms'], ['.css'])
            .filter((filePath) => !filePath.endsWith('.scss'))
            .map((filePath) =>
                // ...and translate the names in a different naming convention (standard of library)
                // to check their presence in the compiled file
                expect(cssCompiled).to.contain(getFilenameFromPath(convertFilename(filePath)))
            );
    });

    it('Check some rules', function () {
        expect(cssCompiled).to.contain('--global-background');
        expect(cssCompiled).to.contain('(prefers-color-scheme: dark)');
    });
});
