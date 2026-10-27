import { test as setup, expect } from "@playwright/test";
import fs from "fs";
import path from "path";
import "dotenv/config";
import { LoginPage } from "../pages/LoginPage.js";
import { ExcelReader } from "../utils/ExcelReader.js";
import { authFileFor } from "../utils/authPath.js";

setup("authenticate and save storage state", async ({ page }, testInfo) => {
  // The demo site is slow, so give setup more time
  setup.setTimeout(120000);

  // Project is named "setup-chromium", "setup-firefox" or "setup-webkit"
  const browserName = testInfo.project.name.replace("setup-", "");
  const authFile = authFileFor(browserName);

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

  // Log in through the UI once, using this browser
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.enterCredentials(loginData.username, loginData.password);

  await expect(page).toHaveURL(/#\/home/, { timeout: 60000 });

  // Save cookies + localStorage for this browser only
  fs.mkdirSync(path.dirname(authFile), { recursive: true });
  await page.context().storageState({ path: authFile });
});