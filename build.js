/**
 * Build script: compiles multiple entry points through the PostCSS/Sass
 * pipeline and writes plain + minified versions to dist/.
 *
 * Outputs:
 *   dist/css-ui.css       – Full library (main entry, backward-compatible)
 *   dist/css-ui.min.css   – Minified full library
 *   dist/components.css   – Component styles only (no resets/utilities)
 *   dist/utilities.css    – Utility classes only
 *   dist/core.css         – Settings + tools only (empty CSS, for reference)
 */

import postcss from 'postcss';
import postcssImport from 'postcss-import';
import postcssExtendRule from 'postcss-extend-rule';
import postcssNested from 'postcss-nested';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import * as sass from 'sass';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.join(__dirname, 'dist');
fs.mkdirSync(outputDir, { recursive: true });

const basePlugins = [postcssImport({ root: __dirname }), postcssExtendRule(), postcssNested(), autoprefixer()];

/**
 * Compile a single Sass entry point through the PostCSS pipeline.
 *
 * @param {string} inputFile   Absolute path to the .scss source file.
 * @param {string} outputFile  Absolute path for the plain CSS output.
 * @param {boolean} [minify]   Whether to also write a minified version.
 */
async function buildEntry(inputFile, outputFile, minify = false) {
    const css = sass.compile(inputFile, {
        loadPaths: [__dirname, path.join(__dirname, 'node_modules')],
        style: 'expanded'
    }).css;

    const result = await postcss(basePlugins).process(css, { from: inputFile, to: outputFile });
    fs.writeFileSync(outputFile, result.css);
    if (result.map) {
        fs.writeFileSync(outputFile + '.map', result.map.toString());
    }
    console.log(`Built: ${outputFile} (${result.css.length} bytes)`);

    if (minify) {
        const outputFileMin = outputFile.replace(/\.css$/, '.min.css');
        const minResult = await postcss([...basePlugins, cssnano()]).process(css, {
            from: inputFile,
            to: outputFileMin
        });
        fs.writeFileSync(outputFileMin, minResult.css);
        console.log(`Built: ${outputFileMin} (${minResult.css.length} bytes)`);
    }
}

// ---------------------------------------------------------------------------
// Build targets
// ---------------------------------------------------------------------------

// Full library – backward-compatible main output
await buildEntry(path.join(__dirname, 'index.scss'), path.join(outputDir, 'css-ui.css'), true);

// Component styles only (theme tokens + atoms + molecules + organisms)
await buildEntry(path.join(__dirname, 'src', 'index.scss'), path.join(outputDir, 'components.css'));

// Utility classes only
await buildEntry(path.join(__dirname, 'src', 'styles', 'utilities', '_index.scss'), path.join(outputDir, 'utilities.css'));

// Core (settings + tools) – produces empty CSS but validates the SCSS
await buildEntry(path.join(__dirname, 'src', 'styles', 'core.scss'), path.join(outputDir, 'core.css'));
