import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures.js";
import {logger } from "../utils/logger.js";

const { Given, When, Then } = createBdd(test);

Given('User is logged into the SuiteCRM Dashboard page', async ({loginPage, excelReader}) => {
     await loginPage.goto();
     const loginData = excelReader.getExcelData("login", "ValidCredentials");
    await loginPage.enterCredentials(loginData.username, loginData.password);
  // Step: Given the user is logged in
  logger.info('User is logged into the SuiteCRM Dashboard page');
  // From: features\contacts.feature:5:3
});

Given('User is on the Create Contact page', async ({contactPage}) => {
    await contactPage.addContact();
    logger.info('User is on the Create Contact page');
});

When('User clicks the save button entering all valid contact details', async ({contactPage}) => {
  await contactPage.enterLastName('TestLastName');
  logger.info('User clicked the save button with valid contact details'); 
});

Then('User should see the Contact created successfully', async ({contactPage}) => {
  await expect(contactPage.visibleContact).toBeVisible();
  logger.info('User should see the Contact created successfully');
});

// When('User clicks the save button with mandatory fields empty', async ({}) => {
//   // Step: When User clicks the save button with mandatory fields empty
//   // From: features\contacts.feature:16:1
// });

// Then('User should see validation messages for the mandatory fields', async ({}) => {
//   // Step: Then User should see validation messages for the mandatory fields
//   // From: features\contacts.feature:17:1
// });

// When('User clicks the save button with an invalid email', async ({}) => {
//   // Step: When User clicks the save button with an invalid email
//   // From: features\contacts.feature:22:1
// });

// Then('User should see email validation message', async ({}) => {
//   // Step: Then User should see email validation message
//   // From: features\contacts.feature:23:1
// });





