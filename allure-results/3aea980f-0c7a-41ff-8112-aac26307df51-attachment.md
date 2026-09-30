# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\opportunities.feature.spec.js >> Opportunities Module >> Verify mandatory field indicators are displayed >> Example #4
- Location: .features-gen\features\opportunities.feature.spec.js:40:9

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://suite8demo.suiteondemand.com/#/opportunities/edit?return_module=Opportunities&return_action=DetailView"
Received: "https://suite8demo.suiteondemand.com/#/home"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × locator resolved to <html lang="en" data-critters-container="">…</html>
       - unexpected value "https://suite8demo.suiteondemand.com/#/home"

```

```yaml
- navigation:
  - list:
    - listitem:
      - link:
        - /url: "#/home"
  - list:
    - listitem: Accounts
    - listitem: Contacts
    - listitem: Opportunities
    - listitem: Leads
    - listitem: Quotes
    - listitem: Calendar
    - listitem: Documents
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
- iframe
- text: © Supercharged by SuiteCRM © Powered By SugarCRM Back To Top
```

# Test source

```ts
  1   | import { createBdd } from "playwright-bdd";
  2   | import { expect } from "@playwright/test";
  3   | import { test } from "../fixtures/fixtures.js";
  4   | const { Given, When, Then } = createBdd(test);
  5   | 
  6   | When("User hovers over Opportunities", async ({ opportunitiesPage }) => {
  7   |   await opportunitiesPage.hoverOpportunitiesMenu();
  8   | });
  9   | 
  10  | Then(
  11  |   "User should see the Opportunities dropdown menu",
  12  |   async ({ opportunitiesPage }) => {
  13  |     await expect(
  14  |       await opportunitiesPage.isDropdownMenuVisible()
  15  |     ).toBe(true);
  16  |   },
  17  | );
  18  | 
  19  | When("User clicks Create Opportunity", async ({ opportunitiesPage }) => {
  20  |   await opportunitiesPage.clickCreateOpportunity();
  21  | });
  22  | 
  23  | Then(
  24  |   "User should be redirected to the Create Opportunity page",
  25  |   async ({ opportunitiesPage }) => {
  26  |     await expect(opportunitiesPage.pageTitle).toBeVisible();
  27  |   },
  28  | );
  29  | 
  30  | Given(
  31  |   "User is on the Create Opportunity page",
  32  |   async ({ opportunitiesPage }) => {
  33  |     await opportunitiesPage.clickCreateOpportunity();
  34  | 
  35  |     console.log("After click URL:", await opportunitiesPage.page.url());
  36  |   },
  37  | );
  38  | 
  39  | // When(
  40  | //   "User views the Create Opportunity page",
  41  | //   async ({ opportunitiesPage }) => {
  42  | //     await expect(opportunitiesPage.pageTitle).toBeVisible();
  43  | //   },
  44  | // );
  45  | When(
  46  |   "User views the Create Opportunity page",
  47  |   async ({ opportunitiesPage }) => {
> 48  |     await expect(opportunitiesPage.page).toHaveURL(
      |                                          ^ Error: expect(page).toHaveURL(expected) failed
  49  |       "https://suite8demo.suiteondemand.com/#/opportunities/edit?return_module=Opportunities&return_action=DetailView"
  50  |     );
  51  |   },
  52  | );
  53  | Then(
  54  |   "User should see a mandatory indicator next to {string}",
  55  |   async ({ opportunitiesPage }, arg) => {
  56  |     const label = await opportunitiesPage.getMandatoryFieldLabel(arg);
  57  |     await expect(label).toContainText("*");
  58  |   },
  59  | );
  60  | When(
  61  |   "User enters all mandatory fields and clicks Save",
  62  |   async ({ opportunitiesPage, excelReader }) => {
  63  |     const opportunitiesData = excelReader.getExcelData(
  64  |       "opportunities",
  65  |       "Create Opportunity",
  66  |     );
  67  | 
  68  |     await opportunitiesPage.fillAllMandatoryFieldsAndSave({
  69  |       opportunityName: opportunitiesData.OpportunityName,
  70  |       accountName: opportunitiesData.AccountName,
  71  |       opportunityAmount: String(opportunitiesData.OpportunityAmount),
  72  |       salesStage: opportunitiesData.SalesStage,
  73  |       closeDate: opportunitiesData.ExpectedCloseDate,
  74  |     });
  75  |   },
  76  | );
  77  | 
  78  | Then(
  79  |   "User should see the created Opportunity",
  80  |   async ({ opportunitiesPage, excelReader }) => {
  81  |     const opportunitiesData = excelReader.getExcelData(
  82  |       "opportunities",
  83  |       "Create Opportunity",
  84  |     );
  85  | 
  86  |     await expect(
  87  |       opportunitiesPage.opportunityTitle(opportunitiesData.OpportunityName),
  88  |     ).toHaveText(opportunitiesData.OpportunityName);
  89  |   },
  90  | );
  91  | When(
  92  |   "User leaves {string} blank and clicks Save",
  93  |   async ({ opportunitiesPage, excelReader }, arg) => {
  94  |     const opportunitiesData = excelReader.getExcelData(
  95  |       "opportunities",
  96  |       "BlankMandatoryfield",
  97  |     );
  98  | 
  99  |     const data = {
  100 |       opportunityName: opportunitiesData.OpportunityName,
  101 |       accountName: opportunitiesData.AccountName,
  102 |       opportunityAmount: String(opportunitiesData.OpportunityAmount),
  103 |       salesStage: opportunitiesData.SalesStage,
  104 |       closeDate: opportunitiesData.ExpectedCloseDate,
  105 |     };
  106 | 
  107 |     const fieldMap = {
  108 |       "Opportunity Name": "opportunityName",
  109 |       "Account Name": "accountName",
  110 |       "Sales Stage": "salesStage",
  111 |       "Expected Close Date": "closeDate",
  112 |     };
  113 | 
  114 |     data[fieldMap[arg]] = "";
  115 | 
  116 |     await opportunitiesPage.fillAllMandatoryFieldsAndSave(data);
  117 |   },
  118 | );
  119 | 
  120 | Then(
  121 |   "User should see a required-field validation message for {string}",
  122 |   async ({ opportunitiesPage }, arg) => {
  123 |     await expect(opportunitiesPage.ValidationMessage).toBeVisible();
  124 |   },
  125 | );
  126 | When(
  127 |   "User enters a non-numeric value in Opportunity Amount and clicks Save",
  128 |   async ({ opportunitiesPage, excelReader }) => {
  129 |     const opportunitiesData = excelReader.getExcelData(
  130 |       "opportunities",
  131 |       "InvalidAmount",
  132 |     );
  133 |     await opportunitiesPage.fillAllMandatoryFieldsAndSave({
  134 |       opportunityName: opportunitiesData.OpportunityName,
  135 |       accountName: opportunitiesData.AccountName,
  136 |       opportunityAmount: String(opportunitiesData.OpportunityAmount),
  137 |       salesStage: opportunitiesData.SalesStage,
  138 |       closeDate: opportunitiesData.ExpectedCloseDate,
  139 |     });
  140 |   },
  141 | );
  142 | 
  143 | Then(
  144 |   "User should see an invalid-format validation message",
  145 |   async ({ opportunitiesPage }) => {
  146 |     await expect(opportunitiesPage.ValidationMessage).toBeVisible();
  147 |     await expect(opportunitiesPage.invalidFormatMessage).toBeVisible();
  148 |   },
```