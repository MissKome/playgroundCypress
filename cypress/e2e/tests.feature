Feature: Blusalt Assessment

  Background:
    Given I am on the landing page

  Scenario: Client Side Delay

    And I click on the Client Side Delay
    Then I confirm I am on the Client Side Delay page
    Then I click on the Button Triggering Client Side Logic
    Then I should see the success message

  Scenario: Dynamic Table - Validate Chrome CPU usage matches summary

    Given I navigate to the dynamic table page
    Then I confirm I am on the Dynamic Table Page
    When I get the Chrome CPU value from the table and the summary
    Then Both CPU values should match



  Scenario: Sample App Login -  Login with valid credentials
    Given I visit the sample app page
    When I enter username "Kome" and password "pwd"
    And I click the login button
    Then I should see the login success message

  Scenario: Shadow DOM - Generate a GUID inside Shadow DOM
    When I click on the Shadow DOM link
    Then I click on the Generate Button and Copy to Clipboard
    Then I compare the value of clipboard to the value in the input field


  Scenario: Checking the Alert
    When I click on the Alert Link
    Then I should be navigated to the Alert Page
    Then I clicked on the Alert button
    Then I click on the OK on the alert prompt
    Then I clicked the confirm Button
    Then I click on the OK on the Confirm alert prompt

  Scenario: File Upload using the Browse file button
        When I click on the file upload link
        Then I upload the file clicking the Browse file button
        Then I Verify the file is uploaded successfully
    
  Scenario: File Upload using the Drag and Drop
        When I click on the file upload link
        Then I drag and drop the file
        Then I Verify the file is uploaded successfully using drag and drop
    
