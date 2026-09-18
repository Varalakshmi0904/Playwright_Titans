Feature: Create a Lead

Scenario: Create a New Lead with valid details
Given User is on the Create Lead page
When User enters valid lead details and saves
Then User should see the lead created successfully