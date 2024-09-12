import fs from "fs";
import path from "path";
import util from "util";
import * as sass from "sass";

/**
 * Function to recursively search for .scss files
 *
 * @param dirs
 * @param allowedExtensions
 * @param fileList
 * @returns {*[]}
 */
export function findFiles(dirs = [], allowedExtensions = [], fileList = []) {
    for(let i = 0, len = dirs.length; i < len; i++) {
        // read directory contents
        const files = fs.readdirSync(dirs[0]);
        // check content of every directory
        files.forEach((file) => {
            // path of current file/directory
            const filePath = path.join(dirs[0], file);
            const stat = fs.statSync(filePath);
            // if it's a directory: recursion
            if (stat.isDirectory()) {
                // Recursively search directories
                findFiles([filePath], allowedExtensions, fileList);
            } else if (allowedExtensions.length === 0 || allowedExtensions.some(ext => file.endsWith(ext))) {
                // found a file
                fileList.push(filePath);
            }
        });
    }
    // array of files
    return fileList;
}

/**
 * 
 * @param filepath
 */
export function getFilenameFromPath(filepath){
    return filepath.split("\\").pop().split('.')[0];
}

/**
 * 
 * @param filename
 */
export function convertFilename(filename) {
    // Separate the name and extension
    const [name, extension] = filename.split('.');

    // Convert to lowercase and replace capital letters with - followed by lowercase
    const convertedName = name
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Insert hyphen between lowercase and uppercase letters
        .toLowerCase(); // Convert the whole string to lowercase

    // Return the new file name with the same extension
    return `${convertedName}.${extension}`;
}

/**
 * Compile a scss file
 *
 * @param file
 * @param includePaths
 * @returns {Promise<string>}
 */
export function sassCompiler(file = "", includePaths = []){
    return util.promisify(sass.render)({
        includePaths,
        file,
        outputStyle: 'compressed'
    })
        .then(result => result?.css?.toString());
}