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

When("User hovers over the Documents menu item", async ({ documentsPage }) => {
  await documentsPage.hoverDocumentsMenu();
});

Then("User should see the documents page dropdown menu", async ({documentsPage}) => {
  await expect(documentsPage.dropdownMenu).toBeVisible();
});

When("User clicks on the Documents menu item", async ({ documentsPage }) => {
  await documentsPage.clickDocumentsMenu();
}); 

When("User uploads a document", async ({ documentsPage }) => {
  const documentsPage = new DocumentsPage(page);

    await documentsPage.uploadFile("test-data/sampleDocument.txt");
});

When("User enters document details", async ({ page }) => {
    const documentsPage = new DocumentsPage(page);

    await documentsPage.enterDocumentName("Document Name");
    await documentsPage.enterRevision("Number Of Revisions");
    await documentsPage.selectStatus("select status");
    await documentsPage.selectDocumentType("Document Type");
    await documentsPage.enterPublishDate("Date");
    await documentsPage.enterExpirationDate("Date");
    await documentsPage.selectCategory("Category");
    await documentsPage.selectSubCategory("SubCategory");

    await documentsPage.clickSave();
});

Then("User should see the document created successfully", async ({ page }) => {
    await expect(
        page.getByText("created successfully").first()
    ).toBeVisible();
});

When("User leaves mandatory fields empty and saves", async ({ page }) => {
    const documentsPage = new DocumentsPage(page);

    await documentsPage.clickSave();
});


Then("User should see appropriate validation messages", async ({ page }) => {
    await expect(
        page.getByText("required").first()
    ).toBeVisible();
});


When("User enters invalid document information and saves", async ({ page }) => {
    const documentsPage = new DocumentsPage(page);

    await documentsPage.enterDocumentName("");
    await documentsPage.enterRevision("INVALID");

    await documentsPage.clickSave();
});


Then("User should see document validation errors", async ({ page }) => {
    await expect(
        page.getByText("invalid document").first()
    ).toBeVisible();
});