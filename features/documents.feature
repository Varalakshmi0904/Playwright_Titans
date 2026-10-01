Feature:Document Page- Functional Validation

Background:
    Given User is logged into the SuiteCRM Dashboard page

@CreateDocument
  Scenario: Create a new document
  Given User is on the Create Document page
  When User enters all valid document details and clicks the Save button 
  Then User should see the document created successfully

# @CreateDocumentwithoutmandatoryfields
#   Scenario: Create a document without entering mandatory fields
#   Given User is on the Create Document page
#   When User leaves mandatory fields empty and saves
#   Then User should see appropriate validation messages


# @CreateDocumentwithinvalidinformation
# Scenario: Create a document with invalid information
#   Given User is on the Create Document page
#   When User enters invalid document information and saves
#   Then User should see document validation errors


# @SelectDocumentStatus
# Scenario: Select document status
#   Given User is on the Create Document page
#   When User selects a document status
#   Then User should see the selected status


# @SelectDocumentType
# Scenario: Select document type
#   Given User is on the Create Document page
#   When User selects a document type
#   Then User should see the selected document type


# @SelectTemplateOption
# Scenario: Select Template option
#   Given User is on the Create Document page
#   When User selects the Template option
#   Then User should see the Template option selected


# @EnterPublishDate
# Scenario: Enter publish date
#   Given User is on the Create Document page
#   When User enters a valid publish date
#   Then User should see the entered publish date


# @EnterExpirationDate
# Scenario: Enter expiration date
#   Given User is on the Create Document page
#   When User enters a valid expiration date
#   Then User should see the entered expiration date


# @SelectDocumentCategory
# Scenario: Select document category
#   Given User is on the Create Document page
#   When User selects a document category
#   Then User should see the selected category


# @SelectDocumentSubCategory
# Scenario: Select document sub category
#   Given User is on the Create Document page
#   When User selects a document sub category
#   Then User should see the selected sub category


# @AssignDocumentToUser
# Scenario: Assign document to a user
#   Given User is on the Create Document page
#   When User selects a user in the Assigned To field
#   Then User should see the selected user

# @SaveDocument
# Scenario: Save a document
#   Given User has entered all required document information
#   When User clicks the Save button
#   Then User should see the document created successfully


# @CancelDocumentCreation
# Scenario: Cancel document creation
#   Given User is on the Create Document page
#   When User clicks the Cancel button
#   Then User should be redirected to the Documents page

#   @viewdocuments

#   Scenario: View documents list
# Given User is on the Documents page
# When User views the documents list
# Then User should see the available documents

# @viewdocumentsname
# Scenario: View document name
# Given User is on the Documents page
# When User selects a document name
# Then User should see the document details

# @viewdocumentfile
# Scenario: View document file
# Given User is on the Documents page
# When User selects the document file
# Then User should be able to view or download the document file

# @viewdocumentcategory
# Scenario: Verify document category
# Given User is on the Documents page
# When User views an existing document
# Then User should see the document category


# @viewdocumentsubcategory
# Scenario: Verify document sub category
# Given User is on the Documents page
# When User views an existing document
# Then User should see the document sub category

# @viewdocumentrevisiondate
# Scenario: Verify document revision date
# Given User is on the Documents page
# When User views an existing document
# Then User should see the document revision date


# @viewdocumentexpirationdate
# Scenario: Verify document expiration date
# Given User is on the Documents page
# When User views an existing document
# Then User should see the document expiration date

# @viewdocumentassigneduser
# Scenario: Verify document assigned user
# Given User is on the Documents page
# When User views an existing document
# Then User should see the assigned user

# @viewdocumentdetails
# Scenario: Open document details
# Given User is on the Documents page
# When User selects an existing document
# Then User should be redirected to the document details page

# @viewdocumentdetails
# Scenario: Verify document details
# Given User is viewing an existing document
# When User opens the document details
# Then User should see the document name, file, category, sub category, revision date, expiration date and assigned user

# @viewexpireddocument
# Scenario: View an expired document
# Given User is on the Documents page
# When User selects an expired document
# Then User should see the document expiration date

# @viewvaliddocument
# Scenario: View document with valid expiration date
# Given User is on the Documents page
# When User selects a document with a valid expiration date
# Then User should see the document details successfully

# @viewdocumentlistcount
# Scenario: Verify document list count
# Given User is on the Documents page
# When User views the documents list
# Then User should see the correct number of documents displayed

