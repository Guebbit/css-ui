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

function run(command, argumentsList, cwd){
    const result = spawnSync(command, argumentsList, {
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
        const workspace = fs.mkdtempSync(path.join(os.tmpdir(), "css-ui-consumer-"));
        const packDirectory = path.join(workspace, "pack");
        const extractDirectory = path.join(workspace, "extract");
        const consumerDirectory = path.join(workspace, "consumer");
        const installedPackageDirectory = path.join(consumerDirectory, "node_modules", "@guebbit", "css-ui");

        fs.mkdirSync(packDirectory, { recursive: true });
        fs.mkdirSync(extractDirectory, { recursive: true });
        fs.mkdirSync(installedPackageDirectory, { recursive: true });

        const packOutput = run("npm", ["pack", "--json", "--pack-destination", packDirectory], repositoryRoot);
        const [{ filename }] = JSON.parse(packOutput);
        const tarballPath = path.join(packDirectory, filename);

        run("tar", ["-xf", tarballPath, "-C", extractDirectory], repositoryRoot);
        fs.cpSync(path.join(extractDirectory, "package"), installedPackageDirectory, { recursive: true });

        const packedPackageJson = JSON.parse(
            fs.readFileSync(path.join(installedPackageDirectory, "package.json"), "utf8"),
        );

        expect(packedPackageJson.exports).to.have.property(".");
        expect(packedPackageJson.exports).to.have.property("./components");
        expect(fs.existsSync(path.join(installedPackageDirectory, "dist", "css-ui.css"))).to.equal(true);
        expect(fs.existsSync(path.join(installedPackageDirectory, "docs"))).to.equal(false);
        expect(fs.existsSync(path.join(installedPackageDirectory, "test"))).to.equal(false);

        const css = sass.compileString(
            [
                '@use "@guebbit/css-ui";',
                '@use "@guebbit/css-ui/components";',
                '@use "@guebbit/css-ui/atoms/button-simple";',
                '@use "@guebbit/css-ui/molecules/card-simple";',
            ].join("\n"),
            {
                loadPaths: [path.join(consumerDirectory, "node_modules")],
                style: "expanded",
            },
        ).css;

        expect(css).to.contain(".simple-button");
        expect(css).to.contain(".simple-card");
    });
});
