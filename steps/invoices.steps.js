import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures.js";
import { logger } from "../utils/logger.js";

const { Given, When, Then } = createBdd(test);

// ===================== Create Invoice =====================

Given('User is on the Create Invoice page', async ({ invoicesPage }) => {
  await invoicesPage.clickCreateInvoice();
  logger.info("User is on the Create Invoice page");
});

When('User enters valid invoice details and saves', async ({ invoicesPage }) => {
  await invoicesPage.enterInvoiceTitle('Test Invoice');
  await invoicesPage.enterDueDate('2026-12-31');
  await invoicesPage.enterInvoiceDate('2026-10-05');
  await invoicesPage.selectStatus('Unpaid');
  await invoicesPage.clickSave();
  logger.info("User enters valid invoice details and saves");
});

// Then('User should see the invoice created successfully', async ({ invoicesPage }) => {
//   const frame = invoicesPage.page.locator('iframe').contentFrame();
//   await expect(frame.getByText('Test Invoice').first()).toBeVisible({ timeout: 15000 });
//   logger.info("Invoice created successfully");
// });

Then('User should see the invoice created successfully', async ({ invoicesPage }) => {
  await expect(invoicesPage.page).not.toHaveURL(/edit/, { timeout: 15000 });
  logger.info("Invoice created successfully");
});

When('User leaves mandatory fields empty and saves', async ({ invoicesPage }) => {
  await invoicesPage.enterInvoiceTitle('');
  await invoicesPage.clickSave();
  logger.info("User sees mandatory fields empty and saves");
});

Then('User should see appropriate validation messages', async ({ invoicesPage }) => {
  const frame = invoicesPage.page.locator('iframe').contentFrame();
  await expect(frame.getByText('Missing required field').first()).toBeVisible();
  logger.info("User sees the validation messages");
});

When('User enters invalid invoice information and saves', async ({ invoicesPage }) => {
  await invoicesPage.enterInvoiceTitle('Invalid Invoice');
  await invoicesPage.enterDueDate('abc');
  await invoicesPage.clickSave();
  logger.info("User enters invalid invoice information and saves");
});

Then('User should see invoice validation errors', async ({ invoicesPage }) => {
  const frame = invoicesPage.page.locator('iframe').contentFrame();
  await expect(frame.getByText('Invalid Value').first()).toBeVisible();
  logger.info("User sees the invoice validation errors");
});

When('User enters a valid invoice title', async ({ invoicesPage }) => {
  await invoicesPage.enterInvoiceTitle('Test Invoice');
  logger.info("User enters a valid invoice title");
});

Then('User should see the entered invoice title', async ({ invoicesPage }) => {
  await expect(invoicesPage.invoiceTitle).toHaveValue('Test Invoice');
  logger.info("User sees the entered invoice title");
});

When('User views the invoice number field', async ({ invoicesPage }) => {
  logger.info("User views the invoice number field");
});

Then('User should see the Invoice Number label', async ({ invoicesPage }) => {
  const frame = invoicesPage.page.locator('iframe').contentFrame();
  await expect(frame.getByText('Invoice Number:')).toBeVisible();
  logger.info("User sees the Invoice Number label");
});

When('User enters a valid quote number', async ({ invoicesPage }) => {
  await invoicesPage.enterQuoteNumber('2001');
  logger.info("User enters a valid quote number");
});

Then('User should see the entered quote number', async ({ invoicesPage }) => {
  await expect(invoicesPage.quoteNumber).toHaveValue('2001');
  logger.info("User sees the entered quote number");
});

When('User enters a valid quote date', async ({ invoicesPage }) => {
  await invoicesPage.enterQuoteDate('2026-10-01');
  logger.info("User enters a valid quote date");
});

Then('User should see the entered quote date', async ({ invoicesPage }) => {
  await expect(invoicesPage.quoteDate).toHaveValue('2026-10-01');
  logger.info("User sees the entered quote date");
});

When('User enters a valid due date', async ({ invoicesPage }) => {
  await invoicesPage.enterDueDate('2026-12-31');
  logger.info("User enters a valid due date");
});

Then('User should see the entered due date', async ({ invoicesPage }) => {
  await expect(invoicesPage.dueDate).toHaveValue('2026-12-31');
  logger.info("User sees the entered due date");
});

When('User enters a valid invoice date', async ({ invoicesPage }) => {
  await invoicesPage.enterInvoiceDate('2026-10-05');
  logger.info("User enters a valid invoice date");
});

Then('User should see the entered invoice date', async ({ invoicesPage }) => {
  await expect(invoicesPage.invoiceDate).toHaveValue('2026-10-05');
  logger.info("User sees the entered invoice date");
});

When('User selects a user in the Invoice Assigned To field', async ({ invoicesPage }) => {
  await invoicesPage.enterAssignedTo('admin');
  logger.info("User selects a user in the Invoice Assigned To field");
});

Then('User should see the selected invoice user', async ({ invoicesPage }) => {
  await expect(invoicesPage.assignedTo).toHaveValue('admin');
  logger.info("User sees the selected invoice user");
});

When('User selects an invoice status', async ({ invoicesPage }) => {
  await invoicesPage.selectStatus('Unpaid');
  logger.info("User selects an invoice status");
});

Then('User should see the selected invoice status', async ({ invoicesPage }) => {
  await expect(invoicesPage.statusDropdown).toHaveValue('Unpaid');
  logger.info("User sees the selected invoice status");
});

When('User selects Paid as the invoice status', async ({ invoicesPage }) => {
  await invoicesPage.selectStatus('Paid');
  logger.info("User selects Paid status");
});

Then('User should see the invoice status as Paid', async ({ invoicesPage }) => {
  await expect(invoicesPage.statusDropdown).toHaveValue('Paid');
  logger.info("User sees Paid status");
});

When('User selects Unpaid as the invoice status', async ({ invoicesPage }) => {
  await invoicesPage.selectStatus('Unpaid');
  logger.info("User selects Unpaid status");
});

Then('User should see the invoice status as Unpaid', async ({ invoicesPage }) => {
  await expect(invoicesPage.statusDropdown).toHaveValue('Unpaid');
  logger.info("User sees Unpaid status");
});

When('User selects Cancelled as the invoice status', async ({ invoicesPage }) => {
  await invoicesPage.selectStatus('Cancelled');
  logger.info("User selects Cancelled status");
});

Then('User should see the invoice status as Cancelled', async ({ invoicesPage }) => {
  await expect(invoicesPage.statusDropdown).toHaveValue('Cancelled');
  logger.info("User sees Cancelled status");
});

When('User enters a valid invoice description', async ({ invoicesPage }) => {
  await invoicesPage.enterDescription('Test invoice description');
  logger.info("User enters a valid invoice description");
});

Then('User should see the entered invoice description', async ({ invoicesPage }) => {
  await expect(invoicesPage.description).toHaveValue('Test invoice description');
  logger.info("User sees the entered invoice description");
});
