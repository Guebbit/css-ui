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
         * Rebuild the publish/install flow in a temp folder instead of trusting the repo checkout.
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
         * These paths represent the Sass surface that a real consumer is supposed to import.
         */
        const packageScssPaths = {
            root: "./node_modules/@guebbit/css-ui/index.scss",
            components: "./node_modules/@guebbit/css-ui/src/index.scss",
            button: "./node_modules/@guebbit/css-ui/src/components/atoms/button/index.scss",
            card: "./node_modules/@guebbit/css-ui/src/components/atoms/card/index.scss",
        };

        /**
         * First prove the packed tarball exposes the right files before trying to compile it.
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
        expect(fs.existsSync(path.join(consumerDirectory, packageScssPaths.button))).to.equal(true);
        expect(fs.existsSync(path.join(consumerDirectory, packageScssPaths.card))).to.equal(true);

        /**
         * The final proof is practical: the shipped entrypoints must compile from node_modules.
         */
        const css = sass.compileString(
            [
                `@use "${packageScssPaths.root}" as root;`,
                `@use "${packageScssPaths.components}" as components;`,
                `@use "${packageScssPaths.button}" as button;`,
                `@use "${packageScssPaths.card}" as card;`,
            ].join("\n"),
            {
                loadPaths: [path.join(consumerDirectory, "node_modules")],
                style: "expanded",
                url: new URL(`file://${path.join(consumerDirectory, "app.scss")}`),
            },
        ).css;

        expect(css).to.contain(".button");
        expect(css).to.contain(".card");
        expect(css).to.not.contain(".guebbit-button");
        expect(css).to.not.contain(".guebbit-card");
    });
});
