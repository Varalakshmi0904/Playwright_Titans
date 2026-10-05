export class DocumentPage {
    constructor(page) {
        this.page = page;
        //this.DocumentMenu = page.locator('span').filter({ hasText: 'Documents' }).first();
        //this.DocumentMenu = page.locator('a[href="#/documents"]');
        this.DocumentMenu = page.locator('a').filter({ hasText: /^Documents$/ })
        this.createDocument = page.getByRole('link', { name: 'Create Document' });
        this.File = page.getByText('FILE', { exact: true });
        //this.fileUploadInput = page.getByText('Upload Click or drag a file');
        this.fileUploadInput = page.locator('input[type="file"]');
        this.status = page.locator('scrm-dropdownenum-edit').filter({ hasText: 'Active Draft FAQ Expired' }).getByRole('combobox')
        this.documentName = page.getByRole('textbox').nth(1);
        //this.revision = page.locator('div').filter({ hasText: /^\*REVISION$/ }).nth(2)
        this.revision = page.getByRole('textbox').nth(2);
        this.documentType = page.locator('scrm-dropdownenum-edit').filter({ hasText: 'Mail Merge EULA NDA License' }).getByRole('combobox');
        this.template = page.locator('.checkmark');
        this.publishDate = page.getByRole('textbox', { name: 'yyyy-mm-dd' }).first();
        this.expirationDate = page.getByRole('textbox', { name: 'yyyy-mm-dd' }).nth(1);
        this.category = page.locator('scrm-dropdownenum-edit').filter({ hasText: 'Marketing Knowledge Base Sales' }).getByRole('combobox');
        this.subcategory = page.locator('scrm-dropdownenum-edit').filter({ hasText: 'Marketing Collateral Product' }).getByRole('combobox');
        this.assignedto = page.getByRole('combobox', { name: 'WillWestin' });
        this.savebutton = page.getByRole('button', { name: 'Save' });
        this.cancelbutton = page.getByRole('button', { name: 'Cancel' });
        this.other = page.getByRole('tab', { name: 'OTHER' });
        this.datecreated = page.getByText('DATE CREATED');
        this.datemodified = page.getByText('DATE MODIFIED');
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.cancelButton = page.getByRole('button', { name: 'Cancel' });
        this.viewDocuments = page.getByRole('link', { name: 'View Documents' });
        this.checkbox = page.locator('scrm-table-header').getByLabel('Select Action Menu');
        this.bulkActions = page.locator('scrm-table-header').getByLabel('Bulk Actions');
        this.file = page.getByText('File', { exact: true });
        this.category = page.getByText('Category', { exact: true });
        this.subcategory = page.getByRole('columnheader', { name: 'Sub Category' });
        this.revisiondate = page.getByText('Revision Date');
        this.expirationdate = page.getByRole('columnheader', { name: 'Expiration Date' });
        this.user = page.getByText('User');
        this.previouspage = page.locator('scrm-table-header').getByRole('button', { name: 'Previous page' });
        this.firstpage = page.locator('scrm-table-header').getByRole('button', { name: 'Navigate to first page' });
        this.nextpage = page.locator('scrm-table-header').getByRole('button', { name: 'Next page' });
        this.lastpage = page.locator('scrm-table-header').getByRole('button', { name: 'Navigate to last page' });
        this.column = page.locator('scrm-table-header').getByRole('button', { name: 'Columns' });
        this.choosecolumns = page.locator('div').filter({ hasText: 'Choose Columns' }).nth(4);
        this.displayed = page.getByText('DISPLAYED');
        this.documentsname = page.locator('#cdk-drop-list-2').getByText('Document Name');
        this.file = page.locator('#cdk-drop-list-2').getByText('File');
        this.category = page.locator('#cdk-drop-list-2').getByText('Category', { exact: true })
        this.subcategory = page.locator('#cdk-drop-list-2').getByText('Sub Category');
        this.revisiondate = page.locator('#cdk-drop-list-2').getByText('Revision Date');
        this.expirationdate = page.locator('#cdk-drop-list-2').getByText('Expiration Date');
        this.user = page.locator('#cdk-drop-list-2').getByText('User');
        this.datecreated = page.getByText('Date Created');
        this.hidden = page.getByText('HIDDEN');
        this.modified = page.getByText('Modified by');
        this.closebutton = page.getByRole('button').filter({ hasText: '×' });
        this.filterbutton = page.getByRole('button', { name: 'Filter' });
        this.documentrevision = page.getByLabel('Revision');

    }

    async DocumentMenuHover() {
    await this.DocumentMenu.waitFor({ state: "visible" });
    await this.DocumentMenu.hover();
}

  
    async clickCreateDocument() 
    { 
      await this.createDocument.waitFor({state: 'visible'});
        await this.createDocument.click();
     } 

     async uploadDocument(file) 
    { 
        await this.fileUploadInput.click();
        await this.page.setInputFiles('input[type="file"]', file);
     } 

     async selectDocumentStatus(status) {
    await this.status.selectOption({ label: status });
}

    async enterDocumentName(name) 
    { 
        await this.documentName.fill(String(name));
     } 

     
    async enterRevision(revision) 
    { 
        await this.revision.fill(revision);
     } 

   async selectDocumentType(type) {
    await this.documentType.selectOption(type);
}
async selectTemplate() 
  { 
  await this.template.first().click();
} 
async enterPublishDate(date) 
{
await this.publishDate.fill(date); 
} 
async enterExpirationDate(date) 
{ 
await this.expirationDate.fill(date); 
} 
async selectCategory(category)
{ 
await this.categoryDropdown.click(); 
await this.page.getByText(category, { exact: true }).click();
} 
            async selectSubcategory(subcategory) 
            { 
                await this.subcategoryDropdown.click(); 
                await this.page.getByText(subcategory, { exact: true }).click();
             } 
                async saveDocument() 
                { 
                    await this.saveButton.click();
                 } 
                async cancelDocument() 
                {
                     await this.cancelButton.click(); 

                }
            

 async hoverColumns() {
     await this.columnsButton.hover();
     } 
     
     async hoverBulkActions() 
     {
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
    
    async openViewDocuments() {
         await this.viewDocuments.click(); 
        } 
        async clickFilter() { 
            await this.filterButton.click(); 
        } async closeWindow() 
        { 
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
    async goToLastPage()
     { await this.lastPage.click(); 

     } 
      async verifyOtherTabVisible() { 
        await expect(this.otherTab).toBeVisible();
     } 
     async verifyDocumentNameColumnVisible() { 
        await expect(this.documentNameColumn).toBeVisible();
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
        async verifyRevisionDateColumnVisible()
         { 
            await expect(this.revisionDateColumn).toBeVisible();
         } 
         async verifyExpirationDateColumnVisible() 
         {
             await expect(this.expirationDateColumn).toBeVisible();
             } 
             async verifyUserColumnVisible() { 
                await expect(this.userColumn).toBeVisible();
             }
             async verifyDocumentCreated() {
               await expect(this.documentrevision).toBeVisible();
             }
             
             
            }