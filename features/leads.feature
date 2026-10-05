@leads
Feature: SuiteCRM Leads

  Background:
    Given User is logged into the SuiteCRM Dashboard page

  Scenario: Create a new lead - TC01
    Given User is on the Leads page
    When User creates a new lead using Excel test data "TC01"
    Then Lead should be created successfully using Excel test data "TC01"

  Scenario: Create a new lead - TC02
    Given User is on the Leads page
    When User creates a new lead with mandatory fields using Excel test data "TC02"
    Then Lead should be created successfully using Excel test data "TC02"

  Scenario: View an existing lead - TC03
    Given User is on the Leads page
    When User clicks on View Leads and selects a lead using Excel test data "TC03"
    Then Lead details should be displayed using Excel test data "TC03"
  
  Scenario: Edit an existing lead - TC04
    Given User is on the Leads page
    When User clicks on View Leads and selects a lead using Excel test data "TC04"
    When User edits the lead using Excel test data "TC04"
    Then Lead should be updated successfully using Excel test data "TC04"

  Scenario: Delete an existing lead - TC05
  Given User is on the Leads page
  When User clicks on View Leads and selects the lead checkbox using Excel test data "TC05"
  When User deletes the selected lead
  Then Lead should be deleted successfully using Excel test data "TC05"