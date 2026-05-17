import { describe, it } from 'mocha';
import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));

describe('PACKAGE SURFACE', function () {
    it('does not publish JavaScript tooling as package entrypoints', function () {
        expect(packageJson).to.not.have.property('main');
        expect(packageJson.exports).to.not.have.property('./vite.config.js');
    });

    it('publishes CSS/SCSS-focused files only', function () {
        expect(packageJson.files).to.include('src');
        expect(packageJson.files).to.include('dist');
        expect(packageJson.files).to.not.include('docs');
        expect(packageJson.files).to.not.include('test');
        expect(packageJson.files).to.not.include('build.js');
        expect(packageJson.files).to.not.include('vite.config.js');
        expect(packageJson.files).to.not.include('README.md');
        expect(packageJson.files).to.not.include('TODO.md');
    });

    it('supports public component subpath exports without src deep-imports', function () {
        expect(packageJson.exports).to.have.property('./atoms/*');
        expect(packageJson.exports).to.have.property('./molecules/*');
        expect(packageJson.exports).to.have.property('./organisms/*');
    });
});
