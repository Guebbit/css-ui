/**
 * a11y.spec.js — automated accessibility assertions.
 *
 * Runs inside the same Playwright visual harness that drives parity.spec.js
 * and edge-cases.spec.js.  All fixtures load from visual-fixtures/v2.html and
 * use the same ready-handshake used by the other visual specs.
 *
 * THREE AREAS OF COVERAGE
 *
 * 1. Axe assertions — scoped to the fixture root, critical/serious violations only.
 *    Document-level rules that don't apply to isolated component snippets are disabled.
 *
 * 2. Dark-mode color contrast — axe contrast rule for a representative text-heavy slice.
 *
 * 3. Keyboard focus — native interactive elements (inputs, buttons, links) must be
 *    reachable via Tab and excluded when disabled.
 *
 * KNOWN GAPS (manual review required)
 * - Screen reader announcements: axe cannot verify how text is announced aloud.
 * - Focus-ring visual quality: border-color changes (used by input) are not
 *   evaluated for sufficient visual distinctiveness by automated tooling.
 * - Animation accessibility beyond reduced-motion render: axe does not audit timing
 *   or pacing of CSS animations.
 * - Divs styled as buttons (button): demo markup uses <div> not <button>, so
 *   keyboard focus and button-name rules are intentionally out of scope here.
 */

import { createRequire } from "module";
import { test, expect } from "@playwright/test";
import { renderableFixtureScenarios } from "../../visual-fixtures/manifest.js";

/**
 * Resolve axe-core at module time so addScriptTag works on every OS.
 * createRequire is used because import.meta.resolve is not yet stable in Node 20.
 */
const require = createRequire(import.meta.url);
const axeCorePath = require.resolve("axe-core");

/**
 * Per-test timeout.  Each axe check loads one page and runs the scanner (~2–5 s).
 */
const A11Y_TIMEOUT_MS = 20_000;

/**
 * Axe rule set tuned for isolated component fixture snippets.
 *
 * Rules that test whole-document structure are disabled here because each
 * fixture is an intentionally minimal fragment, not a full page.  Rules about
 * CSS-visible concerns (contrast, ARIA validity) stay enabled.
 */
const AXE_RULES = {
    /** Core concern for a CSS library: text contrast must meet WCAG AA. */
    "color-contrast": { enabled: true },
    /** Catch invalid ARIA attributes introduced in docs examples. */
    "aria-allowed-attr": { enabled: true },
    /** Catch incorrect ARIA attribute values in docs examples. */
    "aria-valid-attr-value": { enabled: true },
    /** Flag any focusable element hidden from the accessibility tree. */
    "aria-hidden-focus": { enabled: true },
    /** Not applicable: harness page already has a <title>. */
    "document-title": { enabled: false },
    /** Not applicable: the root <html> element already carries lang="en". */
    "html-has-lang": { enabled: false },
    /** Not applicable: fixture root is already inside the harness <main>. */
    "landmark-one-main": { enabled: false },
    /** Not applicable to single-component demo pages. */
    "bypass": { enabled: false },
    /** Not applicable: component demos are not full pages. */
    "page-has-heading-one": { enabled: false },
    /** Not applicable: fixture content is already scoped inside <main>. */
    "region": { enabled: false },
    /**
     * Disabled: doc examples intentionally show isolated inputs without labels
     * so consumers can see the CSS in isolation.  Consumers are expected to add
     * labels in their own markup.
     */
    "label": { enabled: false },
};

/**
 * Per-fixture axe `exclude` selectors for known design-intentional cases.
 *
 * Each entry is a list of CSS selectors that axe should skip *inside* the
 * fixture root.  The exclusions are scoped — never global — and every entry
 * is documented so future maintainers can revisit when a component is restyled.
 *
 * Rationale per fixture:
 * - button + choose-option-card: disabled visual treatment uses a faded
 *   color/opacity by design.  Axe natively exempts elements with the `disabled`
 *   attribute from color-contrast, but these are CSS-class-only fixtures, so we
 *   mirror that exemption via aria-disabled="true" on the demo markup.
 * - scroll-down-arrow `.scroll-down-text`: opacity-0.3 hint text is part of the
 *   animated chevron's visual language; not body copy.
 * - event-lite-card `.event-date-month/-year`: opacity-0.5 secondary metadata
 *   below the prominent day number; intentional muted typography.
 * - timeline-tree `.timeline-tree-slot-date`: demo applies inline opacity:0.5
 *   to demonstrate the "IN" date variant; the muted styling is the demo point.
 * - reveal-slash-container: the active/hover state slides a slash overlay across
 *   the text mid-transition.  Static screenshots of mid-animation cannot meet
 *   contrast; the real end-of-animation state is fine.
 */
const A11Y_SCOPED_EXCLUDES = {
    "button-defaults":                [["[aria-disabled=\"true\"]"]],
    "button-outlined":                [["[aria-disabled=\"true\"]"]],
    "button-plain":                   [["[aria-disabled=\"true\"]"]],
    "choose-option-card-default":            [["[aria-disabled=\"true\"]"]],
    "animation-scroll-down-arrow-default":             [[".scroll-down-text"]],
    "event-lite-card-default":               [[".event-date-month"], [".event-date-year"]],
    "event-lite-card-with-mobile-active":    [[".event-date-month"], [".event-date-year"]],
    "event-lite-card-with-border-active":    [[".event-date-month"], [".event-date-year"]],
    "timeline-tree-default":                 [[".timeline-tree-slot-date"]],
    "reveal-slash-container-default":         [[".reveal-slash-container"]],
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Load a fixture in v2.html using the same ready-handshake as other visual specs.
 */
async function loadFixture(page, fixtureId, options = {}) {
    const search = new URLSearchParams({
        fixture: fixtureId,
        ...(options.urlParams ?? {}),
    }).toString();

    await page.emulateMedia({
        colorScheme: "light",
        forcedColors: "none",
        reducedMotion: "no-preference",
        ...(options.media ?? {}),
    });
    await page.goto(`/visual-fixtures/v2.html?${search}`, { waitUntil: "domcontentloaded" });
    await page.waitForFunction(() => document.documentElement.dataset.ready === "true");

    const fixture = page.locator("[data-testid=\"fixture-root\"]");
    await expect(fixture).toBeVisible();
}

/**
 * Inject axe-core into the page and run it scoped to the fixture root.
 * `excludeSelectors` is an array of axe selector arrays, scoped under the
 * fixture root, that should be skipped (see A11Y_SCOPED_EXCLUDES).
 * Returns the full axe results object.
 */
async function runAxe(page, extraRules = {}, excludeSelectors = []) {
    await page.addScriptTag({ path: axeCorePath });
    return page.evaluate(
        ({ selector, rules, excludeList }) => {
            // Build a context object so excludes are scoped *inside* the fixture root.
            // `include` already constrains axe to the fixture-root subtree, so each
            // exclude entry is passed as a flat selector path. Prefixing the path with
            // the fixture-root selector would make axe treat it as a frame-descent
            // chain (since selector paths with >1 entry mean "descend into iframe"),
            // which silently no-ops because the fixture-root is not an iframe.
            const context = {
                include: [[selector]],
                exclude: excludeList,
            };
            return window.axe.run(context, { rules });
        },
        {
            selector: "[data-testid=\"fixture-root\"]",
            rules: { ...AXE_RULES, ...extraRules },
            excludeList: excludeSelectors,
        },
    );
}

/**
 * Render axe violations as a readable multiline string for assertion messages.
 */
function formatViolations(violations) {
    return violations
        .map(
            (v) =>
                `[${v.impact}] ${v.id}: ${v.description}\n` +
                v.nodes.map((n) => `    ${n.html}`).join("\n"),
        )
        .join("\n");
}

// ---------------------------------------------------------------------------
// 1. Axe assertions — one test per renderable scenario
// ---------------------------------------------------------------------------

test.describe("a11y: axe assertions", () => {
    for (const scenario of renderableFixtureScenarios) {
        test(
            `${scenario.componentId} / ${scenario.scenarioId} has no critical a11y violations`,
            async ({ page }) => {
                test.setTimeout(A11Y_TIMEOUT_MS);

                await loadFixture(page, scenario.fixtureId);

                const results = await runAxe(page, {}, A11Y_SCOPED_EXCLUDES[scenario.fixtureId] ?? []);
                const critical = results.violations.filter(
                    (v) => v.impact === "critical" || v.impact === "serious",
                );

                expect(
                    critical,
                    `Critical/serious a11y violations in "${scenario.fixtureId}":\n${formatViolations(critical)}`,
                ).toHaveLength(0);
            },
        );
    }
});

// ---------------------------------------------------------------------------
// 2. Dark-mode color contrast — representative text-heavy fixtures
// ---------------------------------------------------------------------------

/**
 * Fixtures with visible text that are meaningful for dark-mode contrast checks.
 * Only scenarios that are renderable (have a v2 equivalent) are eligible.
 */
const DARK_CONTRAST_SAMPLE = [
    "button-defaults",
    "button-outlined",
    "event-long-card-default",
    "pricing-card-default",
];

/** Filter the sample to only include scenarios that are actually renderable. */
const darkContrastFixtures = DARK_CONTRAST_SAMPLE.flatMap((fixtureId) => {
    const scenario = renderableFixtureScenarios.find((s) => s.fixtureId === fixtureId);
    return scenario ? [scenario] : [];
});

test.describe("a11y: dark mode color contrast", () => {
    for (const scenario of darkContrastFixtures) {
        test(
            `${scenario.componentId} / ${scenario.scenarioId} passes color contrast in dark mode`,
            async ({ page }) => {
                test.setTimeout(A11Y_TIMEOUT_MS);

                await loadFixture(page, scenario.fixtureId, { media: { colorScheme: "dark" } });

                /**
                 * Override to guarantee the contrast rule is enabled even if the
                 * base AXE_RULES map is later changed.
                 */
                const results = await runAxe(
                    page,
                    { "color-contrast": { enabled: true } },
                    A11Y_SCOPED_EXCLUDES[scenario.fixtureId] ?? [],
                );
                const contrastViolations = results.violations.filter(
                    (v) => v.id === "color-contrast",
                );

                expect(
                    contrastViolations,
                    `Dark-mode contrast violations in "${scenario.fixtureId}":\n${formatViolations(contrastViolations)}`,
                ).toHaveLength(0);
            },
        );
    }
});

// ---------------------------------------------------------------------------
// 3. Keyboard focus — native interactive elements
// ---------------------------------------------------------------------------

/**
 * Fixture IDs used in keyboard-focus tests.
 * Each maps to a scenario that renders native focusable elements.
 */
const KEYBOARD_FIXTURES = {
    /** Has <input> elements including one disabled input. */
    input: "input-default",
    /** Has <button> elements — the parallelogram button uses native <button>. */
    button: "button-parallelogram-default",
    /** Has <a href="#"> elements — the icon-focus button uses native anchors. */
    link: "icon-focus-button-default",
};

test.describe("a11y: keyboard focus — inputs (input-default)", () => {
    test.skip(
        !renderableFixtureScenarios.some((s) => s.fixtureId === KEYBOARD_FIXTURES.input),
        `Fixture "${KEYBOARD_FIXTURES.input}" is not renderable in this build.`,
    );

    test("enabled inputs are in the keyboard tab order", async ({ page }) => {
        await loadFixture(page, KEYBOARD_FIXTURES.input);

        /** Tab from the body to the first focusable element inside the fixture. */
        await page.keyboard.press("Tab");

        const focused = page.locator("[data-testid=\"fixture-root\"] :focus");
        await expect(focused).toHaveCount(1);

        const tagName = await focused.evaluate((el) => el.tagName.toLowerCase());
        expect(tagName, "Tab should move focus to an <input> element").toBe("input");

        const isDisabled = await focused.evaluate((el) => el.disabled);
        expect(isDisabled, "First focused element must not be disabled").toBe(false);
    });

    test("disabled input is excluded from the keyboard tab order", async ({ page }) => {
        await loadFixture(page, KEYBOARD_FIXTURES.input);

        const disabledInputs = page.locator(
            "[data-testid=\"fixture-root\"] input[disabled]",
        );

        /** Confirm the fixture contains a disabled input to test against. */
        await expect(disabledInputs).toHaveCount(1);

        /**
         * The disabled attribute must prevent focus even when called programmatically.
         * If `focus()` does not change activeElement, the element is excluded.
         */
        const isFocusable = await disabledInputs.first().evaluate((el) => {
            el.focus();
            return document.activeElement === el;
        });
        expect(isFocusable, "Disabled input must not be focusable").toBe(false);
    });
});

test.describe("a11y: keyboard focus — buttons (button-parallelogram-default)", () => {
    test.skip(
        !renderableFixtureScenarios.some((s) => s.fixtureId === KEYBOARD_FIXTURES.button),
        `Fixture "${KEYBOARD_FIXTURES.button}" is not renderable in this build.`,
    );

    test("native <button> elements are in the keyboard tab order", async ({ page }) => {
        await loadFixture(page, KEYBOARD_FIXTURES.button);

        await page.keyboard.press("Tab");

        const focused = page.locator("[data-testid=\"fixture-root\"] :focus");
        await expect(focused).toHaveCount(1);

        const tagName = await focused.evaluate((el) => el.tagName.toLowerCase());
        expect(tagName, "Tab should move focus to a <button> element").toBe("button");
    });
});

test.describe("a11y: keyboard focus — links (icon-focus-button-default)", () => {
    test.skip(
        !renderableFixtureScenarios.some((s) => s.fixtureId === KEYBOARD_FIXTURES.link),
        `Fixture "${KEYBOARD_FIXTURES.link}" is not renderable in this build.`,
    );

    test("native <a href> links are in the keyboard tab order", async ({ page }) => {
        await loadFixture(page, KEYBOARD_FIXTURES.link);

        await page.keyboard.press("Tab");

        const focused = page.locator("[data-testid=\"fixture-root\"] :focus");
        await expect(focused).toHaveCount(1);

        const tagName = await focused.evaluate((el) => el.tagName.toLowerCase());
        expect(tagName, "Tab should move focus to an <a> element").toBe("a");
    });
});
