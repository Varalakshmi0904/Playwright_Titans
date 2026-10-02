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

When('User clicks on save entering all valid details using Excel test data {string}', async ({meetingsPage, excelReader}, testCase) => {
 const data = excelReader.getExcelData("meetings", testCase);
  await meetingsPage.inputSubject(data);

  await meetingsPage.saveMeeting();
  logger.info("User has entered all valid details");
});

Then('User should see meeting creating successfully using Excel test data {string}',
    async ({meetingsPage, excelReader}, testCase) => {

const data = excelReader.getExcelData("meetings", testCase);
    await expect(await meetingsPage.visibleMeetingCreated(data.Subject)).toBeVisible();

    // async ({ quotesPage, excelReader }, testCase) => {
    // const data = excelReader.getExcelData("Quotes", testCase);
    //  await expect(await quotesPage.quoteHeading(data.Title)).toBeVisible();

    logger.info("User should see meeting creating successfully");
 
});
