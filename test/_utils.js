import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import postcssImport from 'postcss-import';
import postcssExtendRule from 'postcss-extend-rule';
import postcssNested from 'postcss-nested';
import autoprefixer from 'autoprefixer';
import * as sass from 'sass';

/**
 * Walk the given directories and collect files that match the allowed extensions.
 *
 * @param {string[]} dirs
 * @param {string[]} allowedExtensions
 * @param {string[]} fileList
 * @returns {string[]}
 */
export function findFiles(dirs = [], allowedExtensions = [], fileList = []) {
    for (let i = 0, len = dirs.length; i < len; i++) {
        /**
         * read directory contents
         */
        const files = fs.readdirSync(dirs[0]);
        /**
         * check content of every directory
         */
        files.forEach((file) => {
            /**
             * path of current file/directory
             */
            const filePath = path.join(dirs[0], file);
            const stat = fs.statSync(filePath);
            /**
             * if it's a directory: recursion
             */
            if (stat.isDirectory()) {
                /**
                 * Recursively search directories
                 */
                findFiles([filePath], allowedExtensions, fileList);
            } else if (allowedExtensions.length === 0 || allowedExtensions.some((ext) => file.endsWith(ext))) {
                /**
                 * found a file
                 */
                fileList.push(filePath);
            }
        });
    }
    /**
     * array of files
     */
    return fileList;
}

/**
 * Reduce a path to its filename without the extension.
 *
 * @param {string} filepath
 * @returns {string}
 */
export function getFilenameFromPath(filepath) {
    return path.basename(filepath, path.extname(filepath));
}

/**
 * Convert PascalCase or camelCase filenames to the kebab-case selector style used in compiled CSS.
 *
 * @param {string} filename
 * @returns {string}
 */
export function convertFilename(filename) {
    /**
     * Separate the name and extension
     */
    const lastDot = filename.lastIndexOf('.');
    const name = lastDot !== -1 ? filename.slice(0, lastDot) : filename;
    const extension = lastDot !== -1 ? filename.slice(lastDot + 1) : '';

    /**
     * Convert to lowercase and replace capital letters with - followed by lowercase
     */
    /**
     * Insert a hyphen between lowercase-uppercase boundaries.
     */
    const convertedName = name
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .toLowerCase();

    /**
     * Return the new file name with the same extension
     */
    return extension ? `${convertedName}.${extension}` : convertedName;
}

/**
 * Compile the public library entrypoint the same way the tests consume it.
 *
 * @param {string} referenceFile
 * @returns {Promise<string>}
 */
export async function cssCompiler(referenceFile = '') {
    const scssFile = path.resolve(path.dirname(referenceFile), '../index.scss');
    const css = sass.compile(scssFile, {
        loadPaths: [path.dirname(scssFile), path.join(path.dirname(scssFile), 'node_modules')],
        style: 'expanded'
    }).css;
    const result = await postcss([postcssImport({ root: path.dirname(referenceFile) }), postcssExtendRule(), postcssNested(), autoprefixer()]).process(css, { from: referenceFile });
    return result.css;
}

/**
 * Compile the public entrypoint after injecting test-only variable overrides.
 *
 * @param {string} referenceFile
 * @param {string} config
 * @returns {Promise<string>}
 */
export async function cssCompilerWithConfig(referenceFile = '', config = '') {
    const css = sass.compileString(
        `@use "../src/_generics/variables" with (${config});
        @use "../index.scss";`,
        {
            loadPaths: [path.resolve(path.dirname(referenceFile), '..'), path.resolve(path.dirname(referenceFile), '../node_modules')],
            style: 'expanded',
            url: new URL(`file://${referenceFile}`)
        }
    ).css;
    const result = await postcss([postcssImport({ root: path.dirname(referenceFile) }), postcssExtendRule(), postcssNested(), autoprefixer()]).process(css, { from: referenceFile });
    return result.css;
}
