import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures.js";
import {logger } from "../utils/logger.js";

const { Given, When, Then } = createBdd(test);

Given("User is on the Create Lead page", async ({ leadsPage }) => {
    await leadsPage.hoverOverLeadsMenu();
    await leadsPage.openCreateLead();

    logger.info("User is on the Create Lead page");
});

When(
  "User creates a new lead using Excel test data {string}",
  { timeout: 50000 },
  async function (testCase) {
    const data = excelReader.getTestData("LeadsData", testCase);
    //console.log(data);

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

//   await this.leadsPage.enterEmail(data.email);

//   await this.leadsPage.enterPrimaryAddress(
//     data.primaryStreet,
//     data.primaryPostalcode,
//     data.primaryCity,
//     data.primaryState,
//     data.primaryCountry
//   );

//   await this.leadsPage.enterAlternateAddress(
//     data.altStreet,
//     data.altPostalcode,
//     data.altCity,
//     data.altState,
//     data.altCountry
//   );

//   await this.leadsPage.enterDescription(data.description);

        await leadsPage.saveLead();

        logger.info(
            `Lead creation completed using Excel test data: ${testCase}`
        );
    }
);

Then(
  "Lead should be created successfully using Excel test data {string}",
  async function (testCase) {
    const data = excelReader.getTestData("LeadsData", testCase);

        await expect(
            page
                .getByRole("tabpanel", { name: "OVERVIEW" })
                .getByText(data.lastName, { exact: true })
        ).toBeVisible({
            timeout: 30000
        });

        logger.info(
            `Lead creation test case: ${testCase} passed successfully`
        );
    }
);