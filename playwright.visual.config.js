import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    // Keep visual tests separate from the existing Mocha suite.
    testDir: "./test/visual",
    timeout: 30_000,
    expect: {
        timeout: 5_000,
    },
    use: {
        // Fixed browser settings reduce screenshot noise.
        ...devices["Desktop Chrome"],
        viewport: { width: 1280, height: 720 },
        deviceScaleFactor: 1,
        colorScheme: "light",
    },
    webServer: {
        // Start the lightweight fixture server automatically for the test run.
        command: "npm run visual:serve",
        port: 4173,
        timeout: 120_000,
        reuseExistingServer: !process.env.CI,
    },
    reporter: [["list"]],
});
