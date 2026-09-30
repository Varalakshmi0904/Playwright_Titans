export class InvoicesPage {
    constructor(page) {
        this.page = page;
        this.moredropdown = page.getByRole('link', { name: 'Invoices' });
        this.invoicesdropdown = page.getByRole('link', { name: 'Create Invoice' });
        this.overview = page.locator('iframe').contentFrame().getByRole('button', { name: '− OVERVIEW' });
        this.title = page.locator('iframe').contentFrame().locator('#name');
        this.invoicenumber = page.locator('iframe').contentFrame().getByText('Invoice Number:*');
        this.quotenumber = page.locator('iframe').contentFrame().locator('#quote_number');
        this.quotedate = page.locator('iframe').contentFrame().locator('#quote_date');
        this.duedate = page.locator('iframe').contentFrame().locator('#due_date');
        this.invoivedate = page.locator('iframe').contentFrame().locator('#invoice_date');
        this.assignedto = page.locator('iframe').contentFrame().locator('#assigned_user_name');
        this.arrow = page.locator('iframe').contentFrame().getByRole('button', { name: 'Select User' });
        this.clearuser = page.locator('iframe').contentFrame().getByRole('button', { name: 'Clear User' })
        this.statusdropdown = page.locator('iframe').contentFrame().locator('#status');
        this.description = page.locator('iframe').contentFrame().getByText('Description:');
        this.invoiceto = page.locator('iframe').contentFrame().getByText('Invoice To');
        this.account = page.locator('iframe').contentFrame().locator('#billing_account');
        this.accountselection = page.locator('iframe').contentFrame().getByRole('button', { name: 'Select Account' });
        this.clearbutton = page.locator('iframe').contentFrame().getByRole('button', { name: 'Clear Account' });
        this.contact = page.locator('iframe').contentFrame().locator('#billing_contact');
        this.contactselection = page.locator('iframe').contentFrame().getByRole('button', { name: 'Select Contact' });
        this.clearbutton = page.locator('iframe').contentFrame().getByRole('button', { name: 'Clear Contact' });
        this.billingaddress = page.locator('iframe').contentFrame().getByRole('group', { name: 'Billing Address' }).getByLabel('Street:');
        this.cityname = page.locator('iframe').contentFrame().getByRole('cell').nth(5);
        this.stateregion = page.locator('iframe').contentFrame().getByRole('group', { name: 'Billing Address' }).getByLabel('State/Region:');
        this.postalcode = page.locator('iframe').contentFrame().getByRole('group', { name: 'Billing Address' }).getByLabel('Postal Code:');
        this.country = page.locator('iframe').contentFrame().getByRole('group', { name: 'Billing Address' }).getByLabel('Country:');
        this.shippingaddress = page.locator('iframe').contentFrame().getByRole('group', { name: 'Shipping Address' }).getByLabel('Street:');
        this.cityname = page.locator('iframe').contentFrame().getByRole('group', { name: 'Shipping Address' }).getByLabel('City:');
        this.stateregion = page.locator('iframe').contentFrame().getByRole('group', { name: 'Shipping Address' }).getByLabel('State/Region:');
        this.postalcode = page.locator('iframe').contentFrame().getByRole('group', { name: 'Shipping Address' }).getByLabel('Postal Code:');
        this.country = page.locator('iframe').contentFrame().getByRole('group', { name: 'Shipping Address' }).getByLabel('Country:');
        this.copyaddressfromleft = page.locator('iframe').contentFrame().locator('#shipping_checkbox');

        //Line items

        this.currency = page.locator('iframe').contentFrame().locator('#currency_id_select');
        this.addgroupbutton = page.locator('iframe').contentFrame().getByRole('button', { name: 'Add Group' });
        this.total = page.locator('iframe').contentFrame().locator('#total_amt');
        this.discount = page.locator('iframe').contentFrame().locator('#total_amt');
        this.subtotal = page.locator('iframe').contentFrame().locator('#subtotal_amount');
        this.shipping = page.locator('iframe').contentFrame().locator('#shipping_amount');
        this.shippingtax = page.locator('iframe').contentFrame().locator('#shipping_tax_amt');
        this.shippingtaxdropdown = page.locator('iframe').contentFrame().locator('#shipping_tax');
        this.tax = page.locator('iframe').contentFrame().locator('#tax_amount');
        this.grandtotal = page.locator('iframe').contentFrame().locator('#total_amount');

        //page save/cancle

        this.savebutton = page.locator('iframe').contentFrame().getByRole('button', { name: 'Save' });
        this.cancelbutton = page.locator('iframe').contentFrame().getByRole('button', { name: 'Cancel' });


        //view Invoices

        this.checkbox = page.locator('scrm-table-header').getByLabel('Select Action Menu');
        this.columns = page.locator('scrm-table-header').getByRole('button', { name: 'Columns' });
        this.number = page.locator('.btn.btn-sm.p-0').first();
        this.title = page.locator('.cdk-header-cell.cdk-column-name > scrm-sort-button > .btn');
        this.status = page.locator('.cdk-header-cell.cdk-column-status > scrm-sort-button > .btn');
        this.contact = page.locator('.cdk-header-cell.cdk-column-billing_contact > scrm-sort-button > .btn');
        this.account = page.locator('.cdk-header-cell.cdk-column-billing_account > scrm-sort-button > .btn');
        this.grandtotal = page.locator('.cdk-header-cell.cdk-column-billing_account > scrm-sort-button > .btn');
        this.duedate = page.locator('.cdk-header-cell.cdk-column-due_date > scrm-sort-button > .btn');


    }

    // MENU METHODS 
    async hoverInvoicesMenu() 
    {
     await this.invoicesMenu.hover();
     } 
    async clickCreateInvoice() 
{
    await this.invoicesMenu.hover(); 
    await this.createInvoice.click(); 
}
// INVOICE METHODS // 
async enterInvoiceTitle(title) { 
await this.invoiceTitle.fill(title);
}
async enterQuoteNumber(quoteNumber) {
await this.quoteNumber.fill(quoteNumber);
}
async enterQuoteDate(date) { 
await this.quoteDate.fill(date); 
}
async enterDueDate(date) {
await this.dueDateInput.fill(date);
}
async enterInvoiceDate(date) {
await this.invoiceDate.fill(date); } 
// ASSIGNED USER //
async selectUser() { 
await this.selectUserButton.click(); 
}
async clearUser() {
await this.clearUserButton.click(); 
}
// STATUS //
async selectStatus(status) { 
await this.statusDropdown.selectOption(status); 
}
// ACCOUNT //
async selectAccount() {
await this.selectAccountButton.click();
 }
 async clearAccount() {
await this.clearAccountButton.click(); 
}
 // CONTACT //
 async selectContact()
 {
 await this.selectContactButton.click(); 
}
async clearContact() { 
await this.clearContactButton.click();
} 
// BILLING ADDRESS //
async enterBillingAddress( street, city, state, postalCode, country ) { 
await this.billingStreet.fill(street); 
await this.billingCity.fill(city);
await this.billingState.fill(state);
await this.billingPostalCode.fill(postalCode); 
await this.billingCountry.fill(country);
}

}