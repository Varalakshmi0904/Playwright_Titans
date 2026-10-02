import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures.js";
import {logger } from "../utils/logger.js";

const { Given, When, Then } = createBdd(test);

Given('User is on the Create Contact page', async ({contactPage}) => {
    await contactPage.hoverOverContact();
    await contactPage.addContact();
    logger.info('User is on the Create Contact page');
});

When('User clicks the save button entering all valid contact details', async ({contactPage}) => {
  await contactPage.enterLastName('TestLastName');
  await contactPage.contactSave();
  logger.info('User clicked the save button with valid contact details'); 
});

Then('User should see the Contact created successfully', async ({contactPage}) => {
  await expect(contactPage.visibleContact).toBeVisible();
  logger.info('User should see the Contact created successfully');
});

// When('User clicks the save button with mandatory fields empty', async ({contactPage}) => {
//   await contactPage.contactSave();
//   logger.info('User clicks the save button with mandatory fields empty');
//   });

// Then('User should see validation messages for the mandatory fields', async ({ contactPage }) => {
//     await expect(contactPage.validationMessage).toBeVisible();

//     logger.info('User should see validation messages for the mandatory fields');
// });

When('User clicks the save button with an invalid email', async ({contactPage}) => {
   await contactPage.enterEmail("123emad");
    await contactPage.contactSave();
    logger.info('User clicks the save button with an invalid email');

});

Then('User should see email validation message', async ({contactPage}) => {
  await expect(contactPage.invalidEmail).toBeVisible();
  logger.info('User should see email validation message');
  });




