Feature: SuiteCRM Accounts

  Background:
    Given User is logged into the SuiteCRM Dashboard page

  Scenario: Create a new account with mandatory fields - TC01
    Given User is on the Accounts page
    When User creates a new account with mandatory fields using Excel test data "TC01"
    Then Account should be created successfully using Excel test data "TC01"

  @regression
  Scenario: Create a new account - TC02
    Given User is on the Accounts page
    When User creates a new account using Excel test data "TC02"
    Then Account should be created successfully using Excel test data "TC02"

  Scenario: View an existing account - TC03
    Given User is on the Accounts page
    When User clicks on View Accounts and selects an account using Excel test data "TC03"
    Then Account details should be displayed using Excel test data "TC03"

  Scenario: Edit an existing account - TC04
    Given User is on the Accounts page
    When User clicks on View Accounts and selects an account using Excel test data "TC04"
    When User edits the account using Excel test data "TC04"
    Then Account should be updated successfully using Excel test data "TC04"



