export class OpportunitiesPage {
  constructor(page) {
    this.page = page;

    this.opportunitiesHoverOver = page
      .locator("a")
      .filter({ hasText: /^Opportunities$/ });
    this.loadingSpinner = page.locator("app-full-page-spinner");

    this.createOpportunityDropdown = page.getByRole("link", {
      name: "Create Opportunity",
    });

    this.viewOpportunitiesDropdown = page.getByRole("link", {
      name: "View Opportunities",
    });

    this.importOpportunityDropdown = page.getByRole("link", {
      name: "Import Opportunities",
    });

    this.pageTitle = page.getByText("Create", { exact: true });

    this.opportunityNameInput = page.locator(
      "scrm-field.field-name-name input",
    );

    this.accountNameInput = page
      .getByRole("combobox", { name: "Select an item" })
      .first();

    this.salesStageInput = page
      .locator("scrm-dropdownenum-edit")
      .filter({ hasText: "Prospecting Qualification" })
      .getByRole("combobox");

    this.expectedCloseDateInput = page.getByRole("textbox", {
      name: "yyyy-mm-dd",
    });
    this.calendarIcon = page.locator("scrm-date-edit").getByRole("button");

    this.opportunityAmountInput = page
      .locator("scrm-currency-edit")
      .getByRole("textbox");

    this.mandatoryField = {
      "Opportunity Name": page.locator(".label-container", {
        hasText: "OPPORTUNITY NAME",
      }),

      "Account Name": page.locator(".label-container", {
        hasText: "ACCOUNT NAME",
      }),

      "Sales Stage": page.locator(".label-container", {
        hasText: "SALES STAGE",
      }),

      "Expected Close Date": page.locator(".label-container", {
        hasText: "EXPECTED CLOSE DATE",
      }),
    };

    this.saveButton = page.getByRole("button", {
      name: "Save",
    });

    this.opportunityTitle = (opportunityName) =>
      this.page.locator("span.dynamic-label").filter({
        hasText: opportunityName,
      });

    this.ValidationMessage = page.getByText("There are validation errors,");
    this.invalidFormatMessage = page.getByText("Invalid currency format.");
    this.accountDropdownPanel = page.locator(".p-dropdown-panel");

    this.accountSearchBox = this.accountDropdownPanel.locator(
      "input.p-dropdown-filter",
    );
  }

  async hoverOpportunitiesMenu() {
    await this.opportunitiesHoverOver.hover();
  }

  async isDropdownMenuVisible() {
    return (
      (await this.createOpportunityDropdown.isVisible()) &&
      (await this.viewOpportunitiesDropdown.isVisible()) &&
      (await this.importOpportunityDropdown.isVisible())
    );
  }

 async clickCreateOpportunity() {
  await this.loadingSpinner.waitFor({ state: "hidden", timeout: 20000 });
  await this.opportunitiesHoverOver.hover();
  await this.createOpportunityDropdown.click();
}

  async clickViewOpportunities() {
    await this.viewOpportunitiesDropdown.click();
  }

  async clickImportOpportunities() {
    await this.importOpportunityDropdown.click();
  }

  async getMandatoryFieldLabel(fieldName) {
    return this.mandatoryField[fieldName];
  }
  async fillAllMandatoryFieldsAndSave({
    opportunityName,
    accountName,
    opportunityAmount,
    salesStage,
    closeDate,
  }) {
    if (opportunityName) {
      await this.opportunityNameInput.fill(opportunityName);
    }

    if (accountName) {
      await this.accountNameInput.click();
      const dropdownPanel = this.page.locator(".p-dropdown-panel");
      await dropdownPanel.waitFor({ state: "visible" });
      const searchBox = dropdownPanel.locator("input.p-dropdown-filter");
      await searchBox.click();
      await searchBox.pressSequentially(accountName, { delay: 100 });
      const accountOption = dropdownPanel.getByRole("option", {
        name: accountName,
        exact: true,
      });
      await accountOption.waitFor({ state: "visible" });
      await accountOption.click();
    }

    if (opportunityAmount) {
      await this.opportunityAmountInput.fill(opportunityAmount);
    }

    if (salesStage) {
      await this.salesStageInput.selectOption(salesStage);
    }

    if (closeDate) {
      await this.expectedCloseDateInput.fill(closeDate);
    }

    await this.saveButton.click();
  }

  async selectDateFromCalendar(closeDate) {
    await this.calendarIcon.click();
    await this.expectedCloseDateInput.fill(closeDate);
  }
  async searchAccount(partialAccountName) {
    await this.accountNameInput.click();
    await this.accountSearchBox.fill(partialAccountName);
  }

  async getMatchingAccounts() {
    return this.accountDropdownPanel.getByRole("option");
  }
}
