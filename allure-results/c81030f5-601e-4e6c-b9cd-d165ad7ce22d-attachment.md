# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/leads.feature.spec.js >> SuiteCRM Leads >> Create a new lead - TC001
- Location: .features-gen/features/leads.feature.spec.js:10:7

# Error details

```
ReferenceError: page is not defined
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
  8  | Given("User is on the Create Lead page",{timeout:30000}, async ({ leadsPage }) => {
  9  |     await page.waitForURL(
  10 |         "https://suite8demo.suiteondemand.com/#/home",
  11 |         { timeout: 60000 }
  12 |       );
  13 |   
  14 |     await leadsPage.hoverOverLeadsMenu();
  15 |     await leadsPage.openCreateLead();
  16 | 
> 17 |     logger.info("User is on the Create Lead page");
     |   ^ ReferenceError: page is not defined
  18 | });
  19 | 
  20 | When(
  21 |     "User creates a new lead using Excel test data {string}",
  22 |     async ({ leadsPage, excelReader }, testCase) => {
  23 | 
  24 |         const data = excelReader.getTestData("LeadsData", testCase);
  25 | 
  26 |         await leadsPage.enterFName(data.firstName);
  27 |         await leadsPage.enterLName(data.lastName);
  28 | 
  29 |         await leadsPage.enterJobDetails(
  30 |             data.jobTitle,
  31 |             data.department,
  32 |             data.accountName
  33 |         );
  34 | 
  35 |         await leadsPage.enterContactDetails(
  36 |             data.mobile,
  37 |             data.officePhone,
  38 |             data.website
  39 |         );
  40 | 
  41 |         await leadsPage.enterEmail(data.email);
  42 | 
  43 |         await leadsPage.enterPrimaryAddress(
  44 |             data.primaryStreet,
  45 |             data.primaryPostalcode,
  46 |             data.primaryCity,
  47 |             data.primaryState,
  48 |             data.primaryCountry
  49 |         );
  50 | 
  51 |         await leadsPage.enterAlternateAddress(
  52 |             data.altStreet,
  53 |             data.altPostalcode,
  54 |             data.altCity,
  55 |             data.altState,
  56 |             data.altCountry
  57 |         );
  58 | 
  59 |         await leadsPage.enterDescription(data.description);
  60 | 
  61 |         await leadsPage.saveLead();
  62 | 
  63 |         logger.info(
  64 |             `Lead creation completed using Excel test data: ${testCase}`
  65 |         );
  66 |     }
  67 | );
  68 | 
  69 | Then(
  70 |     "Lead should be created successfully using Excel test data {string}",
  71 |     async ({ page, excelReader }, testCase) => {
  72 | 
  73 |         const data = excelReader.getTestData("LeadsData", testCase);
  74 | 
  75 |         await expect(
  76 |             page
  77 |                 .getByRole("tabpanel", { name: "OVERVIEW" })
  78 |                 .getByText(data.lastName, { exact: true })
  79 |         ).toBeVisible({
  80 |             timeout: 30000
  81 |         });
  82 | 
  83 |         logger.info(
  84 |             `Lead creation test case: ${testCase} passed successfully`
  85 |         );
  86 |     }
  87 | );
```