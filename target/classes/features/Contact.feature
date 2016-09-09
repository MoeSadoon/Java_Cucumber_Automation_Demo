Feature: Using Contact form
  
  As a user
  I want to contact someone
  So they can help me with an issue on the site

  Scenario: Sending contact form
    Given I am on the homepage
    When I click on Contact Us
    And I fill in form
    And I click Submit
    Then I should see a successful confirmation
