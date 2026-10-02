@quotes
Feature: Quotes Module

  Background:
    Given User is logged into the SuiteCRM Dashboard page

  @tc01 @dropdown
  Scenario: Verify Quotes dropdown menu
    When User hovers over Quotes
    Then User should see the Quotes dropdown menu

  @tc02 @create
  Scenario: Verify Create Quote navigation
    When User clicks Create Quote
    Then User should be redirected to the Create Quote page

  @tc03 @create
  Scenario: Verify quote is created with all mandatory fields
    Given User is on the Create Quote page
    When User creates a quote using data from Excel testcase "CreateQuotes"
    Then User should see the created quote for Excel testcase "CreateQuotes"
