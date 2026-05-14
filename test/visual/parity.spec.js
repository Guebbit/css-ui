import fs from "fs";
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
    await page.goto(`/visual-fixtures/${version}.html?fixture=${fixtureId}`, { waitUntil: "domcontentloaded" });
    await page.waitForFunction(() => document.documentElement.dataset.ready === "true");

    const fixture = page.locator('[data-testid="fixture-root"]');
    await expect(fixture).toBeVisible();
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
    test(
        "manifest inventories renderable and inventory-only components",
        () => {
            expect(visualManifest.components.length).toBeGreaterThan(0);
            expect(renderableFixtureScenarios.length).toBeGreaterThan(0);
            expect(inventoryOnlyComponents.length).toBeGreaterThan(0);
        },
    );

    test("all renderable fixtures load in both v1 and v2", async ({ page }) => {
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
