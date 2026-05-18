import fs from "fs";
import os from "os";
import path from "path";
import { spawnSync } from "child_process";
import { describe, it } from "mocha";
import { expect } from "chai";
import * as sass from "sass";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repositoryRoot = path.resolve(__dirname, "..");

/**
 * Small sync runner: fail fast and bubble the real CLI output into the test failure.
 */
function run(command, args, cwd){
    const result = spawnSync(command, args, {
        cwd,
        encoding: "utf8",
    });

    if(result.status !== 0){
        throw new Error(result.stderr || result.stdout || `${command} failed`);
    }

    return result.stdout.trim();
}

describe("CONSUMER SMOKE", function () {
    this.timeout(120000);

    it("packs a consumer-safe tarball with working Sass entrypoints", function () {
        /**
         * Build a throwaway consumer workspace so the test behaves like a real install.
         */
        const workspace = fs.mkdtempSync(path.join(os.tmpdir(), "css-ui-consumer-"));
        const packDirectory = path.join(workspace, "pack");
        const extractDirectory = path.join(workspace, "extract");
        const consumerDirectory = path.join(workspace, "consumer");
        const installedPackageDirectory = path.join(consumerDirectory, "node_modules", "@guebbit", "css-ui");
        const installedToolkitDirectory = path.join(consumerDirectory, "node_modules", "@guebbit", "css-toolkit");

        fs.mkdirSync(packDirectory, { recursive: true });
        fs.mkdirSync(extractDirectory, { recursive: true });
        fs.mkdirSync(installedPackageDirectory, { recursive: true });
        fs.mkdirSync(installedToolkitDirectory, { recursive: true });

        const packOutput = run("npm", ["pack", "--json", "--pack-destination", packDirectory], repositoryRoot);
        const [{ filename }] = JSON.parse(packOutput);
        const tarballPath = path.join(packDirectory, filename);

        /**
         * Unpack exactly what npm would publish, not the full repository checkout.
         */
        run("tar", ["-xf", tarballPath, "-C", extractDirectory], repositoryRoot);
        fs.cpSync(path.join(extractDirectory, "package"), installedPackageDirectory, { recursive: true });
        fs.cpSync(
            path.join(repositoryRoot, "node_modules", "@guebbit", "css-toolkit"),
            installedToolkitDirectory,
            { recursive: true },
        );

        const packedPackageJson = JSON.parse(
            fs.readFileSync(path.join(installedPackageDirectory, "package.json"), "utf8"),
        );
        /**
         * These are the entrypoints a consumer is expected to reach.
         */
        const packageScssPaths = {
            root: "./node_modules/@guebbit/css-ui/index.scss",
            components: "./node_modules/@guebbit/css-ui/src/index.scss",
            simpleButton: "./node_modules/@guebbit/css-ui/src/components/atoms/button-simple/index.scss",
            simpleCard: "./node_modules/@guebbit/css-ui/src/components/molecules/card-simple/index.scss",
        };

        /**
         * Fast boundary checks: exports and packaged files must look sane.
         */
        expect(packedPackageJson.exports).to.have.property(".");
        expect(packedPackageJson.exports).to.have.property("./components");
        expect(packedPackageJson.exports).to.have.property("./atoms/*");
        expect(packedPackageJson.exports).to.have.property("./molecules/*");
        expect(fs.existsSync(path.join(installedPackageDirectory, "dist", "css-ui.css"))).to.equal(true);
        expect(fs.existsSync(path.join(installedPackageDirectory, "docs"))).to.equal(false);
        expect(fs.existsSync(path.join(installedPackageDirectory, "test"))).to.equal(false);
        expect(fs.existsSync(path.join(consumerDirectory, packageScssPaths.root))).to.equal(true);
        expect(fs.existsSync(path.join(consumerDirectory, packageScssPaths.components))).to.equal(true);
        expect(fs.existsSync(path.join(consumerDirectory, packageScssPaths.simpleButton))).to.equal(true);
        expect(fs.existsSync(path.join(consumerDirectory, packageScssPaths.simpleCard))).to.equal(true);

        /**
         * Real consumer proof: Sass must be able to compile the shipped entrypoints.
         */
        const css = sass.compileString(
            [
                `@use "${packageScssPaths.root}" as root;`,
                `@use "${packageScssPaths.components}" as components;`,
                `@use "${packageScssPaths.simpleButton}" as simpleButton;`,
                `@use "${packageScssPaths.simpleCard}" as simpleCard;`,
            ].join("\n"),
            {
                loadPaths: [path.join(consumerDirectory, "node_modules")],
                style: "expanded",
                url: new URL(`file://${path.join(consumerDirectory, "app.scss")}`),
            },
        ).css;

        expect(css).to.contain(".guebbit-simple-button");
        expect(css).to.contain(".guebbit-simple-card");
    });
});
