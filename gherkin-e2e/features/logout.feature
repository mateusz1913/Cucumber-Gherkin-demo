Feature: Logout functionality

Scenario: User signs out successfully
  Given The user is logged in with "gherkin" login and "test" password
  Then User should land on Home page
  When User clicks sign out button
  Then User should land on Login page
