Feature: SuiteCRM Leads

  Background:
    Given User is logged into the SuiteCRM Dashboard page

  Scenario: Create a new lead - TC001
    Given User is on the Create Lead page
    When User creates a new lead using Excel test data "TC001"
    Then Lead should be created successfully using Excel test data "TC001"