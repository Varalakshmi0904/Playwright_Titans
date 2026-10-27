import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";
import dotenv from "dotenv";
import { authFileFor } from "./utils/authPath.js";
dotenv.config();

// All browsers the suite supports
const allBrowsers = [
  { name: "chromium", device: devices["Desktop Chrome"] },
  { name: "firefox", device: devices["Desktop Firefox"] },
];

// Default is all three browsers. Override with BROWSERS=chromium (or any
// comma-separated list) in .env, the terminal, or Jenkins.
const selected = (process.env.BROWSERS || "chromium,firefox")
  .split(",")
  .map((b) => b.trim());
const activeBrowsers = allBrowsers.filter((b) => selected.includes(b.name));

const testDir = defineBddConfig({
  features: [
    "./features/login.feature",
    "./features/contacts.feature",
    // "./features/meetings.feature",
    "./features/opportunities.feature",
    "./features/quotes.feature",
    // "./features/documents.feature",
    // "./features/invoices.feature",
    "./features/leads.feature",
    // "./features/accounts.feature",
  ],

  steps: [
    "./steps/login.steps.js",
    "./steps/contacts.steps.js",
    // "./steps/meetings.steps.js",
    "./steps/opportunities.steps.js",
    "./steps/quotes.steps.js",
    // "./steps/documents.steps.js",
    // "./steps/invoices.steps.js",
    "./steps/leads.steps.js",
    // "./steps/accounts.steps.js",
    "./fixtures/fixtures.js",
  ],
});

export default defineConfig({
  testDir,
  globalSetup: "./utils/cleanAllure.js",
  outputDir: "./screenshots",

  fullyParallel: true,
  timeout: 60000,
  expect: { timeout: 15000 },

  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : 4,

  reporter: [["line"], ["allure-playwright"], ["html"]],

  use: {
    baseURL: process.env.BASE_URL,
    screenshot: "only-on-failure",
    trace: "on-first-retry",
   
  },

  projects: [
    // Tests the login flow itself, no saved session
    {
      name: "login",
      testMatch: /login\.feature\.spec\.js/,
      use: { ...devices["Desktop Chrome"] },
    },

    // For each browser: a setup project that logs in with that browser,
    // and a module project that reuses that browser's own session
    ...activeBrowsers.flatMap(({ name, device }) => [
      {
        name: `setup-${name}`,
        testDir: "./setup",
        testMatch: /auth\.setup\.js/,
        use: { ...device },
      },
      {
        name,
        testIgnore: /login\.feature\.spec\.js/,
        dependencies: [`setup-${name}`],
        use: { ...device, storageState: authFileFor(name) },
      },
    ]),
  ],
});