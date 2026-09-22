@login
Feature: Login Page - Functional Validation

  Scenario: Verify successful login
    Given User is on the Login page
    When User clicks the Log In button with valid credentials
    Then User should be redirected to the Home page

  
  Scenario Outline: Login with invalid credentials
    Given User is on the Login page
    When the user enters invalid credentials for "<testCase>"
    Then the user should see "Login credentials incorrect" message
    Examples:
      | testCase        |
      | InvalidUsername |
      | InvalidPassword |
