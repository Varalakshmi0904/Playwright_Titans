import { expect } from '@playwright/test';

export class DocumentPage {
    constructor(page) {
        this.page = page;

        // ---------- Menu ----------
        this.DocumentMenu = page.locator('a').filter({ hasText: /^Documents$/ });
        this.createDocument = page.getByRole('link', { name: 'Create Document' });
        this.viewDocuments = page.getByRole('link', { name: 'View Documents' });

        // ---------- Create Document form ----------
        this.File = page.getByText('FILE', { exact: true });
        this.fileUploadInput = page.locator('input[type="file"]');
        this.status = page.locator('scrm-dropdownenum-edit').filter({ hasText: 'Active Draft FAQ Expired' }).getByRole('combobox');
        this.documentName = page.getByRole('textbox').nth(1);
        this.revision = page.getByRole('textbox').nth(2);
        this.documentType = page.locator('scrm-dropdownenum-edit').filter({ hasText: 'Mail Merge EULA NDA License' }).getByRole('combobox');
        this.template = page.locator('.checkmark');
        this.publishDate = page.getByRole('textbox', { name: 'yyyy-mm-dd' }).first();
        this.expirationDate = page.getByRole('textbox', { name: 'yyyy-mm-dd' }).nth(1);
        this.category = page.locator('scrm-dropdownenum-edit').filter({ hasText: 'Marketing Knowledge Base Sales' }).getByRole('combobox');
        this.subcategory = page.locator('scrm-dropdownenum-edit').filter({ hasText: 'Marketing Collateral Product' }).getByRole('combobox');
        this.assignedto = page.getByRole('combobox', { name: 'WillWestin' });
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.cancelButton = page.getByRole('button', { name: 'Cancel' });

        // ---------- Record (detail) page ----------
        this.otherTab = page.getByRole('tab', { name: 'OTHER' });
        this.dateCreatedLabel = page.getByText('DATE CREATED');
        this.dateModifiedLabel = page.getByText('DATE MODIFIED');
        this.documentrevision = page.getByLabel('Revision');

        // ---------- Documents list page ----------
        this.checkbox = page.locator('scrm-table-header').getByLabel('Select Action Menu');
        this.bulkActions = page.locator('scrm-table-header').getByLabel('Bulk Actions');
        this.fileColumn = page.getByText('File', { exact: true });
        this.categoryColumn = page.getByText('Category', { exact: true });
        this.subcategoryColumn = page.getByRole('columnheader', { name: 'Sub Category' });
        this.revisionDateColumn = page.getByText('Revision Date');
        this.expirationDateColumn = page.getByRole('columnheader', { name: 'Expiration Date' });
        this.userColumn = page.getByText('User');
        this.previousPage = page.locator('scrm-table-header').getByRole('button', { name: 'Previous page' });
        this.firstPage = page.locator('scrm-table-header').getByRole('button', { name: 'Navigate to first page' });
        this.nextPage = page.locator('scrm-table-header').getByRole('button', { name: 'Next page' });
        this.lastPage = page.locator('scrm-table-header').getByRole('button', { name: 'Navigate to last page' });
        this.columnsButton = page.locator('scrm-table-header').getByRole('button', { name: 'Columns' });
        this.filterButton = page.getByRole('button', { name: 'Filter' });
        this.closeButton = page.getByRole('button').filter({ hasText: '×' });

        // ---------- Choose Columns popup ----------
        this.chooseColumns = page.locator('div').filter({ hasText: 'Choose Columns' }).nth(4);
        this.displayed = page.getByText('DISPLAYED');
        this.hidden = page.getByText('HIDDEN');
        this.chooserDocumentName = page.locator('#cdk-drop-list-2').getByText('Document Name');
        this.chooserFile = page.locator('#cdk-drop-list-2').getByText('File');
        this.chooserCategory = page.locator('#cdk-drop-list-2').getByText('Category', { exact: true });
        this.chooserSubcategory = page.locator('#cdk-drop-list-2').getByText('Sub Category');
        this.chooserRevisionDate = page.locator('#cdk-drop-list-2').getByText('Revision Date');
        this.chooserExpirationDate = page.locator('#cdk-drop-list-2').getByText('Expiration Date');
        this.chooserUser = page.locator('#cdk-drop-list-2').getByText('User');
        this.chooserDateCreated = page.getByText('Date Created');
        this.chooserModifiedBy = page.getByText('Modified by');
        this.documentRows = page.locator('scrm-table-body tbody tr');
        this.firstDocumentLink = this.documentRows.first().getByRole('link').first();
        this.firstFileLink = this.documentRows.first().getByRole('link').nth(1);
    }

    // ---------- Menu ----------
    async DocumentMenuHover() {
        await this.DocumentMenu.waitFor({ state: 'visible' });
        await this.DocumentMenu.hover();
    }

    // async clickCreateDocument() {
    //     await this.createDocument.waitFor({ state: 'visible' });
    //     await this.createDocument.click();
    // }
    async clickCreateDocument() {
    const alert = this.page.locator('scrm-message-ui .alert');
    if (await alert.isVisible()) {
        await alert.getByRole('button').first().click().catch(() => {});
        await alert.waitFor({ state: 'hidden' });
    }
    await this.createDocument.waitFor({ state: 'visible' });
    await this.createDocument.click();
    }
    // async openViewDocuments() {
    //     await this.viewDocuments.waitFor({ state: 'visible' });
    //     await this.viewDocuments.click();
    // }
    async openViewDocuments() {
    const alert = this.page.locator('scrm-message-ui .alert');
    if (await alert.isVisible()) {
        await alert.getByRole('button').first().click().catch(() => {});
        await alert.waitFor({ state: 'hidden' });
    }
    await this.viewDocuments.waitFor({ state: 'visible' });
    await this.viewDocuments.click();
    }

    // ---------- Create Document form ----------
    async uploadDocument(file) {
        await this.fileUploadInput.setInputFiles(file);
    }

    async enterDocumentName(name) {
        await this.documentName.fill(String(name));
    }

    async enterRevision(revision) {
        await this.revision.fill(String(revision));
    }

    async selectDocumentStatus(status) {
        await this.status.selectOption(status);
    }

    async selectDocumentType(type) {
        await this.documentType.selectOption(type);
    }

    async selectTemplate() {
        await this.template.first().click();
    }

       async enterPublishDate(date) {
        await this.page.waitForLoadState('networkidle');
        await this.publishDate.fill(date);
    }

    async enterExpirationDate(date) {
        await this.page.waitForLoadState('networkidle');
        await this.expirationDate.fill(date);
    }

    async selectCategory(category) {
        await this.category.selectOption(category);
    }

    async selectSubcategory(subcategory) {
        await this.subcategory.selectOption(subcategory);
    }
        async selectAssignedTo(user) {
        await this.assignedto.click();
        await this.page.getByRole('option', { name: user }).click();
    }    
        async clickFirstDocument() {
        await this.firstDocumentLink.click();
    }

    async clickFirstFile() {
        await this.firstFileLink.click();
    }

    async saveDocument() {
        await this.saveButton.click();
    }

    async cancelDocument() {
        await this.cancelButton.click();
    }

    // ---------- Documents list page ----------
    async hoverBulkActions() {
        await this.bulkActions.hover();
    }

    async openColumnsMenu() {
        await this.columnsButton.hover();
        await this.columnsButton.click();
    }

    async chooseColumnsMenu() {
        await this.columnsButton.hover();
        await this.chooseColumns.click();
    }

    async clickFilter() {
        await this.filterButton.click();
    }

    async closeWindow() {
        await this.closeButton.click();
    }

    async goToPreviousPage() {
        await this.previousPage.click();
    }

    async goToFirstPage() {
        await this.firstPage.click();
    }

    async goToNextPage() {
        await this.nextPage.click();
    }

    async goToLastPage() {
        await this.lastPage.click();
    }

    // ---------- Verifications ----------
    async verifyOtherTabVisible() {
        await expect(this.otherTab).toBeVisible();
    }

    async verifyFileColumnVisible() {
        await expect(this.fileColumn).toBeVisible();
    }

    async verifyCategoryColumnVisible() {
        await expect(this.categoryColumn).toBeVisible();
    }

    async verifySubcategoryColumnVisible() {
        await expect(this.subcategoryColumn).toBeVisible();
    }

    async verifyRevisionDateColumnVisible() {
        await expect(this.revisionDateColumn).toBeVisible();
    }

    async verifyExpirationDateColumnVisible() {
        await expect(this.expirationDateColumn).toBeVisible();
    }

    async verifyUserColumnVisible() {
        await expect(this.userColumn).toBeVisible();
    }

    async verifyDocumentCreated() {
        await expect(this.documentrevision).toBeVisible();
    }
}