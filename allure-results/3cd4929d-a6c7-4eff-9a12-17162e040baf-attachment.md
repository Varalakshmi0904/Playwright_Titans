# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\contacts.feature.spec.js >> Contacts - Functional Validations >> Create a new Contact
- Location: .features-gen\features\contacts.feature.spec.js:10:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.hover: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('a').filter({ hasText: /^Contacts$/ })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - navigation [ref=e5]:
      - list [ref=e7]:
        - listitem [ref=e8]
    - alert [ref=e13]:
      - text: Too many failed login attempts, please try again later.
      - generic "Close" [ref=e14] [cursor=pointer]: ×
    - generic [ref=e23]:
      - textbox "Username" [ref=e25]: will
      - generic [ref=e26]:
        - generic:
          - generic:
            - img [aria-hidden]:
              - generic: "***"
        - textbox "Password" [ref=e27]: will
      - button "Log In" [ref=e28] [cursor=pointer]
  - generic [ref=e29]: © Supercharged by SuiteCRM © Powered By SugarCRM
```

# Test source

```ts
  1  | export class ContactPage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |     this.contact = page.locator("a").filter({ hasText: /^Contacts$/ });
  5  |     this.createContact = page.getByRole("link", {
  6  |       name: "Create Contact",
  7  |       exact: true,
  8  |     });
  9  | 
  10 |     this.firstName = page.getByRole("textbox").nth(1);
  11 |     this.lastName = page.getByRole("textbox").nth(2);
  12 |     this.officePhone = page.getByRole("textbox").nth(3);
  13 |     this.mobilePhone = page.getByRole("textbox").nth(4);
  14 |     this.jobTitle = page.getByRole("textbox").nth(5);
  15 |     this.department = page.locator(
  16 |       ".form-control.form-control-sm.ng-pristine.ng-valid.ng-touched",
  17 |     );
  18 |     this.accountName = page.getByRole("combobox", { name: "Select an item" });
  19 | 
  20 |     this.email = page.locator(
  21 |       ".dynamic-field.dynamic-field-mode-edit.dynamic-field-name-email_address > div > .d-flex > .flex-grow-1 > .form-control",
  22 |     );
  23 |     this.primary = page.locator(".checkmark").first();
  24 |     this.optOut = page.locator(
  25 |       ".dynamic-field.dynamic-field-mode-edit.dynamic-field-name-opt_out > div > .d-flex > .flex-grow-1 > .pb-4 > .checkbox-container > .checkmark",
  26 |     );
  27 |     this.invalid = page.locator(
  28 |       ".dynamic-field.dynamic-field-mode-edit.dynamic-field-name-invalid_email > div > .d-flex > .flex-grow-1 > .pb-4 > .checkbox-container > .checkmark",
  29 |     );
  30 |     this.emailRemove = page.locator("button").nth(5);
  31 |     this.emailAdd = page.locator(".line-item-buttons > scrm-button > .btn");
  32 | 
  33 |     this.primaryAddressstreet = page
  34 |       .locator("scrm-group-field")
  35 |       .filter({ hasText: "Primary Address Street" })
  36 |       .locator("textarea");
  37 |     this.primaryAddresspostalCode = page.locator(
  38 |       ".dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_postalcode > div > .d-flex > .flex-grow-1 > .form-control",
  39 |     );
  40 |     this.primaryAddresscity = page.locator(
  41 |       ".dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_city > div > .d-flex > .flex-grow-1 > .form-control",
  42 |     );
  43 |     this.primaryAddressstate = page.locator(
  44 |       ".dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_state > div > .d-flex > .flex-grow-1 > .form-control",
  45 |     );
  46 |     this.primaryAddresscountry = page.locator(
  47 |       ".dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_country > div > .d-flex > .flex-grow-1 > .form-control",
  48 |     );
  49 | 
  50 |     this.alternateAddressstreet = page
  51 |       .locator("scrm-group-field")
  52 |       .filter({ hasText: "Alternate Address Street" })
  53 |       .locator("textarea");
  54 |     this.alternateAddresspostalCode = page.locator(
  55 |       ".dynamic-field.dynamic-field-mode-edit.dynamic-field-name-alt_address_postalcode > div > .d-flex > .flex-grow-1 > .form-control",
  56 |     );
  57 |     this.alternateAddresscity = page.locator(
  58 |       ".dynamic-field.dynamic-field-mode-edit.dynamic-field-name-alt_address_city > div > .d-flex > .flex-grow-1 > .form-control",
  59 |     );
  60 |     this.alternateAddressstate = page.locator(
  61 |       ".dynamic-field.dynamic-field-mode-edit.dynamic-field-name-alt_address_state > div > .d-flex > .flex-grow-1 > .form-control",
  62 |     );
  63 |     this.alternateAddresscountry = page.locator(
  64 |       ".dynamic-field.dynamic-field-mode-edit.dynamic-field-name-alt_address_country > div > .d-flex > .flex-grow-1 > .form-control",
  65 |     );
  66 | 
  67 |     this.description = page.locator("textarea").nth(2);
  68 | 
  69 |     this.save = page.getByRole("button", { name: "Save" });
  70 |     this.cancel = page.getByRole("button", { name: "Cancel" });
  71 | 
  72 |     this.visibleContact = page.getByRole("tab", { name: "OVERVIEW" });
  73 |   }
  74 | 
  75 |   async addContact() {
> 76 |     await this.contact.hover();
     |                        ^ Error: locator.hover: Test timeout of 30000ms exceeded.
  77 |     await this.createContact.click();
  78 |   }
  79 | 
  80 |   async enterLastName(lastName) {
  81 |     await this.lastName.fill(lastName);
  82 |     await this.save.click();
  83 |   }
  84 | 
  85 |   async visibleContact() {
  86 |     await expect(this.visibleContact).toBeVisible();
  87 |   }
  88 | }
  89 | 
```