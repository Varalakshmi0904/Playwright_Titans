import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures.js";
const { Given, When, Then } = createBdd(test);

Given(
  "User is logged into the SuiteCRM Dashboard page",
  async ({ loginPage, excelReader }) => {
    const loginData = excelReader.getExcelData("login", "ValidCredentials");
    await loginPage.goto();
    await loginPage.enterCredentials(loginData.username, loginData.password);
  },
);

Given("User is on the Invoices page", async ({ invoicesPage }) => {
  await invoicesPage.goto();
  await invoicesPage.clickInvoicesMenu();
  await invoicesPage.clickcreateInvoice();

  await expect(invoicesPage.createInvoiceButton).toBeVisible();
});

When("User enters invoice details and saves", async ({ invoicesPage }) => {
    await invoicesPage.enterCustomerName("Customer Name");
    await invoicesPage.enterInvoiceDate("Date");
    await invoicesPage.enterDueDate("Date");
    await invoicesPage.enterAmount("Amount");
    await invoicesPage.clickSave();
});

Then("User should see the invoice created successfully", async ({ invoicesPage }) => {
    await expect(invoicesPage.successMessage).toBeVisible();
});

When("User leaves mandatory fields empty and saves", async ({ invoicesPage }) => {
    await invoicesPage.clickSave();
});

Then("User should see appropriate validation messages", async ({ invoicesPage }) => {
    await expect(invoicesPage.validationMessage).toBeVisible();
});
 
When("User enters invalid invoice information and saves", async ({ invoicesPage }) => {
    await invoicesPage.enterCustomerName("");
    await invoicesPage.enterInvoiceDate("INVALID");
    await invoicesPage.enterDueDate("INVALID");
    await invoicesPage.enterAmount("INVALID");
    await invoicesPage.clickSave();
});

Then("User should see invoice validation errors", async ({ invoicesPage }) => {
    await expect(invoicesPage.validationMessage).toBeVisible();
});
 