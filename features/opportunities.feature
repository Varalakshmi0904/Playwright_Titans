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

  @tc04 @create
  Scenario: Verify opportunity is created with all mandatory fields filled
    Given User is on the Create Opportunity page
    When User enters all mandatory fields and clicks Save
    Then User should see the created Opportunity

  @tc05 @create
  Scenario Outline: Verify validation when a mandatory field is left blank
    Given User is on the Create Opportunity page
    When User leaves "<field>" blank and clicks Save
    Then User should see a required-field validation message for "<field>"

    Examples:
      | field               |
      | Opportunity Name    |
      | Account Name        |
      | Sales Stage         |
      | Expected Close Date |

  @tc6 @view
  Scenario: Verify clicking View Opportunities navigates correctly
    When User clicks View Opportunities
    Then User should be redirected to the Opportunities page

  @tc7 @view
  Scenario: Verify list view columns are displayed
    Given User is on the Opportunities page
    When User views the Opportunities page
    Then User should see the expected columns displayed

 @tc8 @import
  Scenario: Verify clicking Import Opportunities navigates correctly
    When User clicks "Import Opportunities"
    Then User should see the Import Opportunities page displayed with "Step 1: Upload Import File"






