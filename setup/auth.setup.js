import { test as setup, expect } from "@playwright/test";
import fs from "fs";
import path from "path";
import "dotenv/config";
import { LoginPage } from "../pages/LoginPage.js";
import { ExcelReader } from "../utils/ExcelReader.js";
import { QuotesPage } from "../pages/QuotesPage.js";
import { AUTH_FILE } from "../utils/authPath.js";

setup("authenticate and save storage state", async ({ page }) => {
  // The demo site is slow, so give setup more time than the 30s default
  setup.setTimeout(120000);

  if (!process.env.EXCEL_PATH) {
    throw new Error("EXCEL_PATH is not set. Check your .env file.");
  }

  const excelReader = new ExcelReader(process.env.EXCEL_PATH);
  const loginData = excelReader.getExcelData("login", "ValidCredentials");

  if (!loginData?.username || !loginData?.password) {
    throw new Error(
      'No username/password found for "ValidCredentials" in the login sheet.',
    );
  }

  // Log in through the UI once
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.enterCredentials(loginData.username, loginData.password);

  // Don't wait for the "load" event, which a single-page app may delay
  await expect(page).toHaveURL(/#\/home/, { timeout: 60000 });

  // Wait until the logged-in navbar has rendered
 // const quotesPage = new QuotesPage(page);
 // await expect(quotesPage.quotesMenu).toBeVisible({ timeout: 60000 });

  // Save cookies + localStorage
  fs.mkdirSync(path.dirname(AUTH_FILE), { recursive: true });
  await page.context().storageState({ path: AUTH_FILE });
});