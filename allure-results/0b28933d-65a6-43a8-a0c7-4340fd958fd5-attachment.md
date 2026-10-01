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
  4  | import {logger } from "../utils/logger.js"; 
  5  | 
  6  | const { Given, When, Then } = createBdd(test);
  7  | 
  8  | Given('User is on the Create Document page', async ({ documentPage }) => {
  9  |   await documentPage.hoverOverDocumentMenu();
  10 |   await documentPage.clickCreateDocument();
  11 | 
  12 |   logger.info("User is on the Create Document page");
  13 | });
  14 | 
> 15 | When('User enters all details and clicks save', async ({ documentPage }) => {
     |                      ^ TypeError: Cannot read properties of undefined (reading 'hoverOverDocumentMenu')
  16 |   await documentPage.uploadFile("C:\\Users\\pmano\\OneDrive\\Desktop\\testdocs\\Book1.xlsx");
  17 |   await documentPage.enterRevision().fill(3);
  18 |   await documentPage.saveDocument();
  19 |   logger.info("User has entered all valid details and clicked save");
  20 | });
  21 | 
  22 | Then('User should see the document created successfully', async ({documentPage}) => {
  23 |   await expect(documentPage.documentrevision).toBeVisible();
  24 | });
```