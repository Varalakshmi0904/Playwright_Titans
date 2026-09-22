Feature: Accounts - Functional Validation

Scenario: Create a New Account with valid details
Given User is on the Create Account page
When User enters valid account details and saves
Then User should see the account created successfully

Scenario: Create Account with mandatory fields missing
Given User is on the Create Account page
When User leaves mandatory fields empty and saves
Then User should see appropriate validation messages

Scenario: Create Account with invalid data
Given User is on the Create Account page
When User enters invalid account information and saves
Then User should see appropriate validation messages

Scenario: Edit an existing Account
Given User is on the Accounts page
When User selects an account, updates details and saves
Then User should see the updated account details

Scenario: Search for an Account
Given User is on the Accounts page
When User searches using valid account information
Then User should see the matching account

Scenario: Filter Accounts
Given User is on the Accounts page
When User applies an account filter
Then User should see accounts matching the selected criteria

Scenario: View Account details
Given User is on the Accounts page
When User selects an account
Then User should see the account details

Scenario: Delete an Account
Given User is on the Accounts page
When User selects and deletes an account
Then User should see the account removed successfully

Scenario: Update Account information
Given User is viewing an existing account
When User changes the account information
Then User should see the updated information

Scenario: Verify Account associated with Lead
Given A lead has been converted to an account
When User opens the Accounts page
Then User should see the converted lead information associated with the account