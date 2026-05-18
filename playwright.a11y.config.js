/**
 * Playwright configuration for the accessibility (a11y) test suite.
 *
 * STRATEGY
 * The a11y suite runs two complementary test files against a dedicated
 * fixture harness:
 *
 *   test/a11y/axe.spec.js       — axe-core automated accessibility assertions.
 *     Renders each component fixture with semantic HTML and asserts that no
 *     axe violations are present (color-contrast is excluded because the
 *     library uses unresolved CSS custom properties; see docs/library/accessibility.md).
 *
 *   test/a11y/keyboard.spec.js  — keyboard navigation and focus management.
 *     Tabs through interactive elements, verifies focus lands on the right
 *     elements, and checks that disabled controls are skipped.
 *
 * HARNESS
 * The a11y harness lives in a11y-fixtures/ and is served by the same Vite
 * dev server used by the visual fixture suite (port 4173). Each fixture is
 * identified by a `?fixture=` URL parameter.
 *
 * RUNNING LOCALLY
 *   npm run test:a11y
 */

import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    /**
     * Keep a11y tests isolated in their own directory.
     */
    testDir: "./test/a11y",

    /**
     * Generous per-test timeout to account for Vite cold starts.
     */
    timeout: 30_000,

    expect: {
        /**
         * Timeout for Playwright `expect()` assertions (e.g. toBeVisible).
         */
        timeout: 5_000,
    },

    use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1280, height: 720 },
        /**
         * No HiDPI scaling — keeps layout predictable.
         */
        deviceScaleFactor: 1,
        /**
         * Start in light mode; dark-mode scenarios emulate the color scheme
         * inside the individual test.
         */
        colorScheme: "light",
        screenshot: "only-on-failure",
        trace: "retain-on-failure",
    },

    outputDir: process.env.PLAYWRIGHT_A11Y_OUTPUT_DIR ?? "test-results/a11y",

    webServer: {
        /**
         * Reuse the same Vite server that serves visual-fixtures/.
         * The a11y harness (a11y-fixtures/harness.html) is served from the
         * same root so no extra server process is needed.
         */
        command: "npm run visual:serve",
        port: 4173,
        timeout: 120_000,
        reuseExistingServer: !process.env.CI,
    },

    reporter: [
        ["list"],
        ["html", {
            open: "never",
            outputFolder: process.env.PLAYWRIGHT_A11Y_HTML_REPORT_DIR ?? "playwright-report/a11y",
        }],
    ],
});
