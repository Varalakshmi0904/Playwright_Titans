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
When(
  "User enters all mandatory fields and clicks Save",
  async ({ opportunitiesPage, excelReader }) => {
    const opportunitiesData = excelReader.getExcelData(
      "opportunities",
      "Create Opportunity",
    );

    await opportunitiesPage.fillAllMandatoryFieldsAndSave({
      opportunityName: opportunitiesData.OpportunityName,
      accountName: opportunitiesData.AccountName,
      opportunityAmount: String(opportunitiesData.OpportunityAmount),
      salesStage: opportunitiesData.SalesStage,
      closeDate: opportunitiesData.ExpectedCloseDate,
    });
  },
);

Then(
  "User should see the created Opportunity",
  async ({ opportunitiesPage, excelReader }) => {
    const opportunitiesData = excelReader.getExcelData(
      "opportunities",
      "Create Opportunity",
    );

    await expect(
      opportunitiesPage.opportunityTitle(opportunitiesData.OpportunityName),
    ).toHaveText(opportunitiesData.OpportunityName);
  },
);
When(
  "User leaves {string} blank and clicks Save",
  async ({ opportunitiesPage, excelReader }, arg) => {
    const opportunitiesData = excelReader.getExcelData(
      "opportunities",
      "BlankMandatoryfield",
    );

    const data = {
      opportunityName: opportunitiesData.OpportunityName,
      accountName: opportunitiesData.AccountName,
      opportunityAmount: String(opportunitiesData.OpportunityAmount),
      salesStage: opportunitiesData.SalesStage,
      closeDate: opportunitiesData.ExpectedCloseDate,
    };

    const fieldMap = {
      "Opportunity Name": "opportunityName",
      "Account Name": "accountName",
      "Sales Stage": "salesStage",
      "Expected Close Date": "closeDate",
    };

    data[fieldMap[arg]] = "";

    await opportunitiesPage.fillAllMandatoryFieldsAndSave(data);
  },
);

Then(
  "User should see a required-field validation message for {string}",
  async ({ opportunitiesPage }, arg) => {
    await expect(opportunitiesPage.ValidationMessage).toBeVisible();
  },
);
When(
  "User enters a non-numeric value in Opportunity Amount and clicks Save",
  async ({ opportunitiesPage, excelReader }) => {
    const opportunitiesData = excelReader.getExcelData(
      "opportunities",
      "InvalidAmount",
    );
    await opportunitiesPage.fillAllMandatoryFieldsAndSave({
      opportunityName: opportunitiesData.OpportunityName,
      accountName: opportunitiesData.AccountName,
      opportunityAmount: String(opportunitiesData.OpportunityAmount),
      salesStage: opportunitiesData.SalesStage,
      closeDate: opportunitiesData.ExpectedCloseDate,
    });
  },
);

Then(
  "User should see an invalid-format validation message",
  async ({ opportunitiesPage }) => {
    await expect(opportunitiesPage.ValidationMessage).toBeVisible();
    await expect(opportunitiesPage.invalidFormatMessage).toBeVisible();
  },
);
When(
  "User selects a date using the calendar icon next to {string}",
  async ({ opportunitiesPage, excelReader  }, arg) => {
     const data = excelReader.getExcelData(
      "opportunities",
      "ExpectedCloseDate"
    );
    await opportunitiesPage.selectDateFromCalendar(data.ExpectedCloseDate);
  },
);

Then(
  "The selected date should populate the field in yyyy-mm-dd format",
  async ({ opportunitiesPage, excelReader }) => {
    const data = excelReader.getExcelData("opportunities", "ExpectedCloseDate");
    await expect(opportunitiesPage.expectedCloseDateInput).toHaveValue(
      data.ExpectedCloseDate,
    );
  },
);

When('User clicks the dropdown arrow next to {string} and enters a partial account name', async ({opportunitiesPage, excelReader }, arg) => {
 const data = excelReader.getExcelData(
      "opportunities",
      "AccountSearch"
    );

    await opportunitiesPage.searchAccount(data.AccountName);
});

Then('User should see matching accounts displayed', async ({opportunitiesPage}) => {
  const matchingAccounts =
      await opportunitiesPage.getMatchingAccounts();

    await expect(matchingAccounts.first()).toBeVisible();
});


