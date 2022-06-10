import {Given, When, Then} from '@wdio/cucumber-framework';
import HomeScreen from '../screen-objects/HomeScreen';
import LoginScreen from '../screen-objects/LoginScreen';

Given(/^The user is on Login page$/, async function () {
  await LoginScreen.waitForIsShown();
});

When('User types {string} in login input', async function (login: string) {
  await LoginScreen.enterLogin(login);
});

When(
  'User types {string} in password input',
  async function (password: string) {
    await LoginScreen.enterPassword(password);
  },
);

When(/^User clicks sign in button$/, async function () {
  await LoginScreen.clickSignIn();
});

Then(/^User should land on Home page$/, async function () {
  await HomeScreen.waitForIsShown();
  await driver.pause(1000);
});

Then(/^App should display invalid credentials error$/, async function () {
  await LoginScreen.getElementByPartialText('Invalid credentials');
  await driver.pause(5000);
});
