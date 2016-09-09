Feature: Signing in to the website
  
  As a shopper
  I want to sign in to the page
  So I can start browsing

  Scenario: Sign in
    Given I am on the homepage
    When If I click on Sign In
    And I fill in my details and submit
    Then I should be directed to my account summary page
