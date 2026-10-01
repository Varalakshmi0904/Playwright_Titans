# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\login.feature.spec.js >> Login Page - Functional Validation >> Login with valid credentials
- Location: .features-gen\features\login.feature.spec.js:6:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://suite8demo.suiteondemand.com/#/home"
Received: "https://suite8demo.suiteondemand.com/#/Login"
Timeout:  20000ms

Call log:
  - Expect "toHaveURL" with timeout 20000ms
    43 × locator resolved to <html lang="en" data-critters-container="">…</html>
       - unexpected value "https://suite8demo.suiteondemand.com/#/Login"

```

```yaml
- navigation:
  - list:
    - listitem
- alert: Too many failed login attempts, please try again later.
- textbox "Username": will
- textbox "Password": will
- button "Log In"
- text: © Supercharged by SuiteCRM © Powered By SugarCRM
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
  15 |     await loginPage.enterCredentials(loginData.username, loginData.password);
  16 |    
  17 |   },
  18 |   
  19 | );
  20 | 
  21 | When(
  22 |   "User enters the valid credentials from Excel and click login",
  23 |   async ({ loginPage, excelReader }) => {
  24 |     const loginData = excelReader.getExcelData("login", "ValidCredentials");
  25 |     await loginPage.enterCredentials(loginData.username, loginData.password);
  26 |   },
  27 | );
  28 | 
  29 | When(
  30 |   "User enters invalid credentials from Excel for {string} and click login",
  31 |   async ({ loginPage, excelReader }, arg) => {
  32 |     const loginData = excelReader.getExcelData("login", arg);
  33 |     await loginPage.enterCredentials(loginData.username, loginData.password);
  34 |   },
  35 | );
  36 | 
  37 | Then(
  38 |   "User should be redirected to the SuiteCRM Dashboard",
  39 |   async ({ page }) => {
> 40 |     await expect(page).toHaveURL(
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  41 |       "https://suite8demo.suiteondemand.com/#/home",
  42 |       { timeout: 20000 },
  43 |     );
  44 |   },
  45 | );
  46 | 
  47 | Then("User should see a login error message", async ({ loginPage }) => {
  48 |   await expect(loginPage.errorMessage).toBeVisible();
  49 | });
  50 | 
```