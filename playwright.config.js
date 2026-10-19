
import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";
import dotenv from "dotenv";
import { AUTH_FILE } from "./utils/authPath.js";
dotenv.config();

const testDir = defineBddConfig({
  features: [
    "./features/login.feature",

    "./features/contacts.feature",
    "./features/meetings.feature",
     "./features/opportunities.feature",
     "./features/quotes.feature",
    "./features/documents.feature",
    "./features/invoices.feature",
    "./features/leads.feature",
    "./features/accounts.feature",
  ],

  steps: [
    "./steps/.steps.js",

    "./steps/contacts.steps.js",
    "./steps/meetings.steps.js",
     "./steps/opportunities.steps.js",
    "./steps/quotes.steps.js",
    "./steps/documents.steps.js",
    "./steps/invoices.steps.js",
    "./steps/leads.steps.js",
    "./steps/accounts.steps.js",

    "./fixtures/fixtures.js",
  ],
});

export default defineConfig({
  testDir,
  globalSetup: "./utils/cleanAllure.js",

  outputDir: "./screenshots",

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

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

  // Runs once, creates storageState/auth.json
  {
    name: "setup",
    testDir: "./setup",
    testMatch: /auth\.setup\.js/,
    use: { ...devices["Desktop Chrome"] },
  },

  // All other modules reuse the saved session
  {
      name: "chromium",
      testIgnore: /login\.feature\.spec\.js/,
      dependencies: ["setup"],
      use: {
        ...devices["Desktop Chrome"],
        storageState: AUTH_FILE,
      },
    },
  ],
});

