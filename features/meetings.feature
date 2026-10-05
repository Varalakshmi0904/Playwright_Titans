@meeting
Feature: Meetings - Functional Validations

Background:
  Given User is logged into the SuiteCRM Dashboard page

Scenario: Create a new Meeting

Given User is on Meetings Create Page
When User creates a new meeting using Excel test data "TC001"
Then Meeting should be created successfully using Excel test data "TC001"

# @paststartdate
# Scenario: Verify meeting creation with a past start date

# Given User is on Meetings Create Page
# When User enters a past start date 
# Then User should not see the meeting created


