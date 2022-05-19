import {Given, When, Then} from '@wdio/cucumber-framework';
import HomeScreen from '../screen-objects/HomeScreen';
import LoginScreen from '../screen-objects/LoginScreen';

Given(/^The user is on Login page$/, async function () {
  await LoginScreen.openUrl();
  await LoginScreen.isShown();
});

When(/^User types (.+) in login input$/, async function (login: string) {
  await LoginScreen.enterLogin(login);
});

When(/^User types (.+) in password input$/, async function (password: string) {
  await LoginScreen.enterPassword(password);
});

When(/^User clicks sign in button$/, async function () {
  await LoginScreen.clickSignIn();
});

Then(/^User should land on Home page$/, async function () {
  await HomeScreen.isShown();
});

Then(/^App should display invalid credentials error$/, async function () {
  await LoginScreen.getElementByPartialText('Invalid credentials');
});
