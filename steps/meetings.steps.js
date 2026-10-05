import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures.js";
import {logger } from "../utils/logger.js";

const { Given, When, Then } = createBdd(test);


Given('User is on Meetings Create Page', async ({meetingsPage}) => {
    
    await meetingsPage.hoverOverMeeting();
    await meetingsPage.clickScheduleMeeting();  
    logger.info("User is on Meetings Create Page");
});

When('User creates a new meeting using Excel test data {string}', 
async ({meetingsPage, excelReader}, testCase) => {

 const data = excelReader.getExcelData("meetings", testCase);

  await meetingsPage.enterSubject(data.subject);
   await meetingsPage.saveMeeting();
  logger.info("User has entered all valid details");
});

Then('Meeting should be created successfully using Excel test data {string}',
    async ({meetingsPage, excelReader}, testCase) => {

const data = excelReader.getExcelData("meetings", testCase);

// await expect(
//             page
//                 .getByRole("tabpanel", { name: "OVERVIEW" })
//                 .getByText(data.subject, { exact: true })
//         ).toBeVisible({
//             timeout: 30000
//         });

    await expect(await meetingsPage.visibleMeetingCreated(data.subject)).toBeVisible();
     logger.info(
            `Meeting creation test case: ${testCase} passed successfully`
        );

    });

