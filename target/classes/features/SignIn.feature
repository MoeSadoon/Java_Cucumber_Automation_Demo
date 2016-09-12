Feature: Signing in to the website
  
  As a shopper
  I want to sign in to the page
  So I can start browsing

  Background: 
    Given I am on the homepage
    When If I click on Sign In

  Scenario: Sign in
    And I fill in my details and submit
      | email        | password |
      | moe@test.com | testtest |
    Then I should be directed to my account summary page

  Scenario: Should not be able to sign in with wrong credentials
    And I fill in my details and submit
      | email        | password      |
      | moe@test.com | wrongpassword |
    Then I should get an error message
