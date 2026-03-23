/**
 * Build script: compiles index.css through the PostCSS pipeline and writes
 * both a plain and a minified version to dist/.
 */

import postcss from 'postcss';
import postcssImport from 'postcss-import';
import postcssExtendRule from 'postcss-extend-rule';
import postcssNested from 'postcss-nested';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFile = path.join(__dirname, 'index.css');
const outputDir = path.join(__dirname, 'dist');
const outputFile = path.join(outputDir, 'css-ui.css');
const outputFileMin = path.join(outputDir, 'css-ui.min.css');

const css = fs.readFileSync(inputFile, 'utf-8');

fs.mkdirSync(outputDir, { recursive: true });

const basePlugins = [
    postcssImport({ root: __dirname }),
    postcssExtendRule(),
    postcssNested(),
    autoprefixer(),
];

const result = await postcss(basePlugins).process(css, { from: inputFile, to: outputFile });
fs.writeFileSync(outputFile, result.css);
if (result.map) {
    fs.writeFileSync(outputFile + '.map', result.map.toString());
}

const minResult = await postcss([...basePlugins, cssnano()]).process(css, { from: inputFile, to: outputFileMin });
fs.writeFileSync(outputFileMin, minResult.css);

console.log(`Built: ${outputFile} (${result.css.length} bytes)`);
console.log(`Built: ${outputFileMin} (${minResult.css.length} bytes)`);
