@login
Feature: Login Page - Functional Validation

  Scenario: Login with valid credentials
    Given User is on the Login page
    When User enters the valid credentials from Excel and click login
    Then User should be redirected to the SuiteCRM Dashboard

  @login @negative
  Scenario Outline: Login with invalid credentials
    Given User is on the Login page
    When User enters invalid credentials from Excel for "<testCase>" and click login
    Then User should see "Login credentials incorrect" message

    Examples:
      | testCase        |
      | InvalidUsername |
      | InvalidPassword |
