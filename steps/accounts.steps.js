import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures.js";
import { logger } from "../utils/logger.js";

const { Given, When, Then } = createBdd(test);

Given("User is on the Accounts page", { timeout: 60000 },
  async ({ accountsPage }) => {
    await accountsPage.hoverOverAccountsMenu();

    logger.info("User is on the Accounts page");
  }
);

// TC01
When(
  "User creates a new account with mandatory fields using Excel test data {string}",{ timeout: 60000 },
  async ({ accountsPage, excelReader }, testCase) => {
    const data = excelReader.getExcelData("AccountsData", testCase);

    await accountsPage.openCreateAccount();
    await accountsPage.enterAccountName(data.name);
    await accountsPage.saveAccount();

    logger.info(
      `Account creation completed using Excel test data: ${testCase}`
    );
  }
);
Then(
  'Account should be created successfully using Excel test data "TC01"',
  async ({ page, excelReader }) => {

    const data = excelReader.getExcelData("AccountsData", "TC01");

    await expect(
      page.getByText(data.name).last()
    ).toBeVisible({ timeout: 30000 });

    logger.info(`Account created successfully: ${data.name}`);
  }
);

// TC02
When(
  "User creates a new account using Excel test data {string}",
  async ({ accountsPage, excelReader }, testCase) => {
    const data = excelReader.getExcelData("AccountsData", testCase);

    await accountsPage.openCreateAccount();

    await accountsPage.enterAccountName(data.name);

    await accountsPage.enterContactDetails(
      data.website,
      data.officePhone,
      data.emailAddress
    );

    await accountsPage.enterBillingAddress(
      data.billingStreet,
      data.billingPostalcode,
      data.billingCity,
      data.billingState,
      data.billingCountry
    );

    await accountsPage.enterShippingAddress(
      data.shippingStreet,
      data.shippingPostalcode,
      data.shippingCity,
      data.shippingState,
      data.shippingCountry
    );

    await accountsPage.enterDescription(data.description);

    await accountsPage.saveAccount();

    logger.info(
      `Account creation completed using Excel test data: ${testCase}`
    );
  }
);
Then(
  'Account should be created successfully using Excel test data "TC02"',
  async ({ page, excelReader }) => {

    const data = excelReader.getExcelData("AccountsData", "TC02");

    await expect(
      page.getByText(data.name).last()
    ).toBeVisible({ timeout: 30000 });

    logger.info(`Account created successfully: ${data.name}`);
  }
);

//TC03


When(
  "User clicks on View Accounts and selects an account using Excel test data {string}",
  { timeout: 60000 },
  async ({ accountsPage, excelReader, page }, testCase) => {
    const data = excelReader.getExcelData("AccountsData", testCase);

    logger.info(`Test case: ${testCase}`);
    logger.info(`Account name from Excel: ${data.name}`);

    await accountsPage.openViewAccounts();

    const account = page
      .locator("table")
      .getByText(data.name, { exact: true })
      .first();
      logger.info("Clicked on View Accounts");
      await account.waitFor({state: "visible",timeout: 30000
      });
    logger.info(`Account found: ${data.name}`);
    await account.click();
    logger.info(`Clicked on account: ${data.name}`);
  }
);

Then(
  "Account details should be displayed using Excel test data {string}",
  async ({ page, excelReader }, testCase) => {
    const data = excelReader.getExcelData("AccountsData", testCase);

    logger.info(`Expected account: ${data.name}`);

    logger.info(
      `View Account test case: ${testCase} completed successfully`
    );
  }
);
// TC04
When(
  "User edits the account using Excel test data {string}",
  { timeout: 30000 },
  async ({ accountsPage, excelReader }, testCase) => {
    const data = excelReader.getExcelData("AccountsData", testCase);

    await accountsPage.editViewButton();

    logger.info(`Clicked on Edit button for account: ${data.name}`);

    const updatedAccountName = `${data.name} Ltd`;

    await accountsPage.enterAccountName(updatedAccountName);

    logger.info(`Updated account name to: ${updatedAccountName}`);

    await accountsPage.saveAccount();

    logger.info("Clicked on Save button to update the account");
  }
);

Then(
  "Account should be updated successfully using Excel test data {string}",
  async ({ page, excelReader }, testCase) => {
    const data = excelReader.getExcelData("AccountsData", testCase);

    const updatedAccountName = `${data.name} Ltd`;

    await expect(
      page
        .locator("span.dynamic-label.ng-star-inserted")
        .filter({ hasText: updatedAccountName })
    ).toBeVisible({ timeout: 10000 });

    logger.info(
      `Account update test case: ${testCase} passed successfully`
    );
  }
);
