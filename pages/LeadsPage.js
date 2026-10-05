class LeadsPage {
    constructor(page) {
      this.page = page;
  
      this.leadsMenu = page.locator("span").filter({ hasText: "Leads" }).first();
      this.createLead = page.locator("//span[normalize-space()='Create Lead']");
      this.title = page.locator("select").first();
      this.firstName = page.getByRole("textbox").nth(1);
      this.lastName = page.getByRole("textbox").nth(2);
      this.jobTitle = page.getByRole("textbox").nth(3);
      this.mobile = page.getByRole("textbox").nth(4);
      this.department = page.getByRole("textbox").nth(5);

      this.officePhone = page.getByRole("textbox").nth(6);
      this.accountName = page.getByRole("textbox").nth(7);
      this.website = page.getByRole("textbox").nth(8);
      this.primaryAddressStreet = page.getByRole("textbox").nth(9);
      this.primaryAddressPostalcode = page.getByRole("textbox").nth(10);
  
      this.emailAddress = page.locator('input[type="text"]').nth(17);
      this.primaryEmail = page.getByLabel("Primary");
      this.optOut = page.getByLabel("Opt Out");
      this.invalidEmail = page.getByLabel("Invalid");
  
      this.primaryAddressCity = page.getByRole("textbox").nth(11);
      this.primaryAddressState = page.getByRole("textbox").nth(12);
      this.primaryAddressCountry = page.getByRole("textbox").nth(13);
  
      this.altAddressStreet = page.getByRole("textbox").nth(14);
      this.altAddressPostalcode = page.getByRole("textbox").nth(15);
      this.altAddressCity = page.getByLabel("Alt Address City");
      this.altAddressState = page.getByLabel("Alt Address State");
      this.altAddressCountry = page.locator('input[type="text"]').nth(16);
      this.description = page.getByLabel("Description");
      this.saveButton = page.getByRole("button", { name: "Save", exact: true });
      this.cancelButton = page.getByRole("button", { name: "Cancel" });
  
      this.viewLeads = page.locator('span:has-text("View Leads")');
      this.leadsList = page.locator("table");
      //this.leadRow = (lastName) =>page.getByText(lastName, { exact: true }).first();
      this.editButton = page.locator('scrm-label').filter({ hasText: 'Edit' });
      this.deleteButton = page.getByRole("button", { name: "Delete", exact: true });
      this.confirmDeleteButton = page.getByRole("button", { name: "Yes" });
      this.leadCheckbox = page.locator("tr") .filter({ hasText: "Jennie Madison" }).locator("input[type='checkbox']");
      this.bulkAction = page.locator("scrm-table-header").getByRole("button", { name: "Bulk Action" });
      this.deleteOption = page.locator("a:visible").filter({ hasText: "Delete" }).first();
      this.proceedButton = page.getByRole("button", { name: "Proceed", exact: true });
    }
  
    async hoverOverLeadsMenu() {
      await this.leadsMenu.hover();
    }
  
    async openCreateLead() {
      await this.createLead.click();
    }
  
    async selectTitle(title) {
      await this.title.selectOption({ label: title });
    }
  
    async enterFName(firstName) {
      await this.firstName.fill(firstName);
    }
    async enterLName(lastName) {
      await this.lastName.fill(lastName);
    }
  
    async enterJobDetails(jobTitle, department, accountName) {
      await this.jobTitle.fill(jobTitle);
      await this.department.fill(department);
      await this.accountName.fill(accountName);
    }
  
    async enterContactDetails(mobile, officePhone, website) {
      await this.mobile.fill(String(mobile));
      await this.officePhone.fill(String(officePhone));
      await this.website.fill(website);
    }
  
    async enterEmail(email) {
      await this.emailAddress.fill(email);
    }
  
    async selectPrimaryEmail() {
      await this.primaryEmail.check();
    }
  
    async selectOptOut() {
      await this.optOut.check();
    }
  
    async markEmailInvalid() {
      await this.invalidEmail.check();
    }
  
    async enterPrimaryAddress(street, postalcode, city, state, country) {
      await this.primaryAddressStreet.fill(street);
      await this.primaryAddressPostalcode.fill(String(postalcode));
      await this.primaryAddressCity.fill(city);
      await this.primaryAddressState.fill(state);
      await this.primaryAddressCountry.fill(country);
    }
  
    async enterAlternateAddress(street, postalcode, city, state, country) {
      await this.altAddressStreet.fill(street);
      await this.altAddressPostalcode.fill(postalcode);
      await this.altAddressCity.fill(city);
      await this.altAddressState.fill(state);
      await this.altAddressCountry.fill(country);
    }
  
    async enterDescription(description) {
      await this.description.fill(description);
    }
  
    async saveLead() {
      await this.saveButton.click();
    }
  
    async cancelLead() {
      await this.cancelButton.click();
    }
  
    async openViewLeads() {
      await this.viewLeads.click();
    }
  
    async viewLead(lastName) {
      await this.leadRow(lastName).click();
    }
    async editViewButton(){
      await this.editButton.click();
    }
    async deleteLead() {
      await this.deleteButton.click();
      await this.confirmDeleteButton.click();
    }
    async selectLead(leadName) {
      const leadRow = this.page
        .locator("tr")
        .filter({ hasText: leadName })
        .first();
    
      await leadRow.locator("input[type='checkbox']").check();
    }

    async deleteSelectedLead() {
      await this.bulkAction.click();
      await this.deleteOption.click();
    
      await this.proceedButton.click();
    }
  }
  
  module.exports = { LeadsPage };
  