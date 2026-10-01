# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\documents.feature.spec.js >> Document Page- Functional Validation >> Create a new document
- Location: .features-gen\features\documents.feature.spec.js:10:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByLabel('Revision')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByLabel('Revision') with timeout 5000ms
  - waiting for getByLabel('Revision')

```

```yaml
- navigation:
  - list:
    - listitem:
      - link:
        - /url: "#/home"
  - list:
    - listitem: Documents
    - listitem: Accounts
    - listitem: Contacts
    - listitem: Opportunities
    - listitem: Leads
    - listitem: Quotes
    - listitem: Calendar
  - list:
    - listitem: More
  - list:
    - listitem
  - list:
    - listitem
  - textbox "Search":
    - /placeholder: Search...
  - button "Search"
  - list:
    - listitem
  - list:
    - listitem
- text: Create
- button "Save"
- button "Cancel"
- separator
- tablist:
  - tab "OVERVIEW" [selected]
  - tab "OTHER"
- tabpanel "OVERVIEW":
  - strong: "* FILE"
  - link "Book1.xlsx":
    - /url: ""
  - text: (8.8 KB) Upload failed, please try again later
  - button
  - text: "Missing required field: File"
  - strong: STATUS
  - combobox:
    - option "Active" [selected]
    - option "Draft"
    - option "FAQ"
    - option "Expired"
    - option "Under Review"
    - option "Pending"
  - strong: "* DOCUMENT NAME"
  - textbox
  - text: "Missing required field: Document Name"
  - strong: "* REVISION"
  - textbox: "3"
  - strong: DOCUMENT TYPE
  - combobox:
    - option [selected]
    - option "Mail Merge"
    - option "EULA"
    - option "NDA"
    - option "License Agreement"
  - strong: TEMPLATE?
  - strong: "* PUBLISH DATE"
  - textbox "yyyy-mm-dd": 2026-10-01
  - button
  - strong: EXPIRATION DATE
  - textbox "yyyy-mm-dd"
  - button
  - strong: CATEGORY
  - combobox:
    - option [selected]
    - option "Marketing"
    - option "Knowledge Base"
    - option "Sales"
  - strong: SUB CATEGORY
  - combobox:
    - option [selected]
    - option "Marketing Collateral"
    - option "Product Brochures"
    - option "FAQ"
  - strong: ASSIGNED TO
  - combobox "WillWestin"
  - button "dropdown trigger"
  - button
- text: © Supercharged by SuiteCRM © Powered By SugarCRM Back To Top
```

# Test source

```ts
  1  | import { createBdd } from "playwright-bdd";
  2  | import { expect } from "@playwright/test";
  3  | import { test } from "../fixtures/fixtures.js";
  4  | import { logger } from "../utils/logger.js";
  5  | 
  6  | 
  7  | const { Given, When, Then } = createBdd(test);
  8  | 
  9  | Given('User is on the Create Document page', async ({ documentPage }) => {
  10 |   await documentPage.hoverOverDocumentMenu();
  11 |   await documentPage.clickCreateDocument();
  12 | 
  13 |   logger.info("User is on the Create Document page");
  14 | });
  15 | 
  16 | When('User enters all valid document details and clicks the Save button', async ({ documentPage }) => {
  17 |   await documentPage.fileUploadInput.setInputFiles('C:\\Users\\pmano\\OneDrive\\Desktop\\testdocs\\Book1.xlsx');
  18 |   await documentPage.enterRevision('3');
  19 |   await documentPage.saveDocument();
  20 | 
  21 |   logger.info("User clicks the save button entering all valid details");
  22 | });
  23 | 
  24 | Then('User should see the document created successfully', async ({ documentPage }) => {
  25 |   await expect(documentPage.documentrevision).toBeVisible();
  26 | });
     |                                                          ^ Error: expect(locator).toBeVisible() failed
```