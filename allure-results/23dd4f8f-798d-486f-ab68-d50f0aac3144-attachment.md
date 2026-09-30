# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/opportunities.feature.spec.js >> Opportunities Module >> Verify mandatory field indicators are displayed >> Example #3
- Location: .features-gen/features/opportunities.feature.spec.js:34:9

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
    - navigation [ref=e25]:
      - generic [ref=e26]:
        - list [ref=e29]:
          - listitem [ref=e30]:
            - link [ref=e31] [cursor=pointer]:
              - /url: "#/home"
        - list
      - generic [ref=e38]:
        - list [ref=e40]:
          - listitem [ref=e41]:
            - generic "Quick Create" [ref=e42] [cursor=pointer]
        - list [ref=e49]:
          - listitem [ref=e50]:
            - generic "Recently Viewed" [ref=e51] [cursor=pointer]
        - generic [ref=e61]:
          - textbox "Search" [ref=e62]:
            - /placeholder: Search...
          - button "Search" [ref=e64] [cursor=pointer]
      - list [ref=e74]:
        - listitem [ref=e75]
    - generic [ref=e93]:
      - textbox "Username" [ref=e95]: will
      - generic [ref=e96]:
        - generic:
          - generic:
            - img [aria-hidden]:
              - generic: "***"
        - textbox "Password" [ref=e97]: will
      - button "Log In" [disabled] [ref=e98]
  - generic [ref=e100]:
    - generic [ref=e101]: © Supercharged by SuiteCRM © Powered By SugarCRM
    - generic [ref=e102]: Back To Top
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
  8   | 
  9   |     this.createOpportunityDropdown = page.getByRole("link", {
  10  |       name: "Create Opportunity",
  11  |     });
  12  | 
  13  |     this.viewOpportunitiesDropdown = page.getByRole("link", {
  14  |       name: "View Opportunities",
  15  |     });
  16  | 
  17  |     this.importOpportunityDropdown = page.getByRole("link", {
  18  |       name: "Import Opportunities",
  19  |     });
  20  | 
  21  |     this.pageTitle = page.getByText("Create", { exact: true });
  22  | 
  23  |     this.opportunityNameInput = page.locator(
  24  |       "scrm-field.field-name-name input",
  25  |     );
  26  | 
  27  |     this.accountNameInput = page
  28  |       .getByRole("combobox", { name: "Select an item" })
  29  |       .first();
  30  | 
  31  |     this.salesStageInput = page
  32  |       .locator("scrm-dropdownenum-edit")
  33  |       .filter({ hasText: "Prospecting Qualification" })
  34  |       .getByRole("combobox");
  35  | 
  36  |     this.expectedCloseDateInput = page.getByRole("textbox", {
  37  |       name: "yyyy-mm-dd",
  38  |     });
  39  |     this.calendarIcon = page.locator("scrm-date-edit").getByRole("button");
  40  | 
  41  |     this.opportunityAmountInput = page
  42  |       .locator("scrm-currency-edit")
  43  |       .getByRole("textbox");
  44  | 
  45  |     this.mandatoryField = {
  46  |       "Opportunity Name": page.locator(".label-container", {
  47  |         hasText: "OPPORTUNITY NAME",
  48  |       }),
  49  | 
  50  |       "Account Name": page.locator(".label-container", {
  51  |         hasText: "ACCOUNT NAME",
  52  |       }),
  53  | 
  54  |       "Sales Stage": page.locator(".label-container", {
  55  |         hasText: "SALES STAGE",
  56  |       }),
  57  | 
  58  |       "Expected Close Date": page.locator(".label-container", {
  59  |         hasText: "EXPECTED CLOSE DATE",
  60  |       }),
  61  |     };
  62  | 
  63  |     this.saveButton = page.getByRole("button", {
  64  |       name: "Save",
  65  |     });
  66  | 
  67  |     this.opportunityTitle = (opportunityName) =>
  68  |       this.page.locator("span.dynamic-label").filter({
  69  |         hasText: opportunityName,
  70  |       });
  71  | 
  72  |     this.ValidationMessage = page.getByText("There are validation errors,");
  73  |     this.invalidFormatMessage = page.getByText("Invalid currency format.");
  74  |     this.accountDropdownPanel = page.locator(".p-dropdown-panel");
  75  | 
  76  |     this.accountSearchBox = this.accountDropdownPanel.locator(
  77  |       "input.p-dropdown-filter",
  78  |     );
  79  |   }
  80  | 
  81  |   async hoverOpportunitiesMenu() {
  82  |     await this.opportunitiesHoverOver.hover();
  83  |   }
  84  | 
  85  |   async isDropdownMenuVisible() {
  86  |     return (
  87  |       (await this.createOpportunityDropdown.isVisible()) &&
  88  |       (await this.viewOpportunitiesDropdown.isVisible()) &&
  89  |       (await this.importOpportunityDropdown.isVisible())
  90  |     );
  91  |   }
  92  | 
  93  |   async clickCreateOpportunity() {
> 94  |     await this.opportunitiesHoverOver.hover();
      |                                       ^ Error: locator.hover: Test timeout of 30000ms exceeded.
  95  |     await this.createOpportunityDropdown.click();
  96  |   }
  97  | 
  98  |   async clickViewOpportunities() {
  99  |     await this.viewOpportunitiesDropdown.click();
  100 |   }
  101 | 
  102 |   async clickImportOpportunities() {
  103 |     await this.importOpportunityDropdown.click();
  104 |   }
  105 | 
  106 |   async getMandatoryFieldLabel(fieldName) {
  107 |     return this.mandatoryField[fieldName];
  108 |   }
  109 | async fillAllMandatoryFieldsAndSave({
  110 |     opportunityName,
  111 |     accountName,
  112 |     opportunityAmount,
  113 |     salesStage,
  114 |     closeDate,
  115 |   }) {
  116 |     if (opportunityName) {
  117 |       await this.opportunityNameInput.fill(opportunityName);
  118 |     }
  119 | 
  120 |     if (accountName) {
  121 |       await this.accountNameInput.click();
  122 |       const dropdownPanel = this.page.locator(".p-dropdown-panel");
  123 |       await dropdownPanel.waitFor({ state: "visible" });
  124 |       const searchBox = dropdownPanel.locator("input.p-dropdown-filter");
  125 |       await searchBox.click();
  126 |       await searchBox.pressSequentially(accountName, { delay: 100 });
  127 |       const accountOption = dropdownPanel.getByRole("option", {
  128 |         name: accountName,
  129 |         exact: true,
  130 |       });
  131 |       await accountOption.waitFor({ state: "visible" });
  132 |       await accountOption.click();
  133 |     }
  134 | 
  135 |     if (opportunityAmount) {
  136 |       await this.opportunityAmountInput.fill(opportunityAmount);
  137 |     }
  138 | 
  139 |     if (salesStage) {
  140 |       await this.salesStageInput.selectOption(salesStage);
  141 |     }
  142 | 
  143 |     if (closeDate) {
  144 |       await this.expectedCloseDateInput.fill(closeDate);
  145 |     }
  146 | 
  147 |     await this.saveButton.click();
  148 |   }
  149 | 
  150 |   async selectDateFromCalendar(closeDate) {
  151 |     await this.calendarIcon.click();
  152 |     await this.expectedCloseDateInput.fill(closeDate);
  153 |   }
  154 | async searchAccount(partialAccountName) {
  155 |   await this.accountNameInput.click();
  156 |   await this.accountSearchBox.fill(partialAccountName);
  157 | }
  158 | 
  159 |   async getMatchingAccounts() {
  160 |     return this.accountDropdownPanel.getByRole("option");
  161 |   }
  162 | 
  163 | 
  164 |   
  165 | }
  166 | 
```