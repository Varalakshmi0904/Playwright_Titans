
# Create Invoices 

Feature:Invoice Page- Functional Validation

Scenario: Create invoice with valid information
Given User is on the Create Invoice page
When User enters valid invoice details and saves
Then User should see the invoice created successfully


Scenario: Create invoice with mandatory fields empty
Given User is on the Create Invoice page
When User leaves mandatory fields empty and saves
Then User should see appropriate validation messages


Scenario: Create invoice with invalid information
Given User is on the Create Invoice page
When User enters invalid invoice information and saves
Then User should see invoice validation errors


Scenario: Enter invoice title
Given User is on the Create Invoice page
When User enters a valid invoice title
Then User should see the entered invoice title


Scenario: Enter invoice number
Given User is on the Create Invoice page
When User enters a valid invoice number
Then User should see the entered invoice number


Scenario: Enter quote number
Given User is on the Create Invoice page
When User enters a valid quote number
Then User should see the entered quote number


Scenario: Enter quote date
Given User is on the Create Invoice page
When User enters a valid quote date
Then User should see the entered quote date


Scenario: Enter due date
Given User is on the Create Invoice page
When User enters a valid due date
Then User should see the entered due date


Scenario: Enter invoice date
Given User is on the Create Invoice page
When User enters a valid invoice date
Then User should see the entered invoice date


Scenario: Select assigned user
Given User is on the Create Invoice page
When User selects a user in the Assigned To field
Then User should see the selected user


Scenario: Select invoice status
Given User is on the Create Invoice page
When User selects an invoice status
Then User should see the selected invoice status


Scenario: Select Paid status
Given User is on the Create Invoice page
When User selects Paid as the invoice status
Then User should see the invoice status as Paid


Scenario: Select Unpaid status
Given User is on the Create Invoice page
When User selects Unpaid as the invoice status
Then User should see the invoice status as Unpaid


Scenario: Select Cancelled status
Given User is on the Create Invoice page
When User selects Cancelled as the invoice status
Then User should see the invoice status as Cancelled


Scenario: Enter invoice description
Given User is on the Create Invoice page
When User enters a valid invoice description
Then User should see the entered invoice description   

# View Invoices

Scenario: View invoices list
Given User is on the Invoices page
When User views the invoices list
Then User should see the available invoices

Scenario: Verify invoice number
Given User is on the Invoices page
When User views an existing invoice
Then User should see the invoice number

Scenario: Verify invoice title
Given User is on the Invoices page
When User views an existing invoice
Then User should see the invoice title

Scenario: Verify invoice status
Given User is on the Invoices page
When User views an existing invoice
Then User should see the invoice status

Scenario: Verify invoice contact
Given User is on the Invoices page
When User views an existing invoice
Then User should see the contact associated with the invoice

Scenario: Verify invoice account
Given User is on the Invoices page
When User views an existing invoice
Then User should see the account associated with the invoice

Scenario: Verify invoice grand total
Given User is on the Invoices page
When User views an existing invoice
Then User should see the invoice grand total

Scenario: Verify invoice due date
Given User is on the Invoices page
When User views an existing invoice
Then User should see the invoice due date

#open invoice details

Scenario: View invoice details
Given User is on the Invoices page
When User selects an existing invoice
Then User should see the invoice details

Scenario: Verify complete invoice information
Given User is viewing an existing invoice
When User opens the invoice details
Then User should see the invoice number, title, status, contact, account, grand total and due date

#filter invoices

Scenario: Filter invoices
Given User is on the Invoices page
When User clicks the Filter button
Then User should see the invoice filter options

Scenario: Filter invoices using valid criteria
Given User is on the Invoices page
When User applies valid invoice filter criteria
Then User should see invoices matching the selected criteria

Scenario: Filter invoices with no matching results
Given User is on the Invoices page
When User applies filter criteria that have no matching invoices
Then User should see "No results found" message

#Sorting invoices   

Scenario: Sort invoices by invoice number
Given User is on the Invoices page
When User sorts the invoices by invoice number
Then User should see the invoices sorted by invoice number

Scenario: Sort invoices by title
Given User is on the Invoices page
When User sorts the invoices by title
Then User should see the invoices sorted by title

Scenario: Sort invoices by status
Given User is on the Invoices page
When User sorts the invoices by status
Then User should see the invoices sorted by status

Scenario: Sort invoices by grand total
Given User is on the Invoices page
When User sorts the invoices by grand total
Then User should see the invoices sorted by grand total

Scenario: Sort invoices by due date
Given User is on the Invoices page
When User sorts the invoices by due date
Then User should see the invoices sorted by due date

# Bulk actions

Scenario: Select an invoice
Given User is on the Invoices page
When User selects an invoice using the checkbox
Then User should see the invoice selected

Scenario: Select multiple invoices
Given User is on the Invoices page
When User selects multiple invoices
Then User should see all selected invoices

Scenario: Select all invoices
Given User is on the Invoices page
When User selects the Select All checkbox
Then User should see all invoices selected

Scenario: Apply bulk action to selected invoices
Given User has selected one or more invoices
When User selects a bulk action
Then User should see the selected bulk action applied to the invoices

# pagination

Scenario: Navigate to the next page of invoices
Given User is on the Invoices page
When User clicks the Next page button
Then User should see the next page of invoices

Scenario: Navigate to the previous page of invoices
Given User is on the second or later page of invoices
When User clicks the Previous page button
Then User should see the previous page of invoices

Scenario: Navigate to the first page of invoices
Given User is on a later page of invoices
When User clicks the First page button
Then User should see the first page of invoices

Scenario: Navigate to the last page of invoices
Given User is on the Invoices page
When User clicks the Last page button
Then User should see the last page of invoices

# No results found

Scenario: View invoices when no invoices are available
Given User is on the Invoices page
When There are no invoices available
Then User should see "No results found" message

# choose columns

Scenario: Open Choose Columns
Given User is on the Invoices page
When User clicks the Choose Columns button
Then User should see the Choose Columns window

Scenario: Verify displayed columns
Given User is viewing the Choose Columns window
When User views the Displayed columns
Then User should see Num, Title, Status, Contact, Account, Grand Total, Due Date and User

Scenario: Verify hidden columns
Given User is viewing the Choose Columns window
When User views the Hidden columns
Then User should see Billing Street, City, Billing State, Billing Postal Code, Billing Country, Shipping Street, Shipping City, Shipping State, Shipping Postal Code and Shipping Country

# Move hidden columns to displayed columns

Scenario: Display Billing Street column
Given User is viewing the Choose Columns window
When User moves Billing Street from Hidden to Displayed
Then User should see Billing Street in the Displayed columns

Scenario: Display City column
Given User is viewing the Choose Columns window
When User moves City from Hidden to Displayed
Then User should see City in the Displayed columns

Scenario: Display Billing State column
Given User is viewing the Choose Columns window
When User moves Billing State from Hidden to Displayed
Then User should see Billing State in the Displayed columns

Scenario: Display Billing Postal Code column
Given User is viewing the Choose Columns window
When User moves Billing Postal Code from Hidden to Displayed
Then User should see Billing Postal Code in the Displayed columns

Scenario: Display Billing Country column
Given User is viewing the Choose Columns window
When User moves Billing Country from Hidden to Displayed
Then User should see Billing Country in the Displayed columns

Scenario: Display Shipping Street column
Given User is viewing the Choose Columns window
When User moves Shipping Street from Hidden to Displayed
Then User should see Shipping Street in the Displayed columns

Scenario: Display Shipping City column
Given User is viewing the Choose Columns window
When User moves Shipping City from Hidden to Displayed
Then User should see Shipping City in the Displayed columns

Scenario: Display Shipping State column
Given User is viewing the Choose Columns window
When User moves Shipping State from Hidden to Displayed
Then User should see Shipping State in the Displayed columns

Scenario: Display Shipping Postal Code column
Given User is viewing the Choose Columns window
When User moves Shipping Postal Code from Hidden to Displayed
Then User should see Shipping Postal Code in the Displayed columns

Scenario: Display Shipping Country column
Given User is viewing the Choose Columns window
When User moves Shipping Country from Hidden to Displayed
Then User should see Shipping Country in the Displayed columns

# Move displayed columns to hidden columns

Scenario: Hide Invoice Number column
Given User is viewing the Choose Columns window
When User moves Num from Displayed to Hidden
Then User should see Num in the Hidden columns

Scenario: Hide Title column
Given User is viewing the Choose Columns window
When User moves Title from Displayed to Hidden
Then User should see Title in the Hidden columns

Scenario: Hide Status column
Given User is viewing the Choose Columns window
When User moves Status from Displayed to Hidden
Then User should see Status in the Hidden columns

Scenario: Hide Contact column
Given User is viewing the Choose Columns window
When User moves Contact from Displayed to Hidden
Then User should see Contact in the Hidden columns

Scenario: Hide Account column
Given User is viewing the Choose Columns window
When User moves Account from Displayed to Hidden
Then User should see Account in the Hidden columns

Scenario: Hide Grand Total column
Given User is viewing the Choose Columns window
When User moves Grand Total from Displayed to Hidden
Then User should see Grand Total in the Hidden columns

Scenario: Hide Due Date column
Given User is viewing the Choose Columns window
When User moves Due Date from Displayed to Hidden
Then User should see Due Date in the Hidden columns

Scenario: Hide User column
Given User is viewing the Choose Columns window
When User moves User from Displayed to Hidden
Then User should see User in the Hidden columns


# Close the Choose Columns 

Scenario: Close Choose Columns window
Given User is viewing the Choose Columns window
When User clicks the Close button
Then User should return to the Invoices page


# Verify column Changes

Scenario: Verify displayed column after selection
Given User is viewing the Choose Columns window
When User moves Billing Street from Hidden to Displayed
And User closes the Choose Columns window
Then User should see Billing Street displayed in the Invoices list

Scenario: Verify hidden column after selection
Given User is viewing the Choose Columns window
When User moves Account from Displayed to Hidden
And User closes the Choose Columns window
Then User should not see Account displayed in the Invoices list


# import files

Scenario: Open Import File page
Given User is on the Import File page
When User views Step 1 Upload Import File
Then User should see the Select File option

Scenario: Download import file template
Given User is on the Import File page
When User clicks Download Import File Template
Then User should be able to download the import file template

Scenario: Upload a valid import file
Given User is on the Import File page
When User selects a valid import file
Then User should see the selected file

Scenario: Upload an invalid file
Given User is on the Import File page
When User selects a file with an invalid file name or format
Then User should see an appropriate validation message

Scenario: Upload a file with invalid characters in the file name
Given User is on the Import File page
When User selects a file containing unsupported characters in the file name
Then User should see an appropriate file name validation message

Scenario: Continue without selecting a file
Given User is on the Import File page
When User clicks the Next button without selecting a file
Then User should see an appropriate validation message

# import data options

Scenario: Select Create new records only
Given User is on the Import File page
When User selects Create new records only
Then User should see Create new records only selected

Scenario: Select Create new records and update existing records
Given User is on the Import File page
When User selects Create new records and update existing records
Then User should see Create new records and update existing records selected

Scenario: Continue with Create new records only
Given User is on the Import File page
And User has selected a valid import file
When User selects Create new records only
And User clicks the Next button
Then User should proceed to the next import step

Scenario: Continue with Create and update existing records
Given User is on the Import File page
And User has selected a valid import file
When User selects Create new records and update existing records
And User clicks the Next button
Then User should proceed to the next import step


# information link

Scenario: View Select File information
Given User is on the Import File page
When User clicks the Information icon next to Select file
Then User should see information about the file name requirements

Scenario: View Create new records information
Given User is on the Import File page
When User clicks the Information icon next to Create new records only
Then User should see information about creating new records

Scenario: View Create and update information
Given User is on the Import File page
When User clicks the Information icon next to Create new records and update existing records
Then User should see information about creating and updating records 



