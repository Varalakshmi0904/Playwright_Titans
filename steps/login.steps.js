import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures.js";
const { Given, When, Then } = createBdd(test);

Given("User is on the Login page", async ({ loginPage  }) => {
  await loginPage.goto();
});

When('User enters the valid credentials from Excel and click login', async ({loginPage, excelReader}) => {
        const loginData = excelReader.getExcelData("login", "ValidCredentials");
    await loginPage.enterCredentials(loginData.username, loginData.password);
  },
);

When('User enters invalid credentials from Excel for {string} and click login', async ({loginPage, excelReader}, arg) => {
        const loginData = excelReader.getExcelData("login", arg);
    await loginPage.enterCredentials(loginData.username, loginData.password);
  },
);


Then(
  "User should be redirected to the SuiteCRM Dashboard",
  async ({ page }) => {
    await expect(page).toHaveURL("https://suite8demo.suiteondemand.com/#/home");
  },
);

Then("User should see {string} message", async ({ loginPage  }, arg) => {
  await expect(loginPage.errorMessage).toContainText(arg);
});
