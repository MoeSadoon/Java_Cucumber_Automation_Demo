Feature: Using Contact form
  
  As a user
  I want to contact someone
  So they can help me with an issue on the site

  Background: 
    Given I am on the homepage

  Scenario: Sending contact form as guest
    When I click on Contact Us
    And I fill in form
      | Field   | Value                   |
      | Heading | Customer service        |
      | Email   | moe@test.com            |
      | Message | Hello, is anyone there? |
    And I click Submit
    Then I should see a successful confirmation

  Scenario: Sending contact form as logged in user
    And I am logged in
    When I click on Contact Us
    And I fill in form as logged in user
      | Field   | Value                   |
      | Heading | Customer service        |
      | Message | Hello, is anyone there? |
    And I click Submit
    Then I should see a successful confirmation
