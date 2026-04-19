import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    testDir: "./test/visual",
    timeout: 30_000,
    expect: {
        timeout: 5_000,
    },
    use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1280, height: 720 },
        deviceScaleFactor: 1,
        colorScheme: "light",
    },
    webServer: {
        command: "npm run visual:serve",
        port: 4173,
        timeout: 120_000,
        reuseExistingServer: !process.env.CI,
    },
    reporter: [["list"]],
});
