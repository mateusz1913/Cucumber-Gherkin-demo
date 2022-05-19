Feature: Login functionality

Background:
  Given The user is on Login page

Scenario: User signs in succesfully
  When User types <login> in login input
  And User types <password> in password input
  And User clicks sign in button
  Then User should land on Home page
Examples:
  | login   | password |
  | gherkin | test     |

Scenario: User provides incorrect credentials, when trying to sign in
  When User types "incorrectLogin" in login input
  And User types "incorrectPassword" in password input
  And User clicks sign in button
  Then App should display invalid credentials error
