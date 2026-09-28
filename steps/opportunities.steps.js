import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures.js";
const { Given, When, Then } = createBdd(test);

Given(
  "User is logged into the SuiteCRM Dashboard page",
  async ({ loginPage, excelReader }) => {
    const loginData = excelReader.getExcelData("login", "ValidCredentials");
    await loginPage.goto();
    await loginPage.enterCredentials(loginData.username, loginData.password);
  },
);

When("User hovers over Opportunities", async ({ opportunitiesPage }) => {
  await opportunitiesPage.hoverOpportunitiesMenu();
});

Then(
  "User should see the Opportunities dropdown menu",
  async ({ opportunitiesPage }) => {
    await opportunitiesPage.isDropdownMenuVisible();
  },
);

When("User clicks Create Opportunity", async ({ opportunitiesPage }) => {
  await opportunitiesPage.clickCreateOpportunity();
});

Then(
  "User should be redirected to the Create Opportunity page",
  async ({ opportunitiesPage }) => {
    await expect(opportunitiesPage.pageTitle).toBeVisible();
  },
);

Given(
  "User is on the Create Opportunity page",
  async ({ opportunitiesPage }) => {
    await opportunitiesPage.clickCreateOpportunity();
  },
);

When(
  "User views the Create Opportunity page",
  async ({ opportunitiesPage }) => {
    await expect(opportunitiesPage.pageTitle).toBeVisible();
  },
);

Then(
  "User should see a mandatory indicator next to {string}",
  async ({ opportunitiesPage }, arg) => {
    const label = await opportunitiesPage.getMandatoryFieldLabel(arg);
    await expect(label).toContainText("*");
  },
);
