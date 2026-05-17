import { test, expect } from "@playwright/test";

import { edgeCaseMatrix } from "../../visual-fixtures/edge-case-matrix.js";

// Shared loader used by every context in the matrix.
async function loadFixture(page, fixtureId, options = {}){
    // URL params drive fixture selection and document direction.
    const search = new URLSearchParams({ fixture: fixtureId, ...options.urlParams }).toString();
    // Media emulation lets us test user preferences without mutating fixture HTML.
    await page.emulateMedia({
        colorScheme: "light",
        forcedColors: "none",
        reducedMotion: "no-preference",
        ...(options.media ?? {}),
    });
    await page.goto(`/visual-fixtures/v2.html?${search}`, { waitUntil: "domcontentloaded" });
    await page.waitForFunction(() => document.documentElement.dataset.ready === "true");

    // Smoke tests only need to prove the harness rendered something visible and non-empty.
    const fixture = page.locator('[data-testid="fixture-root"]');
    await expect(fixture).toBeVisible();
    expect(await fixture.evaluate((node) => node.innerHTML.trim().length)).toBeGreaterThan(0);

    if(options.urlParams?.dir){
        await expect(page.locator("html")).toHaveAttribute("dir", options.urlParams.dir);
    }
}

// Generate one smoke test per context/scenario pair so failures stay very local.
test.describe("edge-case fixture smoke", () => {
    for(const context of edgeCaseMatrix){
        for(const scenario of context.scenarios){
            test(`${context.id} renders ${scenario.fixtureId}`, async ({ page }) => {
                await loadFixture(page, scenario.fixtureId, {
                    media: context.media,
                    urlParams: context.urlParams,
                });
            });
        }
    }
});
