# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/leads.feature.spec.js >> SuiteCRM Leads >> Create a new lead - TC001
- Location: .features-gen/features/leads.feature.spec.js:6:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.hover: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('span').filter({ hasText: 'Leads' }).first()

```

# Test source

```ts
  1   | import { expect } from "@playwright/test";
  2   | 
  3   | export class LeadsPage {
  4   | 
  5   |     constructor(page) {
  6   |         this.page = page;
  7   | 
  8   |         this.leadsMenu = page.locator('span').filter({ hasText: 'Leads' }).first();
  9   |         this.createLead = page.locator("//span[normalize-space()='Create Lead']");
  10  | 
  11  |         this.title = page.locator('select').first();
  12  | 
  13  |         this.firstName = page.getByRole('textbox').nth(1);
  14  |         this.lastName = page.getByRole('textbox').nth(2);
  15  |         this.jobTitle = page.getByRole('textbox').nth(3);
  16  |         this.mobile = page.getByRole('textbox').nth(4);
  17  |         this.department = page.getByRole('textbox').nth(5);
  18  | 
  19  |         this.officePhone = page.getByRole('textbox').nth(6);
  20  |         this.accountName = page.getByRole('textbox').nth(7);
  21  |         this.website = page.getByRole('textbox').nth(8);
  22  | 
  23  |         this.primaryAddressStreet = page.getByRole('textbox').nth(9);
  24  |         this.primaryAddressPostalcode = page.getByRole('textbox').nth(10);
  25  | 
  26  |         this.emailAddress = page.getByLabel('Email Address');
  27  |         this.primaryEmail = page.getByLabel('Primary');
  28  |         this.optOut = page.getByLabel('Opt Out');
  29  |         this.invalidEmail = page.getByLabel('Invalid');
  30  | 
  31  |         this.primaryAddressCity = page.getByRole('textbox').nth(11);
  32  |         this.primaryAddressState = page.getByRole('textbox').nth(12);
  33  |         this.primaryAddressCountry = page.getByRole('textbox').nth(13);
  34  | 
  35  |         this.altAddressStreet = page.getByRole('textbox').nth(14);
  36  |         this.altAddressPostalcode = page.getByRole('textbox').nth(15);
  37  |         this.altAddressCity = page.getByLabel('Alt Address City');
  38  |         this.altAddressState = page.getByLabel('Alt Address State');
  39  |         this.altAddressCountry = page.getByLabel('Alt Address Country');
  40  | 
  41  |         this.description = page.getByLabel('Description');
  42  | 
  43  |         this.saveButton = page.getByRole('button', { name: 'Save' });
  44  |         this.cancelButton = page.getByRole('button', { name: 'Cancel' });
  45  |     }
  46  | 
  47  |     async hoverOverLeadsMenu() {
> 48  |         await this.leadsMenu.hover();
      |                              ^ Error: locator.hover: Test timeout of 30000ms exceeded.
  49  |     }
  50  | 
  51  |     async openCreateLead() {
  52  |         await this.createLead.click();
  53  |     }
  54  | 
  55  |     async selectTitle(title) {
  56  |         await this.title.selectOption({ label: title });
  57  |     }
  58  | 
  59  |     async enterFName(firstName) {
  60  |         await this.firstName.fill(String(firstName));
  61  |     }
  62  | 
  63  |     async enterLName(lastName) {
  64  |         await this.lastName.fill(String(lastName));
  65  |     }
  66  | 
  67  |     async enterJobDetails(jobTitle, department, accountName) {
  68  |         await this.jobTitle.fill(String(jobTitle));
  69  |         await this.department.fill(String(department));
  70  |         await this.accountName.fill(String(accountName));
  71  |     }
  72  | 
  73  |     async enterContactDetails(mobile, officePhone, website) {
  74  |         await this.mobile.fill(String(mobile));
  75  |         await this.officePhone.fill(String(officePhone));
  76  |         await this.website.fill(String(website));
  77  |     }
  78  | 
  79  |     async enterEmail(email) {
  80  |         await this.emailAddress.fill(String(email));
  81  |     }
  82  | 
  83  |     async selectPrimaryEmail() {
  84  |         await this.primaryEmail.check();
  85  |     }
  86  | 
  87  |     async selectOptOut() {
  88  |         await this.optOut.check();
  89  |     }
  90  | 
  91  |     async markEmailInvalid() {
  92  |         await this.invalidEmail.check();
  93  |     }
  94  | 
  95  |     async enterPrimaryAddress(street, postalcode, city, state, country) {
  96  |         await this.primaryAddressStreet.fill(String(street));
  97  |         await this.primaryAddressPostalcode.fill(String(postalcode));
  98  |         await this.primaryAddressCity.fill(String(city));
  99  |         await this.primaryAddressState.fill(String(state));
  100 |         await this.primaryAddressCountry.fill(String(country));
  101 |     }
  102 | 
  103 |     async enterAlternateAddress(street, postalcode, city, state, country) {
  104 |         await this.altAddressStreet.fill(String(street));
  105 |         await this.altAddressPostalcode.fill(String(postalcode));
  106 |         await this.altAddressCity.fill(String(city));
  107 |         await this.altAddressState.fill(String(state));
  108 |         await this.altAddressCountry.fill(String(country));
  109 |     }
  110 | 
  111 |     async enterDescription(description) {
  112 |         await this.description.fill(String(description));
  113 |     }
  114 | 
  115 |     async saveLead() {
  116 |         await this.saveButton.click();
  117 |     }
  118 | 
  119 |     async cancelLead() {
  120 |         await this.cancelButton.click();
  121 |     }
  122 | }
```