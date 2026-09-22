@login
Feature: Login Page - Functional Validation

  Scenario Outline: Login with valid credentials
    Given User is on the Login page
    When User enters valid credentials from Excel for "<testCase>"
    Then User should be redirected to the SuiteCRM Dashboard

    Examples:
      | testCase         |
      | ValidCredentials |


  Scenario Outline: Login with invalid credentials
    Given User is on the Login page
    When User enters invalid credentials from Excel for "<testCase>"
    Then User should see "Login credentials incorrect" message

    Examples:
      | testCase        |
      | InvalidUsername |
      | InvalidPassword |
