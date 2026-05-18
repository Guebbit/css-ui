/**
 * test/a11y/keyboard.spec.js
 *
 * Keyboard navigation and focus management tests.
 *
 * WHAT THIS COVERS
 * - Tab order: interactive elements receive focus in document order.
 * - Disabled skip: disabled controls are excluded from the tab sequence.
 * - Focus visibility: focused elements have a visible CSS outline or ring
 *   (checked by inspecting computed styles via the browser).
 * - Enter/Space activation: native buttons respond to keyboard activation.
 * - Input reachability: all labeled inputs are reachable by keyboard.
 *
 * WHAT IS NOT COVERED (manual verification required)
 * - Screen reader announcement quality.
 * - Complex widget patterns (accordion, modal focus trap, carousel).
 * - Touch / pointer-only activation.
 * See docs/library/accessibility.md for the full manual checklist.
 *
 * HOW TO RUN
 *   npm run test:a11y
 */

import { test, expect } from "@playwright/test";

/**
 * Shared fixture loader — mirrors the pattern used in axe.spec.js.
 */
async function loadA11yFixture(page, fixtureId, options = {}) {
    await page.emulateMedia({
        colorScheme: "light",
        reducedMotion: "no-preference",
        ...(options.media ?? {}),
    });
    await page.goto(`/a11y-fixtures/harness.html?fixture=${fixtureId}`, {
        waitUntil: "domcontentloaded",
    });
    /**
     * Wait for either success or error so tests fail immediately with a
     * clear message instead of hanging on timeout.
     */
    await page.waitForFunction(
        () => ["true", "error"].includes(document.documentElement.dataset.ready),
    );
    const readyState = await page.evaluate(
        () => document.documentElement.dataset.ready,
    );
    if (readyState === "error") {
        const renderError = await page.evaluate(
            () => document.documentElement.dataset.renderError,
        );
        throw new Error(`A11y fixture render error: ${renderError}`);
    }
    const fixture = page.locator('[data-testid="fixture-root"]');
    await expect(fixture).toBeVisible();
}

/**
 * Returns true when the element has a visible focus indicator (non-zero
 * outline width or box-shadow). Browsers use different mechanisms, so we
 * check both.
 */
async function hasFocusIndicator(page, locator) {
    return locator.evaluate((el) => {
        const style = window.getComputedStyle(el);
        const outlineWidth = Number.parseFloat(style.outlineWidth);
        const boxShadow = style.boxShadow;
        /**
         * A non-zero outline width or a box-shadow value (excluding "none")
         * both count as a visible focus indicator.
         */
        return outlineWidth > 0 || (boxShadow !== "none" && boxShadow !== "");
    });
}

// ---------------------------------------------------------------------------
// button-simple — keyboard navigation
// ---------------------------------------------------------------------------

test.describe("button-simple — keyboard navigation", () => {
    test("tab reaches first button", async ({ page }) => {
        await loadA11yFixture(page, "button-simple-keyboard");

        /**
         * Tab from the body to the first interactive element.
         */
        await page.keyboard.press("Tab");
        const firstId = await page.evaluate(() => document.activeElement?.id);
        expect(firstId).toBe("btn-first");
    });

    test("tab progresses through enabled buttons in order", async ({ page }) => {
        await loadA11yFixture(page, "button-simple-keyboard");

        await page.keyboard.press("Tab");
        const first = await page.evaluate(() => document.activeElement?.id);
        expect(first).toBe("btn-first");

        await page.keyboard.press("Tab");
        const second = await page.evaluate(() => document.activeElement?.id);
        expect(second).toBe("btn-second");
    });

    test("disabled button is skipped in tab order", async ({ page }) => {
        await loadA11yFixture(page, "button-simple-keyboard");

        /**
         * Tab three times: first → second → (skip disabled) → third.
         */
        await page.keyboard.press("Tab");
        await page.keyboard.press("Tab");
        await page.keyboard.press("Tab");
        const focused = await page.evaluate(() => document.activeElement?.id);
        expect(focused).toBe("btn-third");
    });

    test("focused button has a visible focus indicator", async ({ page }) => {
        await loadA11yFixture(page, "button-simple-keyboard");
        await page.keyboard.press("Tab");

        const button = page.locator("#btn-first");
        await expect(button).toBeFocused();

        const hasFocus = await hasFocusIndicator(page, button);
        /**
         * Native <button> elements always have a browser-default outline, but
         * if this assertion fails the component CSS is overriding outline
         * without providing an accessible replacement.
         */
        expect(hasFocus).toBe(true);
    });

    test("Space activates a focused button", async ({ page }) => {
        await loadA11yFixture(page, "button-simple-keyboard");

        /**
         * Expose a click recorder, focus the button, then press Space — the
         * standard keyboard activation for a native <button>.
         */
        let clicked = false;
        await page.exposeFunction("recordClick", () => {
            clicked = true;
        });
        await page.evaluate(() => {
            document.getElementById("btn-first").addEventListener("click", () => window.recordClick());
        });
        await page.locator("#btn-first").focus();
        await page.keyboard.press("Space");
        expect(clicked).toBe(true);
    });

    test("Enter activates a focused button", async ({ page }) => {
        await loadA11yFixture(page, "button-simple-keyboard");

        await page.locator("#btn-first").focus();
        let clicked = false;
        await page.exposeFunction("recordClick", () => {
            clicked = true;
        });
        await page.evaluate(() => {
            document.getElementById("btn-first").addEventListener("click", () => window.recordClick());
        });
        await page.keyboard.press("Enter");
        expect(clicked).toBe(true);
    });

    test("Shift+Tab moves focus backwards", async ({ page }) => {
        await loadA11yFixture(page, "button-simple-keyboard");

        await page.keyboard.press("Tab");
        await page.keyboard.press("Tab");
        const atSecond = await page.evaluate(() => document.activeElement?.id);
        expect(atSecond).toBe("btn-second");

        await page.keyboard.press("Shift+Tab");
        const backToFirst = await page.evaluate(() => document.activeElement?.id);
        expect(backToFirst).toBe("btn-first");
    });
});

// ---------------------------------------------------------------------------
// input-simple — keyboard navigation
// ---------------------------------------------------------------------------

test.describe("input-simple — keyboard navigation", () => {
    test("tab reaches first input", async ({ page }) => {
        await loadA11yFixture(page, "input-simple-keyboard");
        await page.keyboard.press("Tab");
        const firstId = await page.evaluate(() => document.activeElement?.id);
        expect(firstId).toBe("kbdinput-first");
    });

    test("tab progresses from first to second input", async ({ page }) => {
        await loadA11yFixture(page, "input-simple-keyboard");
        await page.keyboard.press("Tab");
        await page.keyboard.press("Tab");
        const focused = await page.evaluate(() => document.activeElement?.id);
        expect(focused).toBe("kbdinput-second");
    });

    test("disabled input is skipped in tab order", async ({ page }) => {
        await loadA11yFixture(page, "input-simple-keyboard");
        /**
         * Tab order: kbdinput-first → kbdinput-second → (skip disabled) → kbdinput-third.
         */
        for (let i = 0; i < 3; i++) {
            await page.keyboard.press("Tab");
        }
        const focused = await page.evaluate(() => document.activeElement?.id);
        expect(focused).toBe("kbdinput-third");
    });

    test("focused input has a visible focus indicator", async ({ page }) => {
        await loadA11yFixture(page, "input-simple-keyboard");
        await page.keyboard.press("Tab");

        const input = page.locator("#kbdinput-first");
        await expect(input).toBeFocused();

        const hasFocus = await hasFocusIndicator(page, input);
        expect(hasFocus).toBe(true);
    });

    test("focused input accepts text input", async ({ page }) => {
        await loadA11yFixture(page, "input-simple-keyboard");
        await page.keyboard.press("Tab");
        await page.keyboard.type("Hello");
        const value = await page.locator("#kbdinput-first").inputValue();
        expect(value).toBe("Hello");
    });
});
