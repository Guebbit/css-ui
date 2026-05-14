import { describe, it } from 'mocha';
import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '../..');

function walkComponentIndexes(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    let files = [];

    for (const entry of entries) {
        const absolutePath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            files = files.concat(walkComponentIndexes(absolutePath));
        } else if (entry.isFile() && entry.name === 'index.scss') {
            files.push(absolutePath);
        }
    }

    return files;
}

function toFixturePath(indexScssPath) {
    const rel = path.relative(path.join(repoRoot, 'src'), indexScssPath);
    const [tier, group, component] = rel.split(path.sep);
    return path.join(repoRoot, 'visual-fixtures', 'components', tier, group, `${component}.fixtures.js`);
}

describe('VISUAL FIXTURE PARITY', function () {
    this.timeout(120000);

    const componentRoots = [
        path.join(repoRoot, 'src', 'atoms'),
        path.join(repoRoot, 'src', 'molecules'),
        path.join(repoRoot, 'src', 'organisms')
    ];

    const sourceFiles = componentRoots
        .flatMap((componentRoot) => walkComponentIndexes(componentRoot))
        .filter((filePath) => {
            const rel = path.relative(path.join(repoRoot, 'src'), filePath);
            return rel.split(path.sep).length === 4;
        });

    it('every component has a fixture file', function () {
        for (const sourceFile of sourceFiles) {
            const fixturePath = toFixturePath(sourceFile);
            expect(fs.existsSync(fixturePath), `${fixturePath} is missing`).to.equal(true);
        }
    });

    it('every fixture scenario compares css v1.3 and v2.0 and loads docs examples', async function () {
        for (const sourceFile of sourceFiles) {
            const fixturePath = toFixturePath(sourceFile);
            const moduleUrl = pathToFileURL(fixturePath).href;
            const fixture = (await import(moduleUrl)).default;

            expect(Array.isArray(fixture.scenarios), `${fixturePath} has invalid scenarios`).to.equal(true);
            expect(fixture.scenarios.length, `${fixturePath} has no scenarios`).to.be.greaterThan(0);

            for (const scenario of fixture.scenarios) {
                expect(typeof scenario.examplePath, `${fixturePath} scenario missing examplePath`).to.equal('string');
                expect(scenario.examplePath.startsWith('docs/examples/'), `${fixturePath} scenario not using docs/examples`).to.equal(true);
                expect(typeof scenario.html, `${fixturePath} scenario missing HTML`).to.equal('string');
                expect(scenario.html.length, `${fixturePath} scenario HTML empty`).to.be.greaterThan(0);

                const targetIds = (scenario.cssTargets || []).map((target) => target.id).sort();
                expect(targetIds, `${fixturePath} scenario missing css targets`).to.deep.equal(['v1_3', 'v2_0']);
            }
        }
    });
});
