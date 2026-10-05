export class InvoicesPage {
    constructor(page) {
        this.page = page;
        const frame = page.locator('iframe').contentFrame();

        // ---------- Menu ----------
        //this.moreMenu = page.getByText('More', { exact: true });
        this.invoicesMenu = page.getByRole('link', { name: 'Invoices', exact: true });
        //this.createInvoiceLink = page.getByRole('link', { name: 'Create Invoice' });

        // ---------- Create Invoice form (inside iframe) ----------
        this.overview = frame.getByRole('button', { name: '− OVERVIEW' });
        this.invoiceTitle = frame.locator('#name');
        this.invoiceNumber = frame.locator('#number');
        this.quoteNumber = frame.locator('#quote_number');
        this.quoteDate = frame.locator('#quote_date');
        this.dueDate = frame.locator('#due_date');
        this.invoiceDate = frame.locator('#invoice_date');
        this.assignedTo = frame.locator('#assigned_user_name');
        this.selectUserButton = frame.getByRole('button', { name: 'Select User' });
        this.clearUserButton = frame.getByRole('button', { name: 'Clear User' });
        this.statusDropdown = frame.locator('#status');
        this.description = frame.locator('#description');

        // ---------- Invoice To ----------
        this.account = frame.locator('#billing_account');
        this.selectAccountButton = frame.getByRole('button', { name: 'Select Account' });
        this.clearAccountButton = frame.getByRole('button', { name: 'Clear Account' });
        this.contact = frame.locator('#billing_contact');
        this.selectContactButton = frame.getByRole('button', { name: 'Select Contact' });
        this.clearContactButton = frame.getByRole('button', { name: 'Clear Contact' });

        // ---------- Billing Address ----------
        this.billingStreet = frame.getByRole('group', { name: 'Billing Address' }).getByLabel('Street:');
        this.billingCity = frame.getByRole('group', { name: 'Billing Address' }).getByLabel('City:');
        this.billingState = frame.getByRole('group', { name: 'Billing Address' }).getByLabel('State/Region:');
        this.billingPostalCode = frame.getByRole('group', { name: 'Billing Address' }).getByLabel('Postal Code:');
        this.billingCountry = frame.getByRole('group', { name: 'Billing Address' }).getByLabel('Country:');

        // ---------- Shipping Address ----------
        this.shippingStreet = frame.getByRole('group', { name: 'Shipping Address' }).getByLabel('Street:');
        this.shippingCity = frame.getByRole('group', { name: 'Shipping Address' }).getByLabel('City:');
        this.shippingState = frame.getByRole('group', { name: 'Shipping Address' }).getByLabel('State/Region:');
        this.shippingPostalCode = frame.getByRole('group', { name: 'Shipping Address' }).getByLabel('Postal Code:');
        this.shippingCountry = frame.getByRole('group', { name: 'Shipping Address' }).getByLabel('Country:');
        this.copyAddressCheckbox = frame.locator('#shipping_checkbox');

        // ---------- Line items ----------
        this.currency = frame.locator('#currency_id_select');
        this.addGroupButton = frame.getByRole('button', { name: 'Add Group' });
        this.total = frame.locator('#total_amt');
        this.discount = frame.locator('#discount_amount');
        this.subtotal = frame.locator('#subtotal_amount');
        this.shipping = frame.locator('#shipping_amount');
        this.shippingTax = frame.locator('#shipping_tax_amt');
        this.shippingTaxDropdown = frame.locator('#shipping_tax');
        this.tax = frame.locator('#tax_amount');
        this.grandTotal = frame.locator('#total_amount');

        // ---------- Save / Cancel (top and bottom buttons exist, so use first) ----------
        this.saveButton = frame.getByRole('button', { name: 'Save' }).first();
        this.cancelButton = frame.getByRole('button', { name: 'Cancel' }).first();

        // ---------- Invoices list page ----------
        this.checkbox = page.locator('scrm-table-header').getByLabel('Select Action Menu');
        this.columnsButton = page.locator('scrm-table-header').getByRole('button', { name: 'Columns' });
        this.numberColumn = page.locator('.btn.btn-sm.p-0').first();
        this.titleColumn = page.locator('.cdk-header-cell.cdk-column-name > scrm-sort-button > .btn');
        this.statusColumn = page.locator('.cdk-header-cell.cdk-column-status > scrm-sort-button > .btn');
        this.contactColumn = page.locator('.cdk-header-cell.cdk-column-billing_contact > scrm-sort-button > .btn');
        this.accountColumn = page.locator('.cdk-header-cell.cdk-column-billing_account > scrm-sort-button > .btn');
        this.grandTotalColumn = page.locator('.cdk-header-cell.cdk-column-total_amount > scrm-sort-button > .btn');
        this.dueDateColumn = page.locator('.cdk-header-cell.cdk-column-due_date > scrm-sort-button > .btn');
    }

    // ---------- Menu ----------
        async hoverInvoicesMenu() {
        await this.alertMessage.waitFor({ state: 'hidden' });
        await this.moreMenu.hover();
        await this.invoicesMenu.hover();
    }
            async clickCreateInvoice() {
        await this.page.waitForLoadState('networkidle');
        let url = this.page.url();
        url = url.split('#')[0];
        await this.page.goto(url + '#/invoices/edit');
        await this.invoiceTitle.waitFor();
    }

    //     async clickCreateInvoice() {
    //     await this.moreMenu.hover();
    //     await this.invoicesMenu.click();
    //     await this.createInvoiceLink.click();
    // }

    // ---------- Invoice details ----------
    async enterInvoiceTitle(title) {
        await this.invoiceTitle.fill(title);
    }

    async enterInvoiceNumber(number) {
        await this.invoiceNumber.fill(number);
    }

    async enterQuoteNumber(quoteNumber) {
        await this.quoteNumber.fill(quoteNumber);
    }

    async enterQuoteDate(date) {
        await this.quoteDate.fill(date);
    }

    async enterDueDate(date) {
        await this.dueDate.fill(date);
    }

    async enterInvoiceDate(date) {
        await this.invoiceDate.fill(date);
    }

    async enterDescription(text) {
        await this.description.fill(text);
    }

    // ---------- Assigned user ----------
    async enterAssignedTo(user) {
        await this.assignedTo.fill(user);
    }

    async clickSelectUser() {
        await this.selectUserButton.click();
    }

    async clearUser() {
        await this.clearUserButton.click();
    }

    // ---------- Status ----------
    async selectStatus(status) {
        await this.statusDropdown.selectOption(status);
    }

    // ---------- Account / Contact ----------
    async clickSelectAccount() {
        await this.selectAccountButton.click();
    }

    async clearAccount() {
        await this.clearAccountButton.click();
    }

    async clickSelectContact() {
        await this.selectContactButton.click();
    }

    async clearContact() {
        await this.clearContactButton.click();
    }

    // ---------- Addresses ----------
    async enterBillingAddress(street, city, state, postalCode, country) {
        await this.billingStreet.fill(street);
        await this.billingCity.fill(city);
        await this.billingState.fill(state);
        await this.billingPostalCode.fill(postalCode);
        await this.billingCountry.fill(country);
    }

    async enterShippingAddress(street, city, state, postalCode, country) {
        await this.shippingStreet.fill(street);
        await this.shippingCity.fill(city);
        await this.shippingState.fill(state);
        await this.shippingPostalCode.fill(postalCode);
        await this.shippingCountry.fill(country);
    }

    async copyAddressFromLeft() {
        await this.copyAddressCheckbox.check();
    }

    // ---------- Save / Cancel ----------
    async clickSave() {
        await this.saveButton.click();
    }

    async clickCancel() {
        await this.cancelButton.click();
    }
}
