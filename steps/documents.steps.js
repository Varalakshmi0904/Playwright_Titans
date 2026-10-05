import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures.js";
import { logger } from "../utils/logger.js";

const { Given, When, Then } = createBdd(test);

Given('User is on the Create Document page', async ({ documentPage }) => {
  await documentPage.DocumentMenuHover();
  await documentPage.clickCreateDocument();

  logger.info("User is on the Create Document page");
});

When('User enters all valid document details and clicks the Save button', async ({ documentPage }) => {
  await documentPage.fileUploadInput.setInputFiles('C:\\Users\\pmano\\OneDrive\\Desktop\\testdocs\\Book1.xlsx');
  await documentPage.enterDocumentName('Book1.xlsx');
  await documentPage.enterRevision('3');
  await documentPage.saveDocument();

  logger.info("User clicks the save button entering all valid details");
});

Then('User should see the document created successfully', async ({ documentPage }) => {
 await expect(documentPage.page.getByRole('link', { name: 'Book1.xlsx' })).toBeVisible();
});

When('User enters document name {string}, revision {string} and publish date {string} and saves', 
  async ({ documentPage }, name, revision, publishDate) => {
  await documentPage.enterDocumentName(name);
  await documentPage.enterPublishDate(publishDate);
  await documentPage.enterRevision(revision);
  await expect(documentPage.revision).toHaveValue(revision);
  await documentPage.saveDocument();

  logger.info("User enters document details and saves");
});

Then('User should see the validation message {string}', async ({ documentPage }, expectedValidationMessage) => {
  await expect(documentPage.page.getByText(expectedValidationMessage).first()).toBeVisible();
  logger.info("User should see the validation message");
});

When('User enters invalid document information and saves', async ({ documentPage }) => {
  await documentPage.enterDocumentName('name');
  await documentPage.enterPublishDate('publishDate');
  await documentPage.enterRevision('3');
  await documentPage.saveDocument();

  logger.info("User enters invalid document information and saves");
});

Then('User should see document validation errors', async ({ documentPage }) => {
  await expect(documentPage.page.getByText('Validation error').first()).toBeVisible();
  logger.info("User should see the validation errors");
});

When('User selects a document status', async ({ documentPage }) => {
  await documentPage.selectDocumentStatus('Active');

  logger.info("User selects a document status");
});

Then('User should see the selected status', async ({ documentPage }) => {
  await expect(documentPage.status).toHaveValue('Active');
  logger.info("User see the selected status");
});

When('User selects a document type', async ({documentPage}) => {
  await documentPage.selectDocumentType('eula');
  logger.info("User see the Document type");
});

Then('User should see the selected document type', async ({ documentPage }) => {
  await expect(documentPage.documentType).toHaveValue('eula');
  logger.info("User see the selected document type");
});

When('User selects the Template option', async ({documentPage}) => {
  await documentPage.selectTemplate();
  logger.info("User selects the Template");
});
Then('User should see the Template option selected', async ({ documentPage }) => {
  await expect(documentPage.page.locator('label:has(.checkmark) input[type="checkbox"]').first()).toBeChecked();
  logger.info("User sees the Template selected");
});
// When('User enter a valid publish date', async({documentPage}) => {
//   await documentPage.enterPublishDate();
//   logger.info("User enters a date");
// })
// Then('User should see the entered publish date', async ({documentPage}) => {
//   await expect(documentPage.publishDate).toHaveValue(publishDate);
//   logger.info("User see the entered date");
// });

// When('User enters a valid publish date', async ({ documentPage }) => {
//   await documentPage.enterPublishDate('2026-10-02');
//   logger.info("User enters a valid publish date");
// });

// Then('User should see the entered publish date', async ({ documentPage }) => {
//   await expect(documentPage.publishDate).toHaveValue('2026-10-02');
//   logger.info("User sees the entered publish date");
// });
// When('User enters a valid expiration date', async ({ documentPage }) => {
//   await documentPage.enterExpirationDate('2026-10-02');
//   logger.info("User enters a valid expiration date");
// });

// Then('User should see the entered expiration date', async ({ documentPage }) => {
//   await expect(documentPage.expirationDate).toHaveValue('2026-10-02');
//   logger.info("User sees the entered expiration date");
// });
// When('User selects a document category', async ({ documentPage }) => {
//   await documentPage.selectDocumentCategory('General');
//   logger.info("User select document category");
// });

// Then('User should see the selected category', async ({ documentPage }) => {
//   await expect(documentPage.documentCategory).toHaveValue('General');
//   logger.info("User sees the selected category");
// });
