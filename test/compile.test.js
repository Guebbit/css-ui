import { describe, it } from 'mocha';
import { expect } from 'chai';
import path from 'path';
import { fileURLToPath } from 'url';
import * as sass from 'sass';
import { cssCompiler, cssCompilerWithConfig, findFiles, getFilenameFromPath, convertFilename } from './_utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Compile once, then let the rest of the suite inspect the same CSS artifact.
 */
let cssCompiled;

describe('COMPILE', function () {
    /**
     * Compilation walks the whole library, so the default Mocha timeout is too small.
     */
    this.timeout(60000);

    it('Should compile', async function () {
        /**
         * This is the most basic contract: the public entrypoint must compile at all.
         */
        cssCompiled = await cssCompiler(path.join(__dirname, './test.css'));
    });

    it('Check that all files are imported correctly', function () {
        /**
         * Every plain CSS source file should leave a visible trace in the compiled output.
         */
        findFiles(['./src/components/atoms', './src/components/molecules', './src/components/organisms'], ['.css'])
            .filter((filePath) => !filePath.endsWith('.scss'))
            .map((filePath) =>
                /**
                 * File names are normalized to the selector naming used by the library.
                 */
                expect(cssCompiled).to.contain(getFilenameFromPath(convertFilename(filePath)))
            );
    });

    it('Check some rules', function () {
        /**
         * A tiny spot-check keeps the suite honest about real declarations surviving compilation.
         */
        expect(cssCompiled).to.contain('main-color');
    });

    it('ships without a default library prefix', function () {
        /**
         * The base package should stay neutral until a consumer opts into custom prefixes.
         */
        expect(cssCompiled).to.contain('.simple-button');
        expect(cssCompiled).to.contain('--main-color');
        expect(cssCompiled).to.not.contain('.guebbit-simple-button');
        expect(cssCompiled).to.not.contain('--guebbit-main-color');
    });

    it('applies configured class and CSS variable prefixes consistently', async function () {
        /**
         * Prefixing is a public customization contract, so class names and tokens must move together.
         */
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

    it('emits surface and background root tokens from the shared surfaces mixin', function () {
        const surfacesCss = sass.compileString(
            `@use "../src/_generics" as generics;
             @include generics.surface-root-variables();`,
            {
                loadPaths: [path.resolve(__dirname, '..'), path.resolve(__dirname, '../node_modules')],
                style: 'expanded',
                url: new URL(`file://${path.join(__dirname, 'test-surfaces.scss')}`)
            }
        ).css;

        expect(surfacesCss).to.contain('--background: 255 255 255');
        expect(surfacesCss).to.contain('--on-background: 18 18 18');
        expect(surfacesCss).to.contain('--surface: var(--background)');
        expect(surfacesCss).to.contain('--on-surface: var(--on-background)');
        expect(surfacesCss).to.contain('body {\n  background-color: rgb(var(--background));\n  color: rgb(var(--on-background));\n}');
        expect(surfacesCss).to.contain('.theme--dark');
    });
});
