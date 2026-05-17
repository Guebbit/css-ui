import { test, expect } from "@playwright/test";

import { edgeCaseMatrix } from "../../visual-fixtures/edge-case-matrix.js";

async function loadFixture(page, fixtureId, options = {}){
    const search = new URLSearchParams({ fixture: fixtureId, ...options.urlParams }).toString();
    await page.emulateMedia({
        colorScheme: "light",
        forcedColors: "none",
        reducedMotion: "no-preference",
        ...(options.media ?? {}),
    });
    await page.goto(`/visual-fixtures/v2.html?${search}`, { waitUntil: "domcontentloaded" });
    await page.waitForFunction(() => document.documentElement.dataset.ready === "true");

    const fixture = page.locator('[data-testid="fixture-root"]');
    await expect(fixture).toBeVisible();
    expect(await fixture.evaluate((node) => node.innerHTML.trim().length)).toBeGreaterThan(0);

    if(options.urlParams?.dir){
        await expect(page.locator("html")).toHaveAttribute("dir", options.urlParams.dir);
    }
}

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
