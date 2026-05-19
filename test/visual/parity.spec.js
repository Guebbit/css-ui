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

// Draft parity stays optional so unfinished migration work does not block CI by default.
const includeDraftParity = process.env.VISUAL_INCLUDE_DRAFTS === "1";
// Generous per-fixture budget so cold Vite SCSS compiles on the smoke loop
// (which iterates every renderable fixture twice — v1 + v2) do not exhaust
// the test timeout on fresh CI runners. Each scenario incurs two navigations
// plus two ready handshakes, so the budget here must accommodate both halves
// of the round-trip with safety margin for cold-compile and resource pressure.
const TIMEOUT_PER_FIXTURE_MS = 18000;
const PAGE_GOTO_TIMEOUT_MS = 45000;
const FIXTURE_READY_TIMEOUT_MS = 15000;

async function captureFixture(page, version, fixtureId){
    /**
     * The fixture pages set data-ready after the shared renderer has injected the
     * markup and completed a paint. Using domcontentloaded avoids false timeouts
     * on fixtures that intentionally contain long-lived CSS animation primitives.
     */
    await page.goto(`/visual-fixtures/${version}.html?fixture=${fixtureId}`, {
        waitUntil: "domcontentloaded",
        timeout: PAGE_GOTO_TIMEOUT_MS,
    });
    // Wait for the fixture renderer handshake: "true" means ready, "error" means fail fast.
    try{
        await page.waitForFunction(() => {
            const readyState = document.documentElement.dataset.ready;
            return readyState === "true" || readyState === "error";
        }, { timeout: FIXTURE_READY_TIMEOUT_MS });
    } catch(error){
        throw new Error(`Fixture "${fixtureId}" did not reach ready state in ${version}: ${error.message}`);
    }
    const renderError = await page.evaluate(() => document.documentElement.dataset.renderError ?? null);
    if(renderError){
        // Surface renderer errors with fixture context so regressions are easy to localize.
        throw new Error(`Fixture "${fixtureId}" failed to render in ${version}: ${renderError}`);
    }

    const fixture = page.locator('[data-testid="fixture-root"]');
    await expect(fixture).toBeVisible();
    expect(await fixture.evaluate((node) => node.innerHTML.trim().length)).toBeGreaterThan(0);
    return fixture.screenshot({ animations: "disabled" });
}

/**
 * Pixel diffing translates two screenshots into a measurable parity ratio.
 */
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
        const componentRoot = path.resolve(process.cwd(), "src", "components");
        const tiers = ["atoms", "molecules", "organisms"];
        const v2ComponentIds = tiers.flatMap((tier) => {
            const tierDirectory = path.join(componentRoot, tier);
            return fs.readdirSync(tierDirectory, { withFileTypes: true })
                .filter((entry) => entry.isDirectory())
                .map((entry) => entry.name);
        });
        // Manifest IDs are legacy-friendly names, so inventory checks must compare real v2 folder IDs.
        const manifestV2Components = new Set(
            visualManifest.components
                .map((component) => component.styleImports?.v2)
                .filter(Boolean)
                .map((styleImport) => styleImport.split("/").at(-2)),
        );
        const missingManifestEntries = [...new Set(v2ComponentIds)]
            .filter((componentId) => !manifestV2Components.has(componentId));

        expect(missingManifestEntries, `Missing visual manifest entries: ${missingManifestEntries.join(", ")}`).toEqual([]);
    });

    test("all practical v2 components have at least one fixture scenario", () => {
        /**
         * A manifest entry without scenarios is visible to tooling but invisible to rendering checks.
         */
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
            /**
             * This keeps both buckets intentional: some items render, others are tracked only as inventory.
             */
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
        // Scale timeout with suite size so the smoke loop remains stable as fixtures grow.
        test.setTimeout(Math.max(180000, renderableFixtureScenarios.length * TIMEOUT_PER_FIXTURE_MS));

        for(const scenario of renderableFixtureScenarios){
            await captureFixture(page, "v1", scenario.fixtureId);
            await captureFixture(page, "v2", scenario.fixtureId);
        }
    });
});

test.describe("v1-to-v2 visual parity", () => {
    for(const scenario of enforcedParityFixtureScenarios){
        test(`${scenario.componentId} parity (${scenario.fixtureId})`, async ({ page }, testInfo) => {
            /**
             * Each enforced scenario compares the published baseline against the branch under review.
             */
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
            /**
             * Draft parity uses the same measurement path, but it stays opt-in while migration work is incomplete.
             */
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
        /**
         * This protects the default suite from accidentally turning draft comparisons into mandatory gates.
         */
        test.skip(includeDraftParity, "Draft parity comparisons are being exercised in this run.");
        expect(draftParityFixtureScenarios.length).toBeGreaterThan(0);
    });
});
