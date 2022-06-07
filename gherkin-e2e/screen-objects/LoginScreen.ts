import {loginTestIDs} from '../../src/testIDs';
import {isDesktopWeb} from '../utils/DriverUtils';
import BaseScreen from './BaseScreen';

class LoginScreen extends BaseScreen {
  constructor() {
    super(loginTestIDs.loginScreen);
  }

  private get loginInput() {
    return this.getElement(loginTestIDs.loginInput);
  }

  private get passwordInput() {
    return this.getElement(loginTestIDs.passwordInput);
  }

  private get signInButton() {
    return this.getElement(loginTestIDs.signInButton);
  }

  openUrl = async () => {
    if (isDesktopWeb) {
      await browser.url('/');
    }
  };

  enterLogin = async (login: string) => {
    await (await this.loginInput).setValue(login);
  };

  enterPassword = async (password: string) => {
    await (await this.passwordInput).setValue(password);
    // driver.hideKeyboard does not work on iOS, so instead just click "anywhere" outside
    await (await this.getElement(loginTestIDs.loginScreen)).click();
  };

  clickSignIn = async () => {
    await (await this.signInButton).click();
  };
}

export default new LoginScreen();
