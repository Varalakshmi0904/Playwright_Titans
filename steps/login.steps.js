import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures.js";
const { Given, When, Then } = createBdd(test);

Given("User is on the Login page", async ({ loginPage }) => {
  await loginPage.goto();
});

Given(
  "User is logged into the SuiteCRM Dashboard page",
  async ({ loginPage, excelReader }) => {
    const loginData = excelReader.getExcelData("login", "ValidCredentials");
    await loginPage.goto();
    await loginPage.enterCredentials(loginData.username, loginData.password);
  },
);

When(
  "User enters the valid credentials from Excel and click login",
  async ({ loginPage, excelReader }) => {
    const loginData = excelReader.getExcelData("login", "ValidCredentials");
    await loginPage.enterCredentials(loginData.username, loginData.password);
  },
);

When(
  "User enters invalid credentials from Excel for {string} and click login",
  async ({ loginPage, excelReader }, arg) => {
    const loginData = excelReader.getExcelData("login", arg);
    await loginPage.enterCredentials(loginData.username, loginData.password);
  },
);

Then(
  "User should be redirected to the SuiteCRM Dashboard",
  async ({ page }) => {
    await expect(page).toHaveURL(
      "https://suite8demo.suiteondemand.com/#/home",
      { timeout: 20000 },
    );
  },
);

Then("User should see a login error message", async ({ loginPage }) => {
  await expect(loginPage.errorMessage).toBeVisible();
});
