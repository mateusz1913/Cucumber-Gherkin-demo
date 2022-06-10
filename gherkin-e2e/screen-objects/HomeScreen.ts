import {homeTestIDs} from '../../src/testIDs';
import BaseScreen from './BaseScreen';

class HomeScreen extends BaseScreen {
  constructor() {
    super(homeTestIDs.homeScreen);
  }

  private get signOutButton() {
    return this.getElement(homeTestIDs.signOutButton);
  }

  clickSignOut = async () => {
    await (await this.signOutButton).click();
  };
}

export default new HomeScreen();
