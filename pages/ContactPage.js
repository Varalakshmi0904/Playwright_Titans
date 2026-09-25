export class ContactPage{


    constructor(page) {
        this.page = page;
        this.contact=page.locator('a').filter({ hasText: /^Contacts$/ });
        this.createContact=page.getByRole('link', { name: 'Create Contact', exact: true });

        this.firstName=page.getByRole('textbox').nth(1);
        this.lastName=page.getByRole('textbox').nth(2);
        this.officePhone=page.getByRole('textbox').nth(3);
        this.mobilePhone=page.getByRole('textbox').nth(4);
        this.jobTitle=page.getByRole('textbox').nth(5);
        this.department=page.locator('.form-control.form-control-sm.ng-pristine.ng-valid.ng-touched');
        this.accountName=page.getByRole('combobox', { name: 'Select an item' });
        
        this.email=page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-email_address > div > .d-flex > .flex-grow-1 > .form-control');
        this.primary=page.locator('.checkmark').first();
        this.optOut=page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-opt_out > div > .d-flex > .flex-grow-1 > .pb-4 > .checkbox-container > .checkmark');
        this.invalid=page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-invalid_email > div > .d-flex > .flex-grow-1 > .pb-4 > .checkbox-container > .checkmark');
        this.emailRemove=page.locator('button').nth(5);
        this.emailAdd=page.locator('.line-item-buttons > scrm-button > .btn');
        
        this.primaryAddressstreet=page.locator('scrm-group-field').filter({ hasText: 'Primary Address Street' }).locator('textarea');
        this.primaryAddresspostalCode=page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_postalcode > div > .d-flex > .flex-grow-1 > .form-control');
        this.primaryAddresscity=page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_city > div > .d-flex > .flex-grow-1 > .form-control');
        this.primaryAddressstate=page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_state > div > .d-flex > .flex-grow-1 > .form-control');
        this.primaryAddresscountry=page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-primary_address_country > div > .d-flex > .flex-grow-1 > .form-control');
        
        this.alternateAddressstreet=page.locator('scrm-group-field').filter({ hasText: 'Alternate Address Street' }).locator('textarea');
        this.alternateAddresspostalCode=page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-alt_address_postalcode > div > .d-flex > .flex-grow-1 > .form-control');
        this.alternateAddresscity=page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-alt_address_city > div > .d-flex > .flex-grow-1 > .form-control');
        this.alternateAddressstate=page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-alt_address_state > div > .d-flex > .flex-grow-1 > .form-control');
        this.alternateAddresscountry=page.locator('.dynamic-field.dynamic-field-mode-edit.dynamic-field-name-alt_address_country > div > .d-flex > .flex-grow-1 > .form-control');

        this.description=page.locator('textarea').nth(2);

        this.save=page.getByRole('button', { name: 'Save' });
        this.cancel=page.getByRole('button', { name: 'Cancel' });

        this.visibleContact=page.getByRole('tab', { name: 'OVERVIEW' });
}

 async addContact() {
    await this.contact.hover();
    await this.createContact.click();
   
 }
 
 async enterLastName(lastName) {
     
    await this.lastName.fill(lastName);
        await this.save.click();
 }

 async visibleContact() {
     
    await expect(this.visibleContact).toBeVisible();
 }

}