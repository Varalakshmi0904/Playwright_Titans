Feature: Leads - Functional Validation

Scenario: Create a New Lead with valid details
Given User is on the Create Lead page
When User enters valid lead details and saves
Then User should see the lead created successfully

Scenario: Create Lead with mandatory fields missing
Given User is on the Create Lead page
When User leaves mandatory fields empty and saves
Then User should see appropriate validation messages

Scenario: Create Lead with invalid email
Given User is on the Create Lead page
When User enters an invalid email and saves
Then User should see email validation message

Scenario: Edit an existing Lead
Given User is on the Leads page
When User selects a lead, updates details and saves
Then User should see the updated lead details

Scenario: Search for a Lead
Given User is on the Leads page
When User searches using valid lead information
Then User should see the matching lead

Scenario: Filter Leads
Given User is on the Leads page
When User applies a lead filter
Then User should see leads matching the selected criteria

Scenario: View Lead details
Given User is on the Leads page
When User selects a lead
Then User should see the lead details

Scenario: Delete a Lead
Given User is on the Leads page
When User selects and deletes a lead
Then User should see the lead removed successfully

Scenario: Update Lead status
Given User is viewing an existing lead
When User changes the lead status
Then User should see the updated lead status

Scenario: Convert a Lead
Given User has a qualified lead
When User converts the lead
Then User should see the lead converted successfully