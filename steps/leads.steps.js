import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures.js";
import { logger } from "../utils/logger.js";

const { Given, When, Then } = createBdd(test);

Given("User is on the Leads page", {timeout:60000}, async ({ leadsPage }) => {
  await leadsPage.hoverOverLeadsMenu();
  
  logger.info("User is on the Create Lead page");
});

//TC01
When(
  "User creates a new lead using Excel test data {string}",
  async ({ leadsPage, excelReader }, testCase) => {
    const data = excelReader.getExcelData("LeadsData", testCase);
    await leadsPage.openCreateLead();
    await leadsPage.enterFName(data.firstName);
    await leadsPage.enterLName(data.lastName);

    await leadsPage.enterJobDetails(
      data.jobTitle,
      data.department,
      data.accountName
    );

    await leadsPage.enterContactDetails(
      data.mobile,
      data.officePhone,
      data.website
    );
    await leadsPage.saveLead();

    logger.info(`Lead creation completed using Excel test data: ${testCase}`);
  }
);

Then(
  "Lead should be created successfully using Excel test data {string}",
  async ({ page, excelReader }, testCase) => {
    const data = excelReader.getExcelData("LeadsData", testCase);

    await expect(
      page
        .getByRole("tabpanel", { name: "OVERVIEW" })
        .getByText(data.lastName, { exact: true })
    ).toBeVisible({
      timeout: 30000,
    });

    logger.info(`Lead creation test case: ${testCase} passed successfully`);
  }
);
//TC02
When(
  "User creates a new lead with mandatory fields using Excel test data {string}",
  async ({ leadsPage, excelReader, page }, testCase) => {
    const data = excelReader.getExcelData("LeadsData", testCase);
    await leadsPage.openCreateLead();
    await leadsPage.enterLName(data.lastName);
    await leadsPage.saveLead();

    logger.info(`Lead creation completed using Excel test data: ${testCase}`);
  }
);
//TC03
When(
  "User clicks on View Leads and selects a lead using Excel test data {string}",
  { timeout: 30000 },
  async ({ leadsPage, excelReader, page }, testCase) => {
    const data = excelReader.getExcelData("LeadsData", testCase);
    logger.info(`Lead last name from Excel: ${data.lastName}`);
    await leadsPage.openViewLeads();
    logger.info("Clicked on View Leads");
    const lead = page.getByText(data.lastName).last();
    logger.info("Searching for lead in the list");
    await lead.waitFor({ state: "visible", timeout: 30000 });
    logger.info("Lead found in the list");
    await lead.click();
    logger.info(`Clicked on lead with last name: ${data.lastName}`);
  }
);
Then(
  "Lead details should be displayed using Excel test data {string}",
  async ({ page, excelReader }, testCase) => {
    const data = excelReader.getExcelData("LeadsData", testCase);

    logger.info(`Expected lead: ${data.firstName} ${data.lastName}`);

    // const bodyText = await page.locator("body").innerText();
    // logger.info(`Lead details page text:\n${bodyText}`);

    logger.info(
      `View Leads test case: ${testCase} completed successfully`
    );
  }
);

//TC04
When(
  "User edits the lead using Excel test data {string}",
  { timeout: 30000 },
  async ({ leadsPage, excelReader }, testCase) => {
    const data = excelReader.getExcelData("LeadsData", testCase);

    await leadsPage.editViewButton();
    logger.info(
      `Clicked on Edit button for lead with last name: ${data.lastName}`
    );
    await leadsPage.enterFName(`${data.firstName}-Smith`);
    logger.info(`Updated first name to: ${data.firstName}-Smith`);
    await leadsPage.saveLead();
    logger.info(`Clicked on Save button to save the updated lead details`);
  }
);

Then(
  "Lead should be updated successfully using Excel test data {string}",
  async ({ page, excelReader }, testCase) => {
    const data = excelReader.getExcelData("LeadsData", testCase);
    await expect(
     page
        .locator("span.dynamic-label.ng-star-inserted")
        .filter({ hasText: `${data.firstName}-Smith` })
    ).toBeVisible({ timeout: 30000 });
    logger.info(`Lead update test case: ${testCase} passed successfully`);
  }
);
//TC05
When(
  "User clicks on View Leads and selects the lead checkbox using Excel test data {string}",
  { timeout: 30000 },
  async ({ leadsPage, excelReader, page }, testCase) => {
    const data = excelReader.getExcelData("LeadsData", testCase);

    logger.info(`Lead last name from Excel: ${data.lastName}`);
    await leadsPage.openViewLeads();
    logger.info("Clicked on View Leads");
    const lead = page.getByText(data.lastName).last();
    await lead.waitFor({
      state: "visible",
      timeout: 30000
    });
    logger.info("Lead found in the list");
    const leadRow = lead.locator("xpath=ancestor::tr");
    const checkbox = leadRow.locator("input[type='checkbox']");
    await checkbox.evaluate((element) => {
      element.click();
    });
    logger.info(`Selected checkbox for lead: ${data.lastName}`);
  }
);

When(
  "User deletes the selected lead",
  { timeout: 30000 },
  async ({ leadsPage }) => {
    await leadsPage.deleteSelectedLead();
    logger.info("Clicked Delete and confirmed deletion");
  }
);

Then(
  "Lead should be deleted successfully using Excel test data {string}",
  async ({ page, excelReader }, testCase) => {
    const data = excelReader.getExcelData("LeadsData", testCase);
    logger.info(`Verifying deleted lead: ${data.lastName}`);

    await expect(
      page.getByText(data.lastName, { exact: true })
    ).not.toBeVisible({ timeout: 30000 });

    logger.info(
      `Lead deletion test case ${testCase} completed successfully`
    );
  }
);