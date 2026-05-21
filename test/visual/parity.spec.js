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

// Draft parity scenarios are intentionally opt-in.
// This lets unfinished migration work exist in the manifest without breaking the default CI run.
const includeDraftParity = process.env.VISUAL_INCLUDE_DRAFTS === "1";

// These timeouts are for a single fixture render attempt.
// page.goto timeout protects navigation / dev-server response time.
// ready timeout protects the fixture handshake (data-ready=true / data-ready=error).
const PAGE_GOTO_TIMEOUT_MS = 45000;
const FIXTURE_READY_TIMEOUT_MS = 15000;

async function captureFixture(page, version, fixtureId){
    /**
     * Load the fixture page for one version of the component library.
     *
     * Example:
     *   /visual-fixtures/v1.html?fixture=button-defaults
     *
     * We wait only for DOMContentLoaded here because some fixtures contain
     * long-running CSS animations, and waiting for a "fully idle" page would
     * create false hangs.
     */
    await page.goto(`/visual-fixtures/${version}.html?fixture=${fixtureId}`, {
        waitUntil: "domcontentloaded",
        timeout: PAGE_GOTO_TIMEOUT_MS,
    });

    /**
     * The fixture harness is responsible for setting:
     *   data-ready="true"  when rendering completed
     *   data-ready="error" when rendering failed
     *
     * If neither appears in time, this fixture is treated as broken / stuck.
     */
    try{
        await page.waitForFunction(() => {
            const readyState = document.documentElement.dataset.ready;
            return readyState === "true" || readyState === "error";
        }, { timeout: FIXTURE_READY_TIMEOUT_MS });
    } catch(error){
        throw new Error(`Fixture "${fixtureId}" did not reach ready state in ${version}: ${error.message}`);
    }

    /**
     * If the harness explicitly reported a render error, surface it with
     * fixture/version context so the failing case is obvious in Playwright output.
     */
    const renderError = await page.evaluate(() => document.documentElement.dataset.renderError ?? null);
    if(renderError){
        throw new Error(`Fixture "${fixtureId}" failed to render in ${version}: ${renderError}`);
    }

    /**
     * The fixture root must exist, be visible, and contain markup.
     * This protects against "technically loaded page, but nothing actually rendered".
     */
    const fixture = page.locator('[data-testid="fixture-root"]');
    await expect(fixture).toBeVisible();
    expect(await fixture.evaluate((node) => node.innerHTML.trim().length)).toBeGreaterThan(0);

    /**
     * Return a screenshot of the rendered fixture only.
     * Animations are disabled to reduce noise in visual comparisons.
     */
    return fixture.screenshot({ animations: "disabled" });
}

/**
 * Compare two screenshots and return how different they are.
 *
 * We do not use Playwright snapshot files here.
 * Instead, we compare:
 *   v1 published reference render
 *   vs
 *   v2 current branch render
 *
 * This keeps the baseline dynamic and avoids stored golden files.
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
    test("manifest covers every v2 component directory", () => {
        /**
         * Purpose:
         * Make sure every actual v2 component folder is represented in the visual manifest.
         *
         * Why:
         * If a component exists in src/components but is missing from the manifest,
         * the visual tooling will silently ignore it.
         */
        const componentRoot = path.resolve(process.cwd(), "src", "components");
        const tiers = ["atoms", "molecules", "organisms"];

        const v2ComponentIds = tiers.flatMap((tier) => {
            const tierDirectory = path.join(componentRoot, tier);
            return fs.readdirSync(tierDirectory, { withFileTypes: true })
                .filter((entry) => entry.isDirectory())
                .map((entry) => entry.name);
        });

        /**
         * Manifest entries store import paths, so we derive the component folder id
         * from the v2 stylesheet import path.
         */
        const manifestV2Components = new Set(
            visualManifest.components
                .map((component) => component.styleImports?.v2)
                .filter(Boolean)
                .map((styleImport) => styleImport.split("/").at(-2)),
        );

        const missingManifestEntries = [...new Set(v2ComponentIds)]
            .filter((componentId) => !manifestV2Components.has(componentId));

        expect(
            missingManifestEntries,
            `Missing visual manifest entries: ${missingManifestEntries.join(", ")}`,
        ).toEqual([]);
    });

    test("every practical v2 component has at least one fixture scenario", () => {
        /**
         * Purpose:
         * Ensure that components which have a v2 implementation are actually testable.
         *
         * Why:
         * A manifest entry without scenarios is visible in inventory reports,
         * but invisible to rendering checks.
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

    test("manifest contains both renderable fixtures and inventory-only items", () => {
        /**
         * Purpose:
         * Verify that the manifest still includes both categories:
         *   - things we can render in the harness
         *   - things we intentionally track only as inventory
         *
         * Why:
         * This guards against accidentally emptying either bucket.
         */
        expect(visualManifest.components.length).toBeGreaterThan(0);
        expect(renderableFixtureScenarios.length).toBeGreaterThan(0);
        expect(inventoryOnlyComponents.length).toBeGreaterThan(0);
    });
});

/**
 * One smoke test per fixture.
 *
 * Purpose:
 * Confirm that each renderable fixture can load in both v1 and v2 without
 * hanging and without the harness reporting a render error.
 *
 * Why this structure is better than one giant loop:
 * - each fixture gets its own Playwright timeout
 * - failures are isolated
 * - grep works
 * - reporting is clearer
 * - one bad fixture does not make the whole inventory test look frozen
 */
test.describe("renderable fixture smoke coverage", () => {
    for(const scenario of renderableFixtureScenarios){
        test(`fixture "${scenario.fixtureId}" renders in both v1 and v2`, async ({ page }) => {
            await captureFixture(page, "v1", scenario.fixtureId);
            await captureFixture(page, "v2", scenario.fixtureId);
        });
    }
});

test.describe("v1-to-v2 visual parity", () => {
    for(const scenario of enforcedParityFixtureScenarios){
        test(`${scenario.componentId} parity stays within budget for fixture "${scenario.fixtureId}"`, async ({ page }, testInfo) => {
            /**
             * Purpose:
             * Compare v2 against the published v1 visual reference for completed components.
             *
             * Why:
             * Enforced parity fixtures are supposed to stay visually close enough to
             * the legacy implementation to be treated as migration-safe.
             */
            const referenceScreenshot = await captureFixture(page, "v1", scenario.fixtureId);
            const currentScreenshot = await captureFixture(page, "v2", scenario.fixtureId);
            const comparison = comparePng(referenceScreenshot, currentScreenshot);
            const diffRatio = comparison.diffPixels / comparison.totalPixels;

            /**
             * If the diff exceeds the allowed budget, attach a visual diff image
             * so the failure is easier to inspect in Playwright artifacts.
             */
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
        test(`${scenario.componentId} draft parity stays within budget for fixture "${scenario.fixtureId}"`, async ({ page }, testInfo) => {
            /**
             * Purpose:
             * Measure draft migration work using the same visual diff pipeline.
             *
             * Why:
             * Draft parity is useful during refactors, but is intentionally opt-in
             * so unfinished work does not block the default suite.
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

    test("draft parity scenarios stay opt-in by default", () => {
        /**
         * Purpose:
         * Protect the suite contract: draft parity should not silently become mandatory.
         */
        test.skip(includeDraftParity, "Draft parity comparisons are being exercised in this run.");
        expect(draftParityFixtureScenarios.length).toBeGreaterThan(0);
    });
});