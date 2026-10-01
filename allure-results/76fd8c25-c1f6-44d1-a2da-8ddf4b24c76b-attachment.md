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

# Test source

```ts
  1  | import { createBdd } from "playwright-bdd";
  2  | import { expect } from "@playwright/test";
  3  | import { test } from "../fixtures/fixtures.js";
  4  | const { Given, When, Then } = createBdd(test);
  5  | 
  6  | Given("User is on the Login page", async ({ loginPage }) => {
  7  |   await loginPage.goto();
  8  | });
  9  | 
  10 | Given(
  11 |   "User is logged into the SuiteCRM Dashboard page",
  12 |   async ({ loginPage, excelReader }) => {
  13 |     const loginData = excelReader.getExcelData("login", "ValidCredentials");
  14 |     await loginPage.goto();
  15 |     await page.waitForTimeout(15000);
  16 |     await loginPage.enterCredentials(loginData.username, loginData.password);
  17 |     await page.waitForTimeout(15000);
  18 |   },
  19 |   
  20 | );
  21 | 
> 22 | When(
     |   ^ ReferenceError: page is not defined
  23 |   "User enters the valid credentials from Excel and click login",
  24 |   async ({ loginPage, excelReader }) => {
  25 |     const loginData = excelReader.getExcelData("login", "ValidCredentials");
  26 |     await loginPage.enterCredentials(loginData.username, loginData.password);
  27 |   },
  28 | );
  29 | 
  30 | When(
  31 |   "User enters invalid credentials from Excel for {string} and click login",
  32 |   async ({ loginPage, excelReader }, arg) => {
  33 |     const loginData = excelReader.getExcelData("login", arg);
  34 |     await loginPage.enterCredentials(loginData.username, loginData.password);
  35 |   },
  36 | );
  37 | 
  38 | Then(
  39 |   "User should be redirected to the SuiteCRM Dashboard",
  40 |   async ({ page }) => {
  41 |     await expect(page).toHaveURL("https://suite8demo.suiteondemand.com/#/home");
  42 |   },
  43 | );
  44 | 
  45 | Then("User should see {string} message", async ({ loginPage }, arg) => {
  46 |   await expect(loginPage.errorMessage).toContainText(arg);
  47 | });
  48 | 
```