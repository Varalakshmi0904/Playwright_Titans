import { createBdd } from "playwright-bdd";
import { ExcelReader } from "../utils/ExcelReader.js";
import { LoginPage } from "../pages/LoginPage.js";
import { expect } from "@playwright/test";

const { Given, When, Then, Before  } = createBdd();
let loginPage;
let excelReader;

Before(async ({ page }) => {
  loginPage = new LoginPage(page);
  excelReader = new ExcelReader(process.env.EXCEL_PATH);
});
Given("User is on the Login page", async ({ page }) => {
  await loginPage.goto();
});

When(
  "User enters valid credentials from Excel for {string}",
  async ({ page }, testCase) => {
    const loginData = excelReader.getExcelData("login", testCase);

    await loginPage.enterCredentials(loginData.username, loginData.password);
  },
);
When(
  "User enters invalid credentials from Excel for {string}",
  async ({ page }, testCase) => {
    const loginData = excelReader.getExcelData("login", testCase);
    await loginPage.enterCredentials(loginData.username, loginData.password);
  },
);

Then(
  "User should be redirected to the SuiteCRM Dashboard",
  async ({ page }) => {
    await expect(page).toHaveURL("https://suite8demo.suiteondemand.com/#/home");
  },
);

Then("User should see {string} message", async ({ page }, arg) => {
  await expect(loginPage.errorMessage).toContainText(arg);
});
