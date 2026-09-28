@opportunities
Feature: Opportunities Module

  Background:
    Given User is logged into the SuiteCRM Dashboard page

  @tc01 @dropdown
  Scenario: Verify Opportunities dropdown menu
    When User hovers over Opportunities
    Then User should see the Opportunities dropdown menu

  @tc02 @create
  Scenario: Verify Create Opportunity navigation
    When User clicks Create Opportunity
    Then User should be redirected to the Create Opportunity page

  @tc03 @create
  Scenario Outline: Verify mandatory field indicators are displayed
    Given User is on the Create Opportunity page
    When User views the Create Opportunity page
    Then User should see a mandatory indicator next to "<field>"

    Examples:
      | field               |
      | Opportunity Name    |
      | Account Name        |
      | Sales Stage         |
      | Expected Close Date |

  