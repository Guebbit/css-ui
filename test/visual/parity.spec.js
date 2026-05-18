import fs from "fs";
import path from "path";
import { test, expect } from "@playwright/test";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";

import {
    draftParityFixtureScenarios,
    enforcedParityFixtureScenarios,
    inventoryOnlyComponents,
    renderableFixtureScenarios,
    visualManifest,
} from "../../visual-fixtures/manifest.js";

const includeDraftParity = process.env.VISUAL_INCLUDE_DRAFTS === "1";

async function captureFixture(page, version, fixtureId){
    /**
     * The fixture pages set data-ready after the shared renderer has injected the
     * markup and completed a paint. Using domcontentloaded avoids false timeouts
     * on fixtures that intentionally contain long-lived CSS animation primitives.
     */
    await page.goto(`/visual-fixtures/${version}.html?fixture=${fixtureId}`, { waitUntil: "domcontentloaded" });
    await page.waitForFunction(() => document.documentElement.dataset.ready === "true");

    const fixture = page.locator('[data-testid="fixture-root"]');
    await expect(fixture).toBeVisible();
    expect(await fixture.evaluate((node) => node.innerHTML.trim().length)).toBeGreaterThan(0);
    return fixture.screenshot({ animations: "disabled" });
}

function comparePng(referenceBuffer, currentBuffer){
    const reference = PNG.sync.read(referenceBuffer);
    const current = PNG.sync.read(currentBuffer);

    if(reference.width !== current.width || reference.height !== current.height){
        throw new Error(
            `Screenshot dimensions mismatch: reference=${reference.width}x${reference.height}, current=${current.width}x${current.height}.`,
        );
    }

    const diff = new PNG({ width: reference.width, height: reference.height });
    const diffPixels = pixelmatch(reference.data, current.data, diff.data, reference.width, reference.height, {
        threshold: 0.1,
        includeAA: false,
    });

    return {
        diffPixels,
        totalPixels: reference.width * reference.height,
        diffImageBuffer: PNG.sync.write(diff),
    };
}

test.describe("visual fixture inventory", () => {
    test("all v2 component styles are represented in the visual manifest", () => {
        const srcRoot = path.resolve(process.cwd(), "src");
        /**
         * Component folders in this repo use src/<tier>/<group>/<component>/index.scss,
         * so the component id is the directory just before index.scss.
         */
        const componentIndexScss = fs.readdirSync(srcRoot, { recursive: true })
            .filter((entry) => entry.endsWith("/index.scss"))
            .filter((entry) => entry !== "index.scss")
            .map((entry) => entry.split("/").at(-2));
        const manifestComponents = new Set(visualManifest.components.map((component) => component.componentId));
        const missingManifestEntries = [...new Set(componentIndexScss)].filter((componentId) => !manifestComponents.has(componentId));

        expect(missingManifestEntries, `Missing visual manifest entries: ${missingManifestEntries.join(", ")}`).toEqual([]);
    });

    test("all practical v2 components have at least one fixture scenario", () => {
        const scenarioLessV2Components = visualManifest.components
            .filter((component) => component.styleImports.v2)
            .filter((component) => component.scenarios.length === 0)
            .map((component) => component.componentId);

        expect(
            scenarioLessV2Components,
            `Expected at least one fixture scenario for each practical v2 component: ${scenarioLessV2Components.join(", ")}`,
        ).toEqual([]);
    });

    test(
        "manifest inventories renderable and inventory-only components",
        () => {
            expect(visualManifest.components.length).toBeGreaterThan(0);
            expect(renderableFixtureScenarios.length).toBeGreaterThan(0);
            expect(inventoryOnlyComponents.length).toBeGreaterThan(0);
        },
    );

    test("all renderable fixtures load in both v1 and v2", async ({ page }) => {
        /**
         * This smoke test iterates every renderable fixture twice (v1 + v2), so it
         * legitimately exceeds Playwright's default 30s timeout once coverage grows.
         */
        test.setTimeout(180000);

        for(const scenario of renderableFixtureScenarios){
            await captureFixture(page, "v1", scenario.fixtureId);
            await captureFixture(page, "v2", scenario.fixtureId);
        }
    });
});

test.describe("v1-to-v2 visual parity", () => {
    for(const scenario of enforcedParityFixtureScenarios){
        test(`${scenario.componentId} parity (${scenario.fixtureId})`, async ({ page }, testInfo) => {
            const referenceScreenshot = await captureFixture(page, "v1", scenario.fixtureId);
            const currentScreenshot = await captureFixture(page, "v2", scenario.fixtureId);
            const comparison = comparePng(referenceScreenshot, currentScreenshot);
            const diffRatio = comparison.diffPixels / comparison.totalPixels;

            if(diffRatio > scenario.maxDiffRatio){
                const diffPath = testInfo.outputPath(`${scenario.fixtureId}.diff.png`);
                fs.writeFileSync(diffPath, comparison.diffImageBuffer);
                await testInfo.attach(`${scenario.fixtureId}-diff`, {
                    path: diffPath,
                    contentType: "image/png",
                });
            }

            expect(
                diffRatio,
                `Visual diff ratio ${diffRatio.toFixed(4)} exceeds ${scenario.maxDiffRatio} for fixture "${scenario.fixtureId}"`,
            ).toBeLessThanOrEqual(scenario.maxDiffRatio);
        });
    }

    const draftScenarios = includeDraftParity ? draftParityFixtureScenarios : [];

    for(const scenario of draftScenarios){
        test(`${scenario.componentId} parity (${scenario.fixtureId})`, async ({ page }, testInfo) => {
            const referenceScreenshot = await captureFixture(page, "v1", scenario.fixtureId);
            const currentScreenshot = await captureFixture(page, "v2", scenario.fixtureId);
            const comparison = comparePng(referenceScreenshot, currentScreenshot);
            const diffRatio = comparison.diffPixels / comparison.totalPixels;

            if(diffRatio > scenario.maxDiffRatio){
                const diffPath = testInfo.outputPath(`${scenario.fixtureId}.diff.png`);
                fs.writeFileSync(diffPath, comparison.diffImageBuffer);
                await testInfo.attach(`${scenario.fixtureId}-diff`, {
                    path: diffPath,
                    contentType: "image/png",
                });
            }

            expect(
                diffRatio,
                `Visual diff ratio ${diffRatio.toFixed(4)} exceeds ${scenario.maxDiffRatio} for fixture "${scenario.fixtureId}"`,
            ).toBeLessThanOrEqual(scenario.maxDiffRatio);
        });
    }

    test("draft parity coverage is opt-in", () => {
        test.skip(includeDraftParity, "Draft parity comparisons are being exercised in this run.");
        expect(draftParityFixtureScenarios.length).toBeGreaterThan(0);
    });
});
