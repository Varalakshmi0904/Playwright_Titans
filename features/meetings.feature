@meeting
Feature: Meetings - Functional Validations

Background:
  Given User is logged into the SuiteCRM Dashboard page

Scenario: Create a new Meeting

Given User is on Meetings Create Page
When User clicks on save entering all valid details using Excel test data "CreateMeeting"
Then User should see meeting creating successfully using Excel test data "CreateMeeting"
