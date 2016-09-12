$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Contact.feature");
formatter.feature({
  "line": 1,
  "name": "Using Contact form",
  "description": "\r\nAs a user\r\nI want to contact someone\r\nSo they can help me with an issue on the site",
  "id": "using-contact-form",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4049767131,
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
  "rows": [
    {
      "cells": [
        "Field",
        "Value"
      ],
      "line": 11
    },
    {
      "cells": [
        "Heading",
        "Customer service"
      ],
      "line": 12
    },
    {
      "cells": [
        "Email",
        "moe@test.com"
      ],
      "line": 13
    },
    {
      "cells": [
        "Message",
        "Hello, is anyone there?"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click Submit",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see a successful confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.i_am_on_the_homepage()"
});
formatter.result({
  "duration": 2886784745,
  "status": "passed"
});
formatter.match({
  "location": "Contact.i_click_on_Contact_Us()"
});
formatter.result({
  "duration": 195881558,
  "status": "passed"
});
formatter.match({
  "location": "Contact.i_fill_in_form(DataTable)"
});
formatter.result({
  "duration": 2380094175,
  "status": "passed"
});
formatter.match({
  "location": "Contact.i_click_Submit()"
});
formatter.result({
  "duration": 1665309103,
  "status": "passed"
});
formatter.match({
  "location": "Contact.i_should_see_a_successful_confirmation()"
});
formatter.result({
  "duration": 133267411,
  "status": "passed"
});
formatter.after({
  "duration": 28724950,
  "status": "passed"
});
formatter.before({
  "duration": 3254515064,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Sending contact form as logged in user",
  "description": "",
  "id": "using-contact-form;sending-contact-form-as-logged-in-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I am logged in",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Contact Us",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I fill in form as logged in user",
  "rows": [
    {
      "cells": [
        "Field",
        "Value"
      ],
      "line": 23
    },
    {
      "cells": [
        "Heading",
        "Customer service"
      ],
      "line": 24
    },
    {
      "cells": [
        "Message",
        "Hello, is anyone there?"
      ],
      "line": 25
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click Submit",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see a successful confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.i_am_on_the_homepage()"
});
formatter.result({
  "duration": 3752628445,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.log_in()"
});
formatter.result({
  "duration": 3799260365,
  "status": "passed"
});
formatter.match({
  "location": "Contact.i_click_on_Contact_Us()"
});
formatter.result({
  "duration": 125050914,
  "status": "passed"
});
formatter.match({
  "location": "Contact.i_fill_in_form_as_logged_in_user(DataTable)"
});
formatter.result({
  "duration": 3919142685,
  "status": "passed"
});
formatter.match({
  "location": "Contact.i_click_Submit()"
});
formatter.result({
  "duration": 1398693688,
  "status": "passed"
});
formatter.match({
  "location": "Contact.i_should_see_a_successful_confirmation()"
});
formatter.result({
  "duration": 67633014,
  "status": "passed"
});
formatter.after({
  "duration": 9489782,
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
  "duration": 2978138066,
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
  "duration": 4170579821,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.if_I_click_on()"
});
formatter.result({
  "duration": 213227936,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.i_fill_in_my_details_and_submit()"
});
formatter.result({
  "duration": 3785690384,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.i_should_be_directed_to_my_account_summary_page()"
});
formatter.result({
  "duration": 14261339,
  "status": "passed"
});
formatter.after({
  "duration": 9652152,
  "status": "passed"
});
});