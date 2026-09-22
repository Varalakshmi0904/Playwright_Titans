Feature: Opportunities Module

Background:
  Given User should be logged into the SuiteCRM Dashboard page




  Scenario: Verify Opportunities dropdown menu
    When User hovers over "Opportunities"
    Then User should see the Opportunities dropdown menu


 

  Scenario: Verify Create Opportunity navigation
    When User clicks "Create Opportunity"
    Then User should be redirected to the Create Opportunity page


  Scenario: Verify Create Opportunity page title
    Given User is on the Create Opportunity page
    Then User should see the "Create Opportunity" page title


  Scenario: Verify mandatory field indicators are displayed
    Given User is on the Create Opportunity page
    Then User should see mandatory field indicators


  