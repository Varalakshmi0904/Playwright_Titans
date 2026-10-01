import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures.js";
import { logger } from "../utils/logger.js";


const { Given, When, Then } = createBdd(test);

Given('User is on the Create Document page', async ({ documentPage }) => {
  await documentPage.hoverOverDocumentMenu();
  await documentPage.clickCreateDocument();

  logger.info("User is on the Create Document page");
});

When('User enters all valid document details and clicks the Save button', async ({ documentPage }) => {
  await documentPage.fileUploadInput.setInputFiles('C:\\Users\\pmano\\OneDrive\\Desktop\\testdocs\\Book1.xlsx');
  await documentPage.enterRevision('3');
  await documentPage.saveDocument();

  logger.info("User clicks the save button entering all valid details");
});

Then('User should see the document created successfully', async ({ documentPage }) => {
  await documentPage.page.waitForTimeout(1000);
  //await expect(documentPage.documentrevision).toBeVisible();
  console.log(await documentPage.page.locator('body').innerText());
});