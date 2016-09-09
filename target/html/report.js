$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Contact.feature");
formatter.feature({
  "line": 1,
  "name": "Using Contact form",
  "description": "\r\nAs a user\r\nI want to contact someone\r\nSo they can help me with an issue on the site",
  "id": "using-contact-form",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Sending contact form",
  "description": "",
  "id": "using-contact-form;sending-contact-form",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on Contact Us",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I fill in form",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click Submit",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see a successful confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "SignIn.i_am_on_the_homepage()"
});
formatter.result({
  "duration": 6711174206,
  "status": "passed"
});
formatter.match({
  "location": "Contact.i_click_on_Contact_Us()"
});
formatter.result({
  "duration": 208190502,
  "status": "passed"
});
formatter.match({
  "location": "Contact.i_fill_in_form()"
});
formatter.result({
  "duration": 1877548989,
  "status": "passed"
});
formatter.match({
  "location": "Contact.i_click_Submit()"
});
formatter.result({
  "duration": 1282423025,
  "status": "passed"
});
formatter.match({
  "location": "Contact.i_should_see_a_successful_confirmation()"
});
formatter.result({
  "duration": 23510922,
  "status": "passed"
});
formatter.uri("SignIn.feature");
formatter.feature({
  "line": 1,
  "name": "Signing in to the website",
  "description": "\r\nAs a shopper\r\nI want to sign in to the page\r\nSo I can start browsing",
  "id": "signing-in-to-the-website",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Sign in",
  "description": "",
  "id": "signing-in-to-the-website;sign-in",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "If I click on Sign In",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I fill in my details and submit",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should be directed to my account summary page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignIn.i_am_on_the_homepage()"
});
formatter.result({
  "duration": 2063511729,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.if_I_click_on()"
});
formatter.result({
  "duration": 126816050,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.i_fill_in_my_details_and_submit()"
});
formatter.result({
  "duration": 3770173934,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.i_should_be_directed_to_my_account_summary_page()"
});
formatter.result({
  "duration": 11810375,
  "status": "passed"
});
});