import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures.js";
import {logger } from "../utils/logger.js";

const { Given, When, Then } = createBdd(test);

Given('User is on Meetings Create Page', 
    async ({meetingsPage}) => {
    await meetingsPage.hoverOverMeeting();
    await meetingsPage.clickScheduleMeeting();  
    logger.info("User is on Meetings Create Page");
});

When('User creates a new meeting using Excel test data {string}', 
    async ({meetingsPage, excelReader}, testCase) => {
    const data = excelReader.getExcelData("meetings", testCase);

    await meetingsPage.enterSubjectAndStartDate(data.subject, );
    await meetingsPage.saveMeeting();
    logger.info("User has entered all valid details");
});

Then('Meeting should be created successfully using Excel test data {string}',
    async ({meetingsPage, excelReader}, testCase) => {
    const data = excelReader.getExcelData("meetings", testCase);
    await expect(await meetingsPage.visibleMeetingCreated(data.subject)).toBeVisible();
     logger.info(`Meeting creation test case: ${testCase} passed successfully`);
});

When('User enters a past start date using Excel test data {string}', 
    async ({meetingsPage, excelReader}, testCase) => {
    const data = excelReader.getExcelData("meetings", testCase);

    await meetingsPage.enterSubjectAndStartDate(data.subject, data.startDate);
    await meetingsPage.saveMeeting();
    logger.info("User enters a past start date");
});

Then('User should not see the meeting created using Excel test data {string}',
     async ({meetingsPage}, arg) => {
     await expect(await meetingsPage.visibleMeetingCreated(data.subject)).not.toBeVisible();
     logger.info("Meeting should not be created with a past date");
});

