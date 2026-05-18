import autoprefixer from "autoprefixer";
import postcssExtendRule from "postcss-extend-rule";
import postcssImport from "postcss-import";
import postcssNested from "postcss-nested";

/**
 * Build the shared PostCSS plugin chain used by build and tooling scripts.
 *
 * @param {string} rootDirectory
 * @returns {import('postcss').AcceptedPlugin[]}
 */
export function createPostcssPlugins(rootDirectory){
    return [
        postcssImport({ root: rootDirectory }),
        postcssExtendRule(),
        postcssNested(),
        autoprefixer(),
    ];
}
