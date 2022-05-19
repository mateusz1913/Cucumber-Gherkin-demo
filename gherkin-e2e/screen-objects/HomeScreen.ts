import {homeTestIDs} from '../../src/testIDs';
import BaseScreen from './BaseScreen';

class HomeScreen extends BaseScreen {
  constructor() {
    super(homeTestIDs.homeScreen);
  }
}

export default new HomeScreen();
