import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures.js";
import { logger } from "../utils/logger.js";

const { Given, When, Then } = createBdd(test);
When("User hovers over Quotes", async ({ quotesPage }) => {
  await quotesPage.hoverOverQuotes();
  logger.info("User hovered over Quotes");
});

Then("User should see the Quotes dropdown menu", async ({ quotesPage }) => {
  await quotesPage.clickQuotes();
  await expect( quotesPage.quotesTitle).toBeVisible();
  logger.info("User should see the Quotes dropdown menu");
});
When("User clicks Create Quote", async ({ quotesPage }) => {
  await quotesPage.clickCreateQuote();
  logger.info("User clicked Create Quote");
  5;
});

Then(
  "User should be redirected to the Create Quote page",
  async ({ quotesPage }) => {
    await expect(quotesPage.createQuoteTitle).toBeVisible();
    logger.info("User should be redirected to the Create Quote page");
  },
);
Given("User is on the Create Quote page", async ({ quotesPage }) => {
  await quotesPage.clickCreateQuote();
  logger.info("User is on the Create Quote page");
});

When(
  "User creates a quote using data from Excel testcase {string}",
  async ({ quotesPage, excelReader }, testCase) => {
    const data = excelReader.getExcelData("Quotes", testCase);
    await quotesPage.createQuote(data);
    logger.info("User created a quote using data from Excel testcase ");
  },
);
Then(
  "User should see the created quote for Excel testcase {string}",
  async ({ quotesPage, excelReader }, testCase) => {
    const data = excelReader.getExcelData("Quotes", testCase);
    await expect(await quotesPage.quoteHeading(data.Title)).toBeVisible();
    logger.info("User should see the created quote for Excel testcase ");
  },
);
