import { test as base } from "playwright-bdd";
import { LoginPage } from "../pages/LoginPage.js";
import { ExcelReader } from "../utils/ExcelReader.js";


export const test = base.extend({loginPage: async ({ page }, use) => {
  await use(new LoginPage(page));
},

excelReader: async ({}, use) => {
    await use(new ExcelReader(process.env.EXCEL_PATH));
  },
});