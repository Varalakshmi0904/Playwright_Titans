# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\opportunities.feature.spec.js >> Opportunities Module >> Verify Create Opportunity navigation
- Location: .features-gen\features\opportunities.feature.spec.js:15:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Create', { exact: true })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('Create', { exact: true }) with timeout 5000ms
  - waiting for getByText('Create', { exact: true })

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
> 26  |     await expect(opportunitiesPage.pageTitle).toBeVisible();
      |                                               ^ Error: expect(locator).toBeVisible() failed
  27  |   },
  28  | );
  29  | 
  30  | Given(
  31  |   "User is on the Create Opportunity page",
  32  |   async ({ opportunitiesPage }) => {
  33  |     await opportunitiesPage.clickCreateOpportunity();
  34  | 
  35  |   },
  36  | );
  37  | 
  38  | 
  39  | When(
  40  |   "User views the Create Opportunity page",
  41  |   async ({ opportunitiesPage }) => {
  42  |     await expect(opportunitiesPage.page).toHaveURL(
  43  |       "https://suite8demo.suiteondemand.com/#/opportunities/edit?return_module=Opportunities&return_action=DetailView"
  44  |     );
  45  |   },
  46  | );
  47  | Then(
  48  |   "User should see a mandatory indicator next to {string}",
  49  |   async ({ opportunitiesPage }, arg) => {
  50  |     const label = await opportunitiesPage.getMandatoryFieldLabel(arg);
  51  |     await expect(label).toContainText("*");
  52  |   },
  53  | );
  54  | When(
  55  |   "User enters all mandatory fields and clicks Save",
  56  |   async ({ opportunitiesPage, excelReader }) => {
  57  |     const opportunitiesData = excelReader.getExcelData(
  58  |       "opportunities",
  59  |       "Create Opportunity",
  60  |     );
  61  | 
  62  |     await opportunitiesPage.fillAllMandatoryFieldsAndSave({
  63  |       opportunityName: opportunitiesData.OpportunityName,
  64  |       accountName: opportunitiesData.AccountName,
  65  |       opportunityAmount: String(opportunitiesData.OpportunityAmount),
  66  |       salesStage: opportunitiesData.SalesStage,
  67  |       closeDate: opportunitiesData.ExpectedCloseDate,
  68  |     });
  69  |   },
  70  | );
  71  | 
  72  | Then(
  73  |   "User should see the created Opportunity",
  74  |   async ({ opportunitiesPage, excelReader }) => {
  75  |     const opportunitiesData = excelReader.getExcelData(
  76  |       "opportunities",
  77  |       "Create Opportunity",
  78  |     );
  79  | 
  80  |     await expect(
  81  |       opportunitiesPage.opportunityTitle(opportunitiesData.OpportunityName),
  82  |     ).toHaveText(opportunitiesData.OpportunityName);
  83  |   },
  84  | );
  85  | When(
  86  |   "User leaves {string} blank and clicks Save",
  87  |   async ({ opportunitiesPage, excelReader }, arg) => {
  88  |     const opportunitiesData = excelReader.getExcelData(
  89  |       "opportunities",
  90  |       "BlankMandatoryfield",
  91  |     );
  92  | 
  93  |     const data = {
  94  |       opportunityName: opportunitiesData.OpportunityName,
  95  |       accountName: opportunitiesData.AccountName,
  96  |       opportunityAmount: String(opportunitiesData.OpportunityAmount),
  97  |       salesStage: opportunitiesData.SalesStage,
  98  |       closeDate: opportunitiesData.ExpectedCloseDate,
  99  |     };
  100 | 
  101 |     const fieldMap = {
  102 |       "Opportunity Name": "opportunityName",
  103 |       "Account Name": "accountName",
  104 |       "Sales Stage": "salesStage",
  105 |       "Expected Close Date": "closeDate",
  106 |     };
  107 | 
  108 |     data[fieldMap[arg]] = "";
  109 | 
  110 |     await opportunitiesPage.fillAllMandatoryFieldsAndSave(data);
  111 |   },
  112 | );
  113 | 
  114 | Then(
  115 |   "User should see a required-field validation message for {string}",
  116 |   async ({ opportunitiesPage }, arg) => {
  117 |     await expect(opportunitiesPage.ValidationMessage).toBeVisible();
  118 |   },
  119 | );
  120 | When(
  121 |   "User enters a non-numeric value in Opportunity Amount and clicks Save",
  122 |   async ({ opportunitiesPage, excelReader }) => {
  123 |     const opportunitiesData = excelReader.getExcelData(
  124 |       "opportunities",
  125 |       "InvalidAmount",
  126 |     );
```