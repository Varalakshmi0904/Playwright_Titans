@meeting
Feature: Meetings - Functional Validations

Background:
  Given User is logged into the SuiteCRM Dashboard page

Scenario: Create a new Meeting TC001

Given User is on Meetings Create Page
When User creates a new meeting using Excel test data "TC001"
Then Meeting should be created successfully using Excel test data "TC001"

@meetingpastdate
Scenario: Verify meeting creation with a past start date TC002

Given User is on Meetings Create Page
When User enters a past start date using Excel test data "TC002" 
Then User should not see the meeting created using Excel test data "TC002"


