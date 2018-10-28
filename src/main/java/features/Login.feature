Feature: Free CRM login feature

Scenario: Free CRM login test scenario

Given user is already in login page
When title of login page is FreeCRM
Then user enters username and user enters password
Then user click on login button
Then user is on homepage
Then close the browser


Scenario Outline: Free CRM login test scenario

Given user is already login page
When title of login page is Free CRM
Then user enters "<username>" user enters "<password>"
Then user clicks on login button
Then user in on home page
Then close the browser


Examples:
|username   |password   |
|naveenk    |test@123   |