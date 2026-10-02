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

  # @tc06 @create
  # Scenario: Verify Opportunity Amount accepts only numeric input
  #   Given User is on the Create Opportunity page
  #   When User enters a non-numeric value in Opportunity Amount and clicks Save
  #   Then User should see an invalid-format validation message

  # @tc07 @create
  # Scenario: Verify Expected Close Date using the date picker
  #   Given User is on the Create Opportunity page
  #   When User selects a date using the calendar icon next to "Expected Close Date"
  #   Then The selected date should populate the field in yyyy-mm-dd format

  # @tc08 @create
  # Scenario: Verify Account Name search returns matching results
  #   Given User is on the Create Opportunity page
  #   When User clicks the dropdown arrow next to "Account Name" and enters a partial account name
  #   Then User should see matching accounts displayed

  # @tc09 @create
  # Scenario: Verify searching for a non-existent Account shows no results
  #   Given User is on the Create Opportunity page
  #   When User clicks the dropdown arrow next to "Account Name" and enters a name that does not match any account
  #   Then User should see a "No results matching" message

  # @tc10 @create
  # Scenario: Verify user can cancel Opportunity creation
  #   Given User is on the Create Opportunity page
  #   When User clicks the "Cancel" button
  #   Then User is redirected to the Opportunities list

  # @tc11 @view
  # Scenario: Verify clicking View Opportunities navigates correctly
  #   When User clicks View Opportunities
  #   Then User should be redirected to the Opportunities page

  # @tc12 @view
  # Scenario: Verify Opportunities page title is displayed
  #   Given User is on the Opportunities page
  #   When User views the Opportunities page
  #   Then User should see the page title OPPORTUNITIES

  # @tc13 @view
  # Scenario: Verify list view columns are displayed
  #   Given User is on the Opportunities page
  #   When User views the Opportunities page
  #   Then User should see the expected columns displayed

  # @tc14 @view
  # Scenario: Verify pagination controls work
  #   Given User is on the Opportunities page with more than 20 opportunity records
  #   When User clicks the "Next" (>) pagination control
  #   Then User should see the next set of 20 opportunity records

  # @tc15 @view
  # Scenario: Verify Quick Charts panel is displayed
  #   Given User is on the Opportunities page
  #   When User views the right-hand side panel
  #   Then User should see a "Quick Charts" panel showing "Pipeline By Sales Stage"

  # @tc16 @view
  # Scenario: Verify checkbox selection
  #   Given User is on the Opportunities page
  #   When User selects all Opportunity checkboxes
  #   Then User should see all checkboxes selected

  # @tc18 @import
  # Scenario: Verify clicking Import Opportunities navigates correctly
  #   When User clicks "Import Opportunities"
  #   Then User should see the Import Opportunities page displayed with "Step 1: Upload Import File"

  # @tc19 @import
  # Scenario: Verify "Download Import File Template" link is displayed
  #   Given User is on the Import Opportunities page
  #   When User views the page
  #   Then User should see the "Download Import File Template" link with an information icon

  # @tc20 @import
  # Scenario: Verify "Choose File" button is displayed
  #   Given User is on the Import Opportunities page
  #   When User views the Select File section
  #   Then User should see the "Choose File" button displayed

  # @tc21 @import
  # Scenario: Verify user can select a file to upload
  #   Given User is on the Import Opportunities page
  #   When User clicks "Choose File" and selects a valid file from the computer
  #   Then The selected file name should be displayed next to the "Choose File" button

  # @tc22 @import
  # Scenario: Verify "Create new records only" option is selected by default
  #   Given User is on the Import Opportunities page
  #   When User views the "What would you like to do with the imported data?" section
  #   Then User should see "Create new records only" selected by default

  # @tc23 @import
  # Scenario: Verify "Next >" button is displayed
  #   Given User is on the Import Opportunities page
  #   When User views the page
  #   Then The "Next >" button should be displayed

  # @tc24 @import
  # Scenario: Verify clicking "Next >" after selecting a valid file
  #   Given User has selected a valid import file
  #   When User clicks "Next >"
  #   Then User should see the Confirm Import message

  # @tc25 @import
  # Scenario: Verify uploading an invalid file type shows an error
  #   Given User is on the Import Opportunities page
  #   When User selects a file with an unsupported format and clicks "Next >"
  #   Then User should see a file-format error message displayed
