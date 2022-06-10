import {Given, Then, When} from '@wdio/cucumber-framework';
import HomeScreen from '../screen-objects/HomeScreen';
import LoginScreen from '../screen-objects/LoginScreen';

Given(
  'The user is logged in with {string} login and {string} password',
  async function (login, password) {
    await LoginScreen.waitForIsShown();
    await LoginScreen.enterLogin(login);
    await LoginScreen.enterPassword(password);
    await LoginScreen.clickSignIn();
  },
);

When(/^User clicks sign out button$/, async function () {
  await HomeScreen.clickSignOut();
});

Then(/^User should land on Login page$/, async function () {
  await LoginScreen.waitForIsShown();
  await driver.pause(2000);
});
