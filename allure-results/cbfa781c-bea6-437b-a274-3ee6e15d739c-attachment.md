# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\documents.feature.spec.js >> Document Page- Functional Validation >> Create a new document
- Location: .features-gen\features\documents.feature.spec.js:10:7

# Error details

```
TypeError: Cannot read properties of undefined (reading 'hoverOverDocumentMenu')
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - navigation [ref=e5]:
      - list [ref=e7]:
        - listitem [ref=e8]
    - generic [ref=e19]:
      - textbox "Username" [ref=e21]: will
      - generic [ref=e22]:
        - generic:
          - generic:
            - img [aria-hidden]:
              - generic: "***"
        - textbox "Password" [ref=e23]: will
      - button "Log In" [disabled] [ref=e24]
  - generic [ref=e25]: © Supercharged by SuiteCRM © Powered By SugarCRM
```

# Test source

```ts
  1  | import { createBdd } from "playwright-bdd";
  2  | import { expect } from "@playwright/test";
  3  | import { test } from "../fixtures/fixtures.js";
  4  | import { logger } from "../utils/logger.js";
  5  | 
  6  | const { Given, When, Then } = createBdd(test);
  7  | 
  8  | Given('User is on the Create Document page', async ({ DocumentPage }) => {
  9  |   await DocumentPage.hoverOverDocumentMenu();
  10 |   await DocumentPage.clickCreateDocument();
  11 | 
  12 |   logger.info("User is on the Create Document page");
  13 | });
  14 | 
> 15 | When('User clicks the save button entering all valid details', async ({ DocumentPage }) => {
     |                      ^ TypeError: Cannot read properties of undefined (reading 'hoverOverDocumentMenu')
  16 |   const filePath = path.join(
  17 |     process.cwd(),
  18 |     "test-data",
  19 |     "Book1.xlsx"
  20 |   );
  21 | 
  22 |   await DocumentPage.uploadFile(filePath);
  23 | 
  24 |   await DocumentPage.enterRevision().fill(3);
  25 |   await DocumentPage.saveDocument();
  26 | 
  27 |   logger.info("User clicks the save button entering all valid details");
  28 | });
  29 | 
  30 | Then('User should see the document created successfully', async ({ DocumentPage }) => {
  31 |   await expect(DocumentPage.documentrevision).toBeVisible();
  32 | });
```