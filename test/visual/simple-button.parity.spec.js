// Parity tests for SimpleButton.
//
// GOAL
// Ensure the local branch (v2) is visually equivalent to the published
// reference build (v1 = @guebbit/css-ui@1.3.0).
//
// HOW IT WORKS
// There are no stored baseline images.  Each test renders the same fixture
// snippet twice — once via v1.html (published CSS) and once via v2.html (local
// CSS) — then compares the two screenshots with pixelmatch pixel-by-pixel.
// A test fails only when the local branch diverges visually from the reference.
//
// FAILURE READING GUIDE
// • "dimensions mismatch" → a CSS modifier class is likely unrecognised in one
//   version (missing size tier, renamed class, or a mixin emitting wrong
//   selectors).  The dimension values in the error tell you which direction:
//   if the current (v2) screenshot is shorter/narrower, a modifier that adds
//   size in v1 is being silently ignored in v2.
// • diff ratio > maxDiffRatio → the layout is the same size but pixels differ;
//   check colour, shadow, border, or font-size changes between the two builds.
// • Attaching a *.diff.png artifact shows exactly which pixels changed.
//
// To run:            npm run test:visual
// To debug in UI:    npm run test:visual:ui
import fs from "fs";
import { test, expect } from "@playwright/test";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";

// Each entry drives one test case.
// id           – must match a key in visual-fixtures/fixtures.js
// maxDiffRatio – fraction of total pixels allowed to differ (0.03 = 3 %)
const fixtures = [
    // ── appearance / colour variants ─────────────────────────────────────────
    { id: "simple-button-defaults",    maxDiffRatio: 0.03 },
    { id: "simple-button-outlined",    maxDiffRatio: 0.03 },
    { id: "simple-button-plain",       maxDiffRatio: 0.03 },
    // ── size scale ────────────────────────────────────────────────────────────
    { id: "simple-button-sizes",       maxDiffRatio: 0.03 },
    // ── shape variants ────────────────────────────────────────────────────────
    { id: "simple-button-shapes",      maxDiffRatio: 0.03 },
    // ── elevation variants ────────────────────────────────────────────────────
    { id: "simple-button-elevation",   maxDiffRatio: 0.03 },
    // ── active / interaction state ────────────────────────────────────────────
    { id: "simple-button-active",      maxDiffRatio: 0.03 },
    // ── icon-only layout ──────────────────────────────────────────────────────
    { id: "simple-button-icon-only",   maxDiffRatio: 0.03 },
];

async function captureFixture(page, version, fixtureId){
    // v1.html loads the published 1.3.0 reference styles.
    // v2.html loads the local branch styles we are validating.
    await page.goto(`/visual-fixtures/${version}.html?fixture=${fixtureId}`, { waitUntil: "networkidle" });
    await page.waitForFunction(() => document.documentElement.dataset.ready === "true");

    // Only screenshot the fixture area, not the whole browser page.
    const fixture = page.locator('[data-testid="fixture-root"]');
    await expect(fixture).toBeVisible();
    return fixture.screenshot({ animations: "disabled" });
}

function comparePng(referenceBuffer, currentBuffer){
    const reference = PNG.sync.read(referenceBuffer);
    const current = PNG.sync.read(currentBuffer);

    if(reference.width !== current.width || reference.height !== current.height){
        // A size difference this large almost always means a CSS modifier class
        // is silently unrecognised in one build (wrong selector, missing mixin
        // output, renamed class).  Compare the v1 vs v2 rendered HTML manually
        // with `npm run test:visual:ui` to confirm which modifier is the culprit.
        throw new Error(
            `Screenshot dimensions mismatch: reference=${reference.width}x${reference.height}, current=${current.width}x${current.height}. ` +
            `If the current screenshot is smaller, a size/layout modifier that exists in v1 is probably unrecognised in v2 ` +
            `(check class names and mixin selector output).`,
        );
    }

    // pixelmatch gives us a raw diff image + number of changed pixels.
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

for(const fixture of fixtures){
    test(`SimpleButton parity (${fixture.id})`, async ({ page }, testInfo) => {
        const referenceScreenshot = await captureFixture(page, "v1", fixture.id);
        const currentScreenshot = await captureFixture(page, "v2", fixture.id);
        const comparison = comparePng(referenceScreenshot, currentScreenshot);
        const diffRatio = comparison.diffPixels / comparison.totalPixels;

        // Save a visual diff artifact only when the comparison fails.
        if(diffRatio > fixture.maxDiffRatio){
            const diffPath = testInfo.outputPath(`${fixture.id}.diff.png`);
            fs.writeFileSync(diffPath, comparison.diffImageBuffer);
            await testInfo.attach(`${fixture.id}-diff`, {
                path: diffPath,
                contentType: "image/png",
            });
        }

        // Main safety check: v2 must stay close enough to the v1 visual reference.
        expect(
            diffRatio,
            `Visual diff ratio ${diffRatio.toFixed(4)} exceeds ${fixture.maxDiffRatio} for fixture "${fixture.id}"`,
        ).toBeLessThanOrEqual(fixture.maxDiffRatio);
    });
}
