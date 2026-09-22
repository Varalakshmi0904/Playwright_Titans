Feature: Create an Account

Scenario: Create a New Account with valid details
Given User is on the Create Account page
When User enters valid account details and saves
Then User should see the account created successfully