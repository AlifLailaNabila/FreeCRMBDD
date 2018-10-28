Feature: Free CRM create new contacts

Scenario Outline: Free CRM a new contact scenario

Given user is already in login page
When title of login page is FreeCRM
Then user enters username and user enters password
Then user click on login button
#Then user in on home page
#Then user moves to new contact page
#Then user enters new contact "<firstName>" and "<lastName>" and "<position>"
#Then close the browser

Examples:
|username   |password   |firstName  |lastName   |position   |
|naveenk    |test@123   |Uzzal      |Palma      |Manager    |
|naveenk    |test@123   |Nevan      |Palma      |Director   |