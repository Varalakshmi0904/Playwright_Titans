# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/login.feature.spec.js >> Login Page - Functional Validation >> Login with invalid credentials >> Example #2
- Location: .features-gen/features/login.feature.spec.js:20:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toContainText(expected) failed

Locator: getByText('Login credentials incorrect')
Expected substring: "Login credentials incorrect"
Error: element(s) not found

Call log:
  - Expect "toContainText" getByText('Login credentials incorrect') with timeout 5000ms
  - waiting for getByText('Login credentials incorrect')
  - Test timeout of 30000ms exceeded.

```

```yaml
- navigation:
  - list:
    - listitem
- textbox "Username": will
- textbox "Password": wi
- button "Log In" [disabled]
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
  16 |   },
  17 | );
  18 | 
  19 | When(
  20 |   "User enters the valid credentials from Excel and click login",
  21 |   async ({ loginPage, excelReader }) => {
  22 |     const loginData = excelReader.getExcelData("login", "ValidCredentials");
  23 |     await loginPage.enterCredentials(loginData.username, loginData.password);
  24 |   },
  25 | );
  26 | 
  27 | When(
  28 |   "User enters invalid credentials from Excel for {string} and click login",
  29 |   async ({ loginPage, excelReader }, arg) => {
  30 |     const loginData = excelReader.getExcelData("login", arg);
  31 |     await loginPage.enterCredentials(loginData.username, loginData.password);
  32 |   },
  33 | );
  34 | 
  35 | Then(
  36 |   "User should be redirected to the SuiteCRM Dashboard",
  37 |   async ({ page }) => {
  38 |     await expect(page).toHaveURL("https://suite8demo.suiteondemand.com/#/home");
  39 |   },
  40 | );
  41 | 
  42 | Then("User should see {string} message", async ({ loginPage }, arg) => {
> 43 |   await expect(loginPage.errorMessage).toContainText(arg);
     |                                        ^ Error: expect(locator).toContainText(expected) failed
  44 | });
  45 | 
```