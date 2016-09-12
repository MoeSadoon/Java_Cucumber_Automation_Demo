$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Contact.feature");
formatter.feature({
  "line": 1,
  "name": "Using Contact form",
  "description": "\r\nAs a user\r\nI want to contact someone\r\nSo they can help me with an issue on the site",
  "id": "using-contact-form",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3510989634,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.i_am_on_the_homepage()"
});
formatter.result({
  "duration": 2753467162,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Sending contact form as guest",
  "description": "",
  "id": "using-contact-form;sending-contact-form-as-guest",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I click on Contact Us",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I fill in form",
  "rows": [
    {
      "cells": [
        "Field",
        "Value"
      ],
      "line": 13
    },
    {
      "cells": [
        "Heading",
        "Customer service"
      ],
      "line": 14
    },
    {
      "cells": [
        "Email",
        "moe@test.com"
      ],
      "line": 15
    },
    {
      "cells": [
        "Message",
        "Hello, is anyone there?"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click Submit",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see a successful confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "Contact.i_click_on_Contact_Us()"
});
formatter.result({
  "duration": 192231977,
  "status": "passed"
});
formatter.match({
  "location": "Contact.i_fill_in_form(DataTable)"
});
formatter.result({
  "duration": 1716503197,
  "status": "passed"
});
formatter.match({
  "location": "Contact.i_click_Submit()"
});
formatter.result({
  "duration": 4125694865,
  "status": "passed"
});
formatter.match({
  "location": "Contact.i_should_see_a_successful_confirmation()"
});
formatter.result({
  "duration": 83968034,
  "status": "passed"
});
formatter.after({
  "duration": 43025005,
  "status": "passed"
});
formatter.before({
  "duration": 3876463359,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "CommonSteps.i_am_on_the_homepage()"
});
formatter.result({
  "duration": 2887843117,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Sending contact form as logged in user",
  "description": "",
  "id": "using-contact-form;sending-contact-form-as-logged-in-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I am logged in",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on Contact Us",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I fill in form as logged in user",
  "rows": [
    {
      "cells": [
        "Field",
        "Value"
      ],
      "line": 24
    },
    {
      "cells": [
        "Heading",
        "Customer service"
      ],
      "line": 25
    },
    {
      "cells": [
        "Message",
        "Hello, is anyone there?"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click Submit",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see a successful confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "SignIn.log_in()"
});
formatter.result({
  "duration": 4226901028,
  "status": "passed"
});
formatter.match({
  "location": "Contact.i_click_on_Contact_Us()"
});
formatter.result({
  "duration": 1364266415,
  "status": "passed"
});
formatter.match({
  "location": "Contact.i_fill_in_form_as_logged_in_user(DataTable)"
});
formatter.result({
  "duration": 570764077,
  "status": "passed"
});
formatter.match({
  "location": "Contact.i_click_Submit()"
});
formatter.result({
  "duration": 1032597741,
  "status": "passed"
});
formatter.match({
  "location": "Contact.i_should_see_a_successful_confirmation()"
});
formatter.result({
  "duration": 58576220,
  "status": "passed"
});
formatter.after({
  "duration": 29959913,
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
  "duration": 3115319354,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
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
formatter.match({
  "location": "CommonSteps.i_am_on_the_homepage()"
});
formatter.result({
  "duration": 2736509131,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.if_I_click_on()"
});
formatter.result({
  "duration": 301194786,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Sign in",
  "description": "",
  "id": "signing-in-to-the-website;sign-in",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I fill in my details and submit",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 13
    },
    {
      "cells": [
        "moe@test.com",
        "testtest"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should be directed to my account summary page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignIn.i_fill_in_my_details_and_submit(DataTable)"
});
formatter.result({
  "duration": 3664466831,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.i_should_be_directed_to_my_account_summary_page()"
});
formatter.result({
  "duration": 14827067,
  "status": "passed"
});
formatter.after({
  "duration": 9585782,
  "status": "passed"
});
formatter.before({
  "duration": 3632172892,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
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
formatter.match({
  "location": "CommonSteps.i_am_on_the_homepage()"
});
formatter.result({
  "duration": 2802888613,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.if_I_click_on()"
});
formatter.result({
  "duration": 196828918,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Should not be able to sign in with wrong credentials",
  "description": "",
  "id": "signing-in-to-the-website;should-not-be-able-to-sign-in-with-wrong-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I fill in my details and submit",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 19
    },
    {
      "cells": [
        "moe@test.com",
        "wrongpassword"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should get an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "SignIn.i_fill_in_my_details_and_submit(DataTable)"
});
formatter.result({
  "duration": 3194467632,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.i_should_get_an_error_message()"
});
formatter.result({
  "duration": 31016309,
  "status": "passed"
});
formatter.after({
  "duration": 9982029,
  "status": "passed"
});
});