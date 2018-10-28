$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Contact.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM create new contacts",
  "description": "",
  "id": "free-crm-create-new-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM a new contact scenario",
  "description": "",
  "id": "free-crm-create-new-contacts;free-crm-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and user enters password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.examples({
  "comments": [
    {
      "line": 9,
      "value": "#Then user in on home page"
    },
    {
      "line": 10,
      "value": "#Then user moves to new contact page"
    },
    {
      "line": 11,
      "value": "#Then user enters new contact \"\u003cfirstName\u003e\" and \"\u003clastName\u003e\" and \"\u003cposition\u003e\""
    },
    {
      "line": 12,
      "value": "#Then close the browser"
    }
  ],
  "line": 14,
  "name": "",
  "description": "",
  "id": "free-crm-create-new-contacts;free-crm-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstName",
        "lastName",
        "position"
      ],
      "line": 15,
      "id": "free-crm-create-new-contacts;free-crm-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "Uzzal",
        "Palma",
        "Manager"
      ],
      "line": 16,
      "id": "free-crm-create-new-contacts;free-crm-a-new-contact-scenario;;2"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "Nevan",
        "Palma",
        "Director"
      ],
      "line": 17,
      "id": "free-crm-create-new-contacts;free-crm-a-new-contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Free CRM a new contact scenario",
  "description": "",
  "id": "free-crm-create-new-contacts;free-crm-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and user enters password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.loginPage()"
});
formatter.result({
  "duration": 4208419821,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.title_of_login_page_is_FreeCRM()"
});
formatter.result({
  "duration": 14491786,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_enters_username_and_user_enters_password()"
});
formatter.result({
  "duration": 213337676,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_click_on_login_button()"
});
formatter.result({
  "duration": 2206310582,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM a new contact scenario",
  "description": "",
  "id": "free-crm-create-new-contacts;free-crm-a-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and user enters password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.loginPage()"
});
formatter.result({
  "duration": 3149641291,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.title_of_login_page_is_FreeCRM()"
});
formatter.result({
  "duration": 5016480,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_enters_username_and_user_enters_password()"
});
formatter.result({
  "duration": 198897821,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_click_on_login_button()"
});
formatter.result({
  "duration": 1984039600,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM login feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM login test scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and user enters password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.loginPage()"
});
formatter.result({
  "duration": 3315667694,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.title_of_login_page_is_FreeCRM()"
});
formatter.result({
  "duration": 5179922,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_enters_username_and_user_enters_password()"
});
formatter.result({
  "duration": 201455542,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_click_on_login_button()"
});
formatter.result({
  "duration": 1837791533,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_homepage()"
});
formatter.result({
  "duration": 4161749,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitions.close_the_browser()"
});
formatter.result({
  "duration": 98195093,
  "status": "passed"
});
});