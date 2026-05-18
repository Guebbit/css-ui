import { describe, it } from 'mocha';
import { expect } from 'chai';
import path from 'path';
import { fileURLToPath } from 'url';
import { cssCompiler, cssCompilerWithConfig, findFiles, getFilenameFromPath, convertFilename } from './_utils.js';

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
        findFiles(['./src/components/atoms', './src/components/molecules', './src/components/organisms'], ['.css'])
            .filter((filePath) => !filePath.endsWith('.scss'))
            .map((filePath) =>
                // ...and translate the names in a different naming convention (standard of library)
                // to check their presence in the compiled file
                expect(cssCompiled).to.contain(getFilenameFromPath(convertFilename(filePath)))
            );
    });

    it('Check some rules', function () {
        expect(cssCompiled).to.contain('main-color');
    });

    it('ships without a default library prefix', function () {
        expect(cssCompiled).to.contain('.simple-button');
        expect(cssCompiled).to.contain('--main-color');
        expect(cssCompiled).to.not.contain('.guebbit-simple-button');
        expect(cssCompiled).to.not.contain('--guebbit-main-color');
    });

    it('applies configured class and CSS variable prefixes consistently', async function () {
        const prefixedCss = await cssCompilerWithConfig(
            path.join(__dirname, './test.css'),
            `
                $css-ui-prefix: 'acme-',
                $css-ui-class-prefix: 'acme-',
                $css-ui-var-prefix: 'acme-'
            `
        );

        expect(prefixedCss).to.contain('.acme-simple-button');
        expect(prefixedCss).to.contain('.acme-simple-button.acme-button-pill');
        expect(prefixedCss).to.contain('.acme-simple-button .acme-button-icon');
        expect(prefixedCss).to.contain('.acme-simple-card .acme-card-content');
        expect(prefixedCss).to.contain('--acme-main-color');
        expect(prefixedCss).to.contain('--acme-simple-button-padding');
        expect(prefixedCss).to.not.contain('.acme-simple-button .button-icon');
        expect(prefixedCss).to.not.contain('.acme-simple-card .card-content');
    });
});
