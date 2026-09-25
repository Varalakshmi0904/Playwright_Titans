 @contact
 Feature: Contacts - Functional Validations

Background:
  Given User is logged into the SuiteCRM Dashboard page
  
Scenario: Create a new Contact

 Given User is on the Create Contact page
 When User clicks the save button entering all valid contact details
 Then User should see the Contact created successfully

# Scenario: Create Contact with mandatory fields missing

# Given User is on the Create Contact page
# When User clicks the save button with mandatory fields empty
# Then User should see validation messages for the mandatory fields

# Scenario:Create Contact with invalid email

# Given User is on the Create Contact page
# When User clicks the save button with an invalid email
# Then User should see email validation message

# Scenario:Edit an existing Contact

# Given User is on the Contacts page
# When User clicks the save button by selecting a Contact, updates details
# Then User should see the updated Contact details

# Scenario: Search for a Contact

# Given User is on the Contacts page
# When User searches using valid contact information
# Then User should see the matching contact

# Scenario: Filter Contacts

# Given ser is on the Contacts page
# When User applies a contact filters to the contact list
# Then User should see only the contacts that match the filter criteria

# Scenario:Delete Contact

# Given User is on the Contacts page
# When User deletes by selecting a Contact
# Then User should see the Contact removed successfully

# Scenario:View Contacts List

# Given User is on the Dashboard page
# When User mouse hover on Contacts and clicks view contacts
# Then User should see the Contact details
