import fs from "fs";
import { test, expect } from "@playwright/test";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";

const fixtures = [
    { id: "simple-button-defaults", maxDiffRatio: 0.03 },
    { id: "simple-button-sizes", maxDiffRatio: 0.03 },
];

async function captureFixture(page, version, fixtureId){
    await page.goto(`/visual-fixtures/${version}.html?fixture=${fixtureId}`, { waitUntil: "networkidle" });
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
            `Screenshot dimensions mismatch: reference=${reference.width}x${reference.height}, current=${current.width}x${current.height}`,
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

for(const fixture of fixtures){
    test(`SimpleButton parity (${fixture.id})`, async ({ page }, testInfo) => {
        const referenceScreenshot = await captureFixture(page, "v1", fixture.id);
        const currentScreenshot = await captureFixture(page, "v2", fixture.id);
        const comparison = comparePng(referenceScreenshot, currentScreenshot);
        const diffRatio = comparison.diffPixels / comparison.totalPixels;

        if(diffRatio > fixture.maxDiffRatio){
            const diffPath = testInfo.outputPath(`${fixture.id}.diff.png`);
            fs.writeFileSync(diffPath, comparison.diffImageBuffer);
            await testInfo.attach(`${fixture.id}-diff`, {
                path: diffPath,
                contentType: "image/png",
            });
        }

        expect(
            diffRatio,
            `Visual diff ratio ${diffRatio.toFixed(4)} exceeds ${fixture.maxDiffRatio} for fixture "${fixture.id}"`,
        ).toBeLessThanOrEqual(fixture.maxDiffRatio);
    });
}
