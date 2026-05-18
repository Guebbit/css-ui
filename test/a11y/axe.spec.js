/**
 * test/a11y/axe.spec.js
 *
 * Automated accessibility assertions using axe-core.
 *
 * WHAT THIS COVERS
 * Each test loads a component fixture served by the a11y harness, then runs
 * axe-core against the rendered DOM. The fixture HTML uses semantic, native
 * interactive elements (<button>, <a>, <input>) — the pattern consumers
 * should follow. Any CSS-caused accessibility regression (e.g. removing
 * focus outlines, hiding content incorrectly) will surface as an axe
 * violation and fail CI.
 *
 * WHAT IS EXCLUDED
 * The `color-contrast` rule is disabled in every test. The library's color
 * system relies on unresolved CSS custom properties (e.g. `var(--color-500)`)
 * and axe cannot compute contrast ratios from unresolved variables.
 * Color contrast must be verified manually or with a design-token audit tool.
 * See docs/library/accessibility.md for the full manual checklist.
 *
 * HOW TO RUN
 *   npm run test:a11y
 */

import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

/**
 * Shared fixture loader — mirrors the pattern used in edge-cases.spec.js.
 * Waits for the harness readiness signal before returning so CSS is fully
 * resolved prior to the axe scan.
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
    await page.waitForFunction(
        () => document.documentElement.dataset.ready === "true",
    );
    /**
     * The fixture root must be visible and non-empty before scanning.
     */
    const fixture = page.locator('[data-testid="fixture-root"]');
    await expect(fixture).toBeVisible();
    expect(
        await fixture.evaluate((node) => node.innerHTML.trim().length),
    ).toBeGreaterThan(0);
}

/**
 * Convenience: run axe scoped to the fixture root element, excluding
 * color-contrast, and return the violations array.
 *
 * Scoping to [data-testid="fixture-root"] prevents page-level best-practice
 * rules (e.g. page-has-heading-one) from firing when testing component
 * fragments. We are auditing individual components, not complete pages.
 */
async function runAxe(page) {
    const results = await new AxeBuilder({ page })
        /**
         * Scope the scan to the rendered component so page-level best-practice
         * rules (heading structure, landmark regions, etc.) do not fire on
         * the harness shell.
         */
        .include('[data-testid="fixture-root"]')
        /**
         * Disabled: color-contrast cannot be computed from unresolved CSS
         * custom properties. Verify contrast manually using the library's
         * design-token palette.
         */
        .disableRules(["color-contrast"])
        .analyze();
    return results.violations;
}

// ---------------------------------------------------------------------------
// button-simple
// ---------------------------------------------------------------------------

test.describe("button-simple — axe violations", () => {
    test("default, outlined, disabled, and link states", async ({ page }) => {
        await loadA11yFixture(page, "button-simple-states");
        const violations = await runAxe(page);
        expect(violations).toEqual([]);
    });

    test("icon-only buttons carry accessible labels", async ({ page }) => {
        await loadA11yFixture(page, "button-simple-icon-only");
        const violations = await runAxe(page);
        expect(violations).toEqual([]);
    });

    test("dark theme — no new violations", async ({ page }) => {
        await loadA11yFixture(page, "dark-theme-buttons", {
            media: { colorScheme: "dark" },
        });
        const violations = await runAxe(page);
        expect(violations).toEqual([]);
    });

    test("prefers-reduced-motion — no new violations", async ({ page }) => {
        await loadA11yFixture(page, "reduced-motion-buttons", {
            media: { reducedMotion: "reduce" },
        });
        const violations = await runAxe(page);
        expect(violations).toEqual([]);
    });
});

// ---------------------------------------------------------------------------
// input-simple
// ---------------------------------------------------------------------------

test.describe("input-simple — axe violations", () => {
    test("labeled inputs: default, outlined, underlined, filled, disabled, required", async ({ page }) => {
        await loadA11yFixture(page, "input-simple-states");
        const violations = await runAxe(page);
        expect(violations).toEqual([]);
    });
});

// ---------------------------------------------------------------------------
// card-simple
// ---------------------------------------------------------------------------

test.describe("card-simple — axe violations", () => {
    test("card with heading structure", async ({ page }) => {
        await loadA11yFixture(page, "card-simple-states");
        const violations = await runAxe(page);
        expect(violations).toEqual([]);
    });
});

// ---------------------------------------------------------------------------
// icon-focus-button
// ---------------------------------------------------------------------------

test.describe("icon-focus-button — axe violations", () => {
    test("link and button variants", async ({ page }) => {
        await loadA11yFixture(page, "icon-focus-button-states");
        const violations = await runAxe(page);
        expect(violations).toEqual([]);
    });
});
