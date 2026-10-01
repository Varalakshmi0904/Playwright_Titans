# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\documents.feature.spec.js >> Document Page- Functional Validation >> Create a new document
- Location: .features-gen\features\documents.feature.spec.js:10:7

# Error details

```
TypeError: Cannot set properties of undefined (setting 'createDocumentButton')
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
  1   | export class DocumentPage {
  2   |     constructor(page) {
  3   |         this.page = page;
  4   |         this.DocumentMenu = page.
> 5   |         this.createDocumentButton = page.getByRole('button', { name: 'Create Document' });
      |                                  ^ TypeError: Cannot set properties of undefined (setting 'createDocumentButton')
  6   |         this.fileUploadInput = page.getByText('Upload Click or drag a file');
  7   |         this.documentName = page.getByRole('textbox').nth(1);
  8   |         this.revision = page.getByRole('textbox').nth(2);
  9   |         this.documentType = page.locator('scrm-dropdownenum-edit').filter({ hasText: 'Mail Merge EULA NDA License' }).getByRole('combobox');
  10  |         this.template = page.locator('.checkmark');
  11  |         this.publishDate = page.getByRole('textbox', { name: 'yyyy-mm-dd' }).first();
  12  |         this.expirationDate = page.getByRole('textbox', { name: 'yyyy-mm-dd' }).nth(1);
  13  |         this.category = page.locator('scrm-dropdownenum-edit').filter({ hasText: 'Marketing Knowledge Base Sales' }).getByRole('combobox');
  14  |         this.subcategory = page.locator('scrm-dropdownenum-edit').filter({ hasText: 'Marketing Collateral Product' }).getByRole('combobox');
  15  |         this.assignedto = page.getByRole('combobox', { name: 'WillWestin' });
  16  |         this.savebutton = page.getByRole('button', { name: 'Save' });
  17  |         this.cancelbutton = page.getByRole('button', { name: 'Cancel' });
  18  |         this.other = page.getByRole('tab', { name: 'OTHER' });
  19  |         this.datecreated = page.getByText('DATE CREATED');
  20  |         this.datemodified = page.getByText('DATE MODIFIED');
  21  |         this.saveButton = page.getByRole('button', { name: 'Save' });
  22  |         this.cancelButton = page.getByRole('button', { name: 'Cancel' });
  23  |         this.viewDocuments = page.getByRole('link', { name: 'View Documents' });
  24  |         this.checkbox = page.locator('scrm-table-header').getByLabel('Select Action Menu');
  25  |         this.bulkActions = page.locator('scrm-table-header').getByLabel('Bulk Actions');
  26  |         this.file = page.getByText('File', { exact: true });
  27  |         this.category = page.getByText('Category', { exact: true });
  28  |         this.subcategory = page.getByRole('columnheader', { name: 'Sub Category' });
  29  |         this.revisiondate = page.getByText('Revision Date');
  30  |         this.expirationdate = page.getByRole('columnheader', { name: 'Expiration Date' });
  31  |         this.user = page.getByText('User');
  32  |         this.previouspage = page.locator('scrm-table-header').getByRole('button', { name: 'Previous page' });
  33  |         this.firstpage = page.locator('scrm-table-header').getByRole('button', { name: 'Navigate to first page' });
  34  |         this.nextpage = page.locator('scrm-table-header').getByRole('button', { name: 'Next page' });
  35  |         this.lastpage = page.locator('scrm-table-header').getByRole('button', { name: 'Navigate to last page' });
  36  |         this.column = page.locator('scrm-table-header').getByRole('button', { name: 'Columns' });
  37  |         this.choosecolumns = page.locator('div').filter({ hasText: 'Choose Columns' }).nth(4);
  38  |         this.displayed = page.getByText('DISPLAYED');
  39  |         this.documentsname = page.locator('#cdk-drop-list-2').getByText('Document Name');
  40  |         this.file = page.locator('#cdk-drop-list-2').getByText('File');
  41  |         this.category = page.locator('#cdk-drop-list-2').getByText('Category', { exact: true })
  42  |         this.subcategory = page.locator('#cdk-drop-list-2').getByText('Sub Category');
  43  |         this.revisiondate = page.locator('#cdk-drop-list-2').getByText('Revision Date');
  44  |         this.expirationdate = page.locator('#cdk-drop-list-2').getByText('Expiration Date');
  45  |         this.user = page.locator('#cdk-drop-list-2').getByText('User');
  46  |         this.datecreated = page.getByText('Date Created');
  47  |         this.hidden = page.getByText('HIDDEN');
  48  |         this.modified = page.getByText('Modified by');
  49  |         this.closebutton = page.getByRole('button').filter({ hasText: '×' });
  50  |         this.filterbutton = page.getByRole('button', { name: 'Filter' });
  51  |         this.documentrevision = page.getByText('Document Revisions');
  52  | 
  53  |     }
  54  | 
  55  |     async hoverOverDocumentMenu() {
  56  |         await this.DocumentMenu.hover();
  57  |     }
  58  | 
  59  |    
  60  |     async clickCreateDocument() 
  61  |     { 
  62  |         await this.createDocumentButton.click();
  63  |      } 
  64  | 
  65  |      async uploadDocument(file) 
  66  |     { 
  67  |         await this.fileUploadInput.click();
  68  |         await this.page.setInputFiles('input[type="file"]', file);
  69  |      } 
  70  | 
  71  |     async enterDocumentName(name) 
  72  |     { 
  73  |         await this.documentName.fill(String(name));
  74  |      } 
  75  |     async enterRevision(revision) 
  76  |     { 
  77  |         await this.revision.fill(revision);
  78  |      } 
  79  |     async selectDocumentType(type)
  80  |      { 
  81  |         await this.documentType.click(); 
  82  |         await this.page.getByText(type, { exact: true }).click();
  83  |      } 
  84  |         async selectTemplate() 
  85  |         { 
  86  |             await this.template.first().click();
  87  |          } 
  88  |         async enterPublishDate(date) 
  89  |         {
  90  |              await this.publishDate.fill(date); 
  91  |             } 
  92  |         async enterExpirationDate(date) 
  93  |         { 
  94  |             await this.expirationDate.fill(date); 
  95  |         } 
  96  |         async selectCategory(category)
  97  |          { 
  98  |             await this.categoryDropdown.click(); 
  99  |             await this.page.getByText(category, { exact: true }).click();
  100 |          } 
  101 |             async selectSubcategory(subcategory) 
  102 |             { 
  103 |                 await this.subcategoryDropdown.click(); 
  104 |                 await this.page.getByText(subcategory, { exact: true }).click();
  105 |              } 
```