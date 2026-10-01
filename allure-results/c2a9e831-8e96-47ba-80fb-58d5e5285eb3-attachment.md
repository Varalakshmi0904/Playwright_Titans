# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\documents.feature.spec.js >> Document Page- Functional Validation >> Create a new document
- Location: .features-gen\features\documents.feature.spec.js:10:7

# Error details

```
TypeError: documentPage.uploadFile is not a function
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - navigation [ref=e5]:
      - generic [ref=e6]:
        - list [ref=e9]:
          - listitem [ref=e10]:
            - link [ref=e11] [cursor=pointer]:
              - /url: "#/home"
        - list [ref=e18]:
          - listitem [ref=e19]:
            - generic [ref=e20]: Accounts
          - listitem [ref=e27]:
            - generic [ref=e28]: Contacts
          - listitem [ref=e35]:
            - generic [ref=e36]: Opportunities
          - listitem [ref=e43]:
            - generic [ref=e44]: Leads
          - listitem [ref=e51]:
            - generic [ref=e52]: Quotes
          - listitem [ref=e59]:
            - generic [ref=e60]: Calendar
          - listitem [ref=e67]:
            - generic [ref=e70]:
              - generic [ref=e71]: Documents
              - generic [ref=e75]:
                - link "Create Document" [active] [ref=e79] [cursor=pointer]:
                  - /url: "#/documents/edit?return_module=Documents&return_action=DetailView"
                - link "View Documents" [ref=e88] [cursor=pointer]:
                  - /url: "#/documents/index"
        - list [ref=e99]:
          - listitem [ref=e100]:
            - generic [ref=e101]: More
      - generic [ref=e103]:
        - list [ref=e105]:
          - listitem [ref=e106]:
            - generic "Quick Create" [ref=e107] [cursor=pointer]
        - list [ref=e114]:
          - listitem [ref=e115]:
            - generic "Recently Viewed" [ref=e116] [cursor=pointer]
        - generic [ref=e126]:
          - textbox "Search" [ref=e127]:
            - /placeholder: Search...
          - button "Search" [ref=e129] [cursor=pointer]
        - list [ref=e139]:
          - listitem [ref=e140]:
            - generic [ref=e141] [cursor=pointer]
      - list [ref=e149]:
        - listitem [ref=e150]
    - iframe [ref=e162]
  - generic [ref=e164]:
    - generic [ref=e165]: © Supercharged by SuiteCRM © Powered By SugarCRM
    - generic [ref=e166]: Back To Top
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
  8  | Given('User is on the Create Document page', async ({ documentPage }) => {
  9  |   await documentPage.hoverOverDocumentMenu();
  10 |   await documentPage.clickCreateDocument();
  11 | 
  12 |   logger.info("User is on the Create Document page");
  13 | });
  14 | 
  15 | When('User clicks the save button entering all valid details', async ({ documentPage }) => {
  16 |   await documentPage.uploadFile("./test-data/Book1.xlsx");
  17 | 
  18 |   await documentPage.enterRevision().fill(3);
  19 |   await documentPage.saveDocument();
  20 | 
  21 |   logger.info("User has entered all valid details and clicked save");
> 22 | });
     |                      ^ TypeError: documentPage.uploadFile is not a function
  23 | 
  24 | Then('User should see the document created successfully', async ({ documentPage }) => {
  25 |   await expect(documentPage.documentrevision).toBeVisible();
  26 | });
```