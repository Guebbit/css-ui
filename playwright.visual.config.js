// Playwright config for visual parity tests.
//
// STRATEGY — parity testing, not golden-file snapshots
// Each test renders the same fixture HTML twice:
//   v1.html  →  @guebbit/css-ui-v1 (published 1.3.0 reference styles)
//   v2.html  →  ../src/            (local branch under review)
// pixelmatch then diffs the two screenshots pixel-by-pixel.
// Tests live in test/visual/ and fixtures in visual-fixtures/.
//
// WHY NO STORED BASELINES
// Golden-file snapshots must be updated every time an intentional visual
// change is made, and they diverge across OS/GPU/font-rendering differences.
// Parity testing sidesteps both problems: the "correct" output is always the
// published reference build rendered in the same browser at the same moment.
//
// ADDING OR EXPANDING A COMPONENT
// 1. Add/extend a fixture source in visual-fixtures/components/.
// 2. Register the component entry in visual-fixtures/manifest.js.
// 3. Keep the manifest metadata aligned with the v1 and v2 component paths.
// 4. Use VISUAL_INCLUDE_DRAFTS=1 for opt-in draft parity during refactor loops.

import { defineConfig, devices } from "@playwright/test";

// CI can override the browser for scheduled matrix runs.
const browserName = process.env.PLAYWRIGHT_BROWSER ?? "chromium";
// Map our simple env value to a stable Playwright desktop profile.
const browserDevices = {
    chromium: devices["Desktop Chrome"],
    firefox: devices["Desktop Firefox"],
    webkit: devices["Desktop Safari"],
};
// Default back to Chromium if the env value is unexpected.
const selectedDevice = browserDevices[browserName] ?? browserDevices.chromium;

export default defineConfig({
    // Keep visual tests isolated from the existing Mocha unit suite.
    testDir: "./test/visual",

    // Individual test timeout (ms).  Generous to account for Vite cold starts.
    timeout: 30_000,

    expect: {
        // Timeout for expect() assertions (e.g. toBeVisible) inside tests.
        timeout: 5_000,
    },

    use: {
        // Lock browser settings so screenshots are pixel-identical across
        // machines and CI runners.  Any change here invalidates parity.
        ...selectedDevice,
        viewport:        { width: 1280, height: 720 },
        deviceScaleFactor: 1,    // no HiDPI scaling — keeps pixel counts predictable
        colorScheme:     "light", // force light mode; dark-mode diffs are separate
        screenshot:      "only-on-failure",
        trace:           "retain-on-failure",
    },

    outputDir: process.env.PLAYWRIGHT_OUTPUT_DIR ?? "test-results",

    webServer: {
        // Vite serves the visual-fixtures/ directory.
        // "visual:serve" in package.json runs: vite --port 4173 --strictPort
        // --strictPort ensures the port isn't silently bumped on conflicts.
        command: "npm run visual:serve",
        port: 4173,
        // Allow up to 2 min for Vite's first SCSS compile (cold start can be slow).
        timeout: 120_000,
        // In local dev, reuse a server already running on port 4173 to avoid
        // killing a watch process.  CI always starts fresh (process.env.CI is set).
        reuseExistingServer: !process.env.CI,
    },

    // "list" reporter: one line per test, failures inline — good for both
    // terminal and CI log readability.
    reporter: [
        ["list"],
        ["html", { open: "never", outputFolder: process.env.PLAYWRIGHT_HTML_REPORT_DIR ?? "playwright-report" }],
    ],
});
