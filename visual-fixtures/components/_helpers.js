import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '../..');

export function createCssComparisonTargets() {
    return [
        {
            id: 'v1_3',
            version: '1.3.0',
            stylesheetHref: 'https://unpkg.com/@guebbit/css-ui@1.3.0/dist/css-ui.css'
        },
        {
            id: 'v2_0',
            version: '2.0.0',
            stylesheetHref: 'https://unpkg.com/@guebbit/css-ui@2.0.0/dist/css-ui.css'
        }
    ];
}

export function readExampleHtml(examplePath) {
    const absolutePath = path.resolve(repoRoot, examplePath);
    return fs.readFileSync(absolutePath, 'utf8');
}

export function createSharedExampleScenario({ name, examplePath }) {
    return {
        name,
        examplePath,
        html: readExampleHtml(examplePath),
        cssTargets: createCssComparisonTargets()
    };
}

export function defineComponentFixture({ componentId, sourceFile, scenarios }) {
    return {
        componentId,
        sourceFile,
        scenarios
    };
}
