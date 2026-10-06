import { test as base } from "playwright-bdd";
import { LoginPage } from "../pages/LoginPage.js";
import { ExcelReader } from "../utils/ExcelReader.js";
import { OpportunitiesPage } from "../pages/OpportunitiesPage.js";
import { ContactPage } from "../pages/ContactPage.js";
import { MeetingsPage } from "../pages/MeetingsPage.js";
import { LeadsPage } from "../pages/LeadsPage.js";
import { AccountsPage } from "../pages/AccountsPage.js";
import { DocumentPage } from "../pages/DocumentPage.js";
import { QuotesPage } from "../pages/QuotesPage.js";
import { InvoicesPage } from '../pages/InvoicesPage.js';


export const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  invoicesPage: async ({ page }, use) => {
    await use(new InvoicesPage(page));
  },

  excelReader: async ({}, use) => {
    await use(new ExcelReader(process.env.EXCEL_PATH));
  },

  opportunitiesPage: async ({ page }, use) => {
    await use(new OpportunitiesPage(page));
  },

  contactPage: async ({ page }, use) => {
    await use(new ContactPage(page));
  },

  leadsPage: async ({ page }, use) => {
    await use(new LeadsPage(page));
  },

  accountsPage: async ({ page }, use) => {
    await use(new AccountsPage(page));
  },

  quotesPage: async ({ page }, use) => {
    await use(new QuotesPage(page));
  },

  meetingsPage: async ({ page }, use) => {
    await use(new MeetingsPage(page));
  },

  documentPage: async ({ page }, use) => {
    await use(new DocumentPage(page));
  },
});
