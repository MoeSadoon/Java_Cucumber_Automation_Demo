$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Contact.feature");
formatter.feature({
  "line": 1,
  "name": "Using Contact form",
  "description": "\r\nAs a user\r\nI want to contact someone\r\nSo they can help me with an issue on the site",
  "id": "using-contact-form",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2954648081,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Sending contact form as guest",
  "description": "",
  "id": "using-contact-form;sending-contact-form-as-guest",
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
  "location": "CommonSteps.i_am_on_the_homepage()"
});
formatter.result({
  "duration": 4014363265,
  "status": "passed"
});
formatter.match({
  "location": "Contact.i_click_on_Contact_Us()"
});
formatter.result({
  "duration": 148022972,
  "status": "passed"
});
formatter.match({
  "location": "Contact.i_fill_in_form()"
});
formatter.result({
  "duration": 1860553427,
  "status": "passed"
});
formatter.match({
  "location": "Contact.i_click_Submit()"
});
formatter.result({
  "duration": 1092416432,
  "status": "passed"
});
formatter.match({
  "location": "Contact.i_should_see_a_successful_confirmation()"
});
formatter.result({
  "duration": 43283770,
  "status": "passed"
});
formatter.after({
  "duration": 9635955,
  "status": "passed"
});
formatter.before({
  "duration": 2631342076,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Sending contact form as logged in user",
  "description": "",
  "id": "using-contact-form;sending-contact-form-as-logged-in-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.i_am_on_the_homepage()"
});
formatter.result({
  "duration": 6895851416,
  "status": "passed"
});
formatter.after({
  "duration": 12576795,
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
formatter.before({
  "duration": 2550404168,
  "status": "passed"
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
  "location": "CommonSteps.i_am_on_the_homepage()"
});
formatter.result({
  "duration": 3010014028,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.if_I_click_on()"
});
formatter.result({
  "duration": 166274831,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.i_fill_in_my_details_and_submit()"
});
formatter.result({
  "duration": 3376073630,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.i_should_be_directed_to_my_account_summary_page()"
});
formatter.result({
  "duration": 19476946,
  "status": "passed"
});
formatter.after({
  "duration": 12069930,
  "status": "passed"
});
});