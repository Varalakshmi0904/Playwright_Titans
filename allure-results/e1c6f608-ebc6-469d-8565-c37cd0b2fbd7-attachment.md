# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\opportunities.feature.spec.js >> Opportunities Module >> Verify Create Opportunity navigation
- Location: .features-gen\features\opportunities.feature.spec.js:15:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.hover: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('a').filter({ hasText: /^Opportunities$/ })

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
  1   | export class OpportunitiesPage {
  2   |   constructor(page) {
  3   |     this.page = page;
  4   | 
  5   |     this.opportunitiesHoverOver = page
  6   |       .locator("a")
  7   |       .filter({ hasText: /^Opportunities$/ });
  8   |     this.loadingSpinner = page.locator("app-full-page-spinner");
  9   | 
  10  |     this.createOpportunityDropdown = page.getByRole("link", {
  11  |       name: "Create Opportunity",
  12  |     });
  13  | 
  14  |     this.viewOpportunitiesDropdown = page.getByRole("link", {
  15  |       name: "View Opportunities",
  16  |     });
  17  | 
  18  |     this.importOpportunityDropdown = page.getByRole("link", {
  19  |       name: "Import Opportunities",
  20  |     });
  21  | 
  22  |     this.pageTitle = page.getByText("Create", { exact: true });
  23  | 
  24  |     this.opportunityNameInput = page.locator(
  25  |       "scrm-field.field-name-name input",
  26  |     );
  27  | 
  28  |     this.accountNameInput = page
  29  |       .getByRole("combobox", { name: "Select an item" })
  30  |       .first();
  31  | 
  32  |     this.salesStageInput = page
  33  |       .locator("scrm-dropdownenum-edit")
  34  |       .filter({ hasText: "Prospecting Qualification" })
  35  |       .getByRole("combobox");
  36  | 
  37  |     this.expectedCloseDateInput = page.getByRole("textbox", {
  38  |       name: "yyyy-mm-dd",
  39  |     });
  40  |     this.calendarIcon = page.locator("scrm-date-edit").getByRole("button");
  41  | 
  42  |     this.opportunityAmountInput = page
  43  |       .locator("scrm-currency-edit")
  44  |       .getByRole("textbox");
  45  | 
  46  |     this.mandatoryField = {
  47  |       "Opportunity Name": page.locator(".label-container", {
  48  |         hasText: "OPPORTUNITY NAME",
  49  |       }),
  50  | 
  51  |       "Account Name": page.locator(".label-container", {
  52  |         hasText: "ACCOUNT NAME",
  53  |       }),
  54  | 
  55  |       "Sales Stage": page.locator(".label-container", {
  56  |         hasText: "SALES STAGE",
  57  |       }),
  58  | 
  59  |       "Expected Close Date": page.locator(".label-container", {
  60  |         hasText: "EXPECTED CLOSE DATE",
  61  |       }),
  62  |     };
  63  | 
  64  |     this.saveButton = page.getByRole("button", {
  65  |       name: "Save",
  66  |     });
  67  | 
  68  |     this.opportunityTitle = (opportunityName) =>
  69  |       this.page.locator("span.dynamic-label").filter({
  70  |         hasText: opportunityName,
  71  |       });
  72  | 
  73  |     this.ValidationMessage = page.getByText("There are validation errors,");
  74  |     this.invalidFormatMessage = page.getByText("Invalid currency format.");
  75  |     this.accountDropdownPanel = page.locator(".p-dropdown-panel");
  76  | 
  77  |     this.accountSearchBox = this.accountDropdownPanel.locator(
  78  |       "input.p-dropdown-filter",
  79  |     );
  80  |   }
  81  | 
  82  |   async hoverOpportunitiesMenu() {
  83  |     await this.opportunitiesHoverOver.hover();
  84  |   }
  85  | 
  86  |   async isDropdownMenuVisible() {
  87  |     return (
  88  |       (await this.createOpportunityDropdown.isVisible()) &&
  89  |       (await this.viewOpportunitiesDropdown.isVisible()) &&
  90  |       (await this.importOpportunityDropdown.isVisible())
  91  |     );
  92  |   }
  93  | 
  94  |  async clickCreateOpportunity() {
  95  |   await this.loadingSpinner.waitFor({ state: "hidden", timeout: 20000 });
> 96  |   await this.opportunitiesHoverOver.hover();
      |                                     ^ Error: locator.hover: Test timeout of 30000ms exceeded.
  97  |   await this.createOpportunityDropdown.click();
  98  | }
  99  | 
  100 |   async clickViewOpportunities() {
  101 |     await this.viewOpportunitiesDropdown.click();
  102 |   }
  103 | 
  104 |   async clickImportOpportunities() {
  105 |     await this.importOpportunityDropdown.click();
  106 |   }
  107 | 
  108 |   async getMandatoryFieldLabel(fieldName) {
  109 |     return this.mandatoryField[fieldName];
  110 |   }
  111 |   async fillAllMandatoryFieldsAndSave({
  112 |     opportunityName,
  113 |     accountName,
  114 |     opportunityAmount,
  115 |     salesStage,
  116 |     closeDate,
  117 |   }) {
  118 |     if (opportunityName) {
  119 |       await this.opportunityNameInput.fill(opportunityName);
  120 |     }
  121 | 
  122 |     if (accountName) {
  123 |       await this.accountNameInput.click();
  124 |       const dropdownPanel = this.page.locator(".p-dropdown-panel");
  125 |       await dropdownPanel.waitFor({ state: "visible" });
  126 |       const searchBox = dropdownPanel.locator("input.p-dropdown-filter");
  127 |       await searchBox.click();
  128 |       await searchBox.pressSequentially(accountName, { delay: 100 });
  129 |       const accountOption = dropdownPanel.getByRole("option", {
  130 |         name: accountName,
  131 |         exact: true,
  132 |       });
  133 |       await accountOption.waitFor({ state: "visible" });
  134 |       await accountOption.click();
  135 |     }
  136 | 
  137 |     if (opportunityAmount) {
  138 |       await this.opportunityAmountInput.fill(opportunityAmount);
  139 |     }
  140 | 
  141 |     if (salesStage) {
  142 |       await this.salesStageInput.selectOption(salesStage);
  143 |     }
  144 | 
  145 |     if (closeDate) {
  146 |       await this.expectedCloseDateInput.fill(closeDate);
  147 |     }
  148 | 
  149 |     await this.saveButton.click();
  150 |   }
  151 | 
  152 |   async selectDateFromCalendar(closeDate) {
  153 |     await this.calendarIcon.click();
  154 |     await this.expectedCloseDateInput.fill(closeDate);
  155 |   }
  156 |   async searchAccount(partialAccountName) {
  157 |     await this.accountNameInput.click();
  158 |     await this.accountSearchBox.fill(partialAccountName);
  159 |   }
  160 | 
  161 |   async getMatchingAccounts() {
  162 |     return this.accountDropdownPanel.getByRole("option");
  163 |   }
  164 | }
  165 | 
```