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
Then('User should see the Template option selected', async ({documentPage}) => {
  await expect(documentPage.template.first()).toBeChecked();
  logger.info("User see the entered date");
});

When('User enters a valid publish date', async ({ documentPage }) => {
  await documentPage.enterPublishDate('2026-10-02');
  logger.info("User enters a valid publish date");
});

Then('User should see the entered publish date', async ({ documentPage }) => {
  await expect(documentPage.publishDate).toHaveValue('2026-10-02');
  logger.info("User sees the entered publish date");
});
When('User enters a valid expiration date', async ({ documentPage }) => {
  await documentPage.enterExpirationDate('2026-10-02');
  logger.info("User enters a valid expiration date");
});

Then('User should see the entered expiration date', async ({ documentPage }) => {
  await expect(documentPage.expirationDate).toHaveValue('2026-10-02');
  logger.info("User sees the entered expiration date");
});
When('User selects a document category', async ({ documentPage }) => {
  await documentPage.selectCategory('Marketing');
  logger.info("User select document category");
});

Then('User should see the selected category', async ({ documentPage }) => {
  await expect(documentPage.category).toHaveValue('Marketing');
  logger.info("User sees the selected category");
});
When('User selects a document sub category', async ({ documentPage }) => {
  await documentPage.selectSubcategory('Marketing Collateral');
  logger.info("User selects a sub category");
});

Then('User should see the selected sub category', async ({ documentPage }) => {
  await expect(documentPage.subcategory).toHaveValue('Marketing Collateral');
  logger.info("User sees the selected sub category");
});
When('User selects a user in the Assigned To field', async ({ documentPage }) => {
  await documentPage.selectAssignedTo('WillWestin');
  logger.info("User selects the Assigned To field");
});

Then('User should see the selected user', async ({ documentPage }) => {
  await expect(documentPage.assignedto).toContainText('WillWestin');
  logger.info("User sees the selected user");
});

Given('User has entered all required document information', async ({ documentPage }) => {
  await documentPage.DocumentMenuHover();
  await documentPage.clickCreateDocument();
  await documentPage.fileUploadInput.setInputFiles('C:\\Users\\pmano\\OneDrive\\Desktop\\testdocs\\Book1.xlsx');
  await documentPage.enterDocumentName('Book1.xlsx');
  await documentPage.enterRevision('3');
  logger.info("User has entered all required document information");
});

When('User clicks the Save button', async ({ documentPage }) => {
  await documentPage.saveDocument();
  logger.info("User clicks the Save button");
});
Then('User should see the created document', async ({ documentPage }) => {
  await expect(documentPage.page.getByRole('link', { name: 'Book1.xlsx' }).first()).toBeVisible({ timeout: 15000 });
  logger.info("User sees the document created successfully");
});

When('User clicks the Cancel button', async ({ documentPage }) => {
  await documentPage.cancelDocument();
  logger.info("User clicks the Cancel button");
});

Then('User should be redirected to the Documents page', async ({ documentPage }) => {
  await expect(documentPage.page).not.toHaveURL(/edit/, { timeout: 15000 });
  logger.info("User is redirected to the Documents page");
});


// ===================== View Documents =====================

Given('User is on the Documents page', async ({ documentPage }) => {
  await documentPage.DocumentMenuHover();
  await documentPage.openViewDocuments();
  logger.info("User is on the Documents page");
});

When('User views the documents list', async ({ documentPage }) => {
  await expect(documentPage.firstDocumentLink).toBeVisible();
  logger.info("User views the documents list");
});

Then('User should see the available documents', async ({ documentPage }) => {
  await expect(documentPage.firstDocumentLink).toBeVisible();
  logger.info("User sees the available documents");
});

When('User selects a document name', async ({ documentPage }) => {
  await documentPage.clickFirstDocument();
  logger.info("User selects a document name");
});

Then('User should see the document details', async ({ documentPage }) => {
  await expect(documentPage.page).toHaveURL(/record/);
  logger.info("User sees the document details");
});

When('User selects the document file', async ({ documentPage }) => {
  const downloadPromise = documentPage.page.waitForEvent('download');
  await documentPage.clickFirstFile();
  await downloadPromise;
  logger.info("User selects the document file");
});

Then('User should be able to view or download the document file', async ({ documentPage }) => {
  logger.info("Document file downloaded");
});

When('User views an existing document', async ({ documentPage }) => {
  await documentPage.clickFirstDocument();
  logger.info("User views an existing document");
});

Then('User should see the document category', async ({ documentPage }) => {
  await expect(documentPage.page.getByText('Category').first()).toBeVisible();
  logger.info("User sees the document category");
});

Then('User should see the document sub category', async ({ documentPage }) => {
  await expect(documentPage.page.getByText('Sub Category').first()).toBeVisible();
  logger.info("User sees the document sub category");
});

Then('User should see the document revision date', async ({ documentPage }) => {
  await expect(documentPage.page.getByText('Revision').first()).toBeVisible();
  logger.info("User sees the document revision date");
});

Then('User should see the document expiration date', async ({ documentPage }) => {
  await expect(documentPage.page.getByText('Expiration Date').first()).toBeVisible();
  logger.info("User sees the document expiration date");
});

Then('User should see the assigned user', async ({ documentPage }) => {
  await expect(documentPage.page.getByText('Assigned To').first()).toBeVisible();
  logger.info("User sees the assigned user");
});

When('User selects an existing document', async ({ documentPage }) => {
  await documentPage.clickFirstDocument();
  logger.info("User selects an existing document");
});

Then('User should be redirected to the document details page', async ({ documentPage }) => {
  await expect(documentPage.page).toHaveURL(/record/);
  logger.info("User is on the document details page");
});

Given('User is viewing an existing document', async ({ documentPage }) => {
  await documentPage.DocumentMenuHover();
  await documentPage.openViewDocuments();
  logger.info("User is viewing the documents list");
});

When('User opens the document details', async ({ documentPage }) => {
  await documentPage.clickFirstDocument();
  logger.info("User opens the document details");
});

Then('User should see the document name, file, category, sub category, revision date, expiration date and assigned user', async ({ documentPage }) => {
  await expect(documentPage.page.getByText('Document Name').first()).toBeVisible();
  await expect(documentPage.page.getByText('File').filter({ visible: true }).first()).toBeVisible();
  await expect(documentPage.page.getByText('Category').first()).toBeVisible();
  await expect(documentPage.page.getByText('Sub Category').first()).toBeVisible();
  await expect(documentPage.page.getByText('Revision').first()).toBeVisible();
  await expect(documentPage.page.getByText('Expiration Date').first()).toBeVisible();
  await expect(documentPage.page.getByText('Assigned To').first()).toBeVisible();
  logger.info("User sees all the document details");
});

// When('User selects an expired document', async ({ documentPage }) => {
//   await documentPage.page.getByRole('link', { name: 'Expired Document' }).first().click();
//   logger.info("User selects an expired document");
// });
When('User selects an expired document', async ({ documentPage }) => {
  await documentPage.DocumentMenuHover();
  await documentPage.clickCreateDocument();
  await documentPage.fileUploadInput.setInputFiles('C:\\Users\\pmano\\OneDrive\\Desktop\\testdocs\\Book1.xlsx');
  await documentPage.enterDocumentName('Expired Document');
  await documentPage.enterRevision('1');
  await documentPage.enterPublishDate('2024-01-01');
  await documentPage.enterExpirationDate('2025-01-01');
  await documentPage.saveDocument();
  logger.info("User creates and opens an expired document");
});

// When('User selects a document with a valid expiration date', async ({ documentPage }) => {
//   await documentPage.page.getByRole('link', { name: 'Valid Document' }).first().click();
//   logger.info("User selects a document with a valid expiration date");
// });
When('User selects a document with a valid expiration date', async ({ documentPage }) => {
  await documentPage.DocumentMenuHover();
  await documentPage.clickCreateDocument();
  await documentPage.fileUploadInput.setInputFiles('C:\\Users\\pmano\\OneDrive\\Desktop\\testdocs\\Book1.xlsx');
  await documentPage.enterDocumentName('Valid Document');
  await documentPage.enterRevision('1');
  await documentPage.enterPublishDate('2026-01-01');
  await documentPage.enterExpirationDate('2027-12-31');
  await documentPage.saveDocument();
  logger.info("User creates and opens a valid document");
});

Then('User should see the document details successfully', async ({ documentPage }) => {
  await expect(documentPage.page).toHaveURL(/record/);
  logger.info("User sees the document details successfully");
});

Then('User should see the correct number of documents displayed', async ({ documentPage }) => {
  const count = await documentPage.documentRows.count();
  expect(count).toBeGreaterThan(0);
  logger.info("Documents displayed: " + count);
});