import path from 'path';

import {sharedMobileConfig} from './wdio.shared.mobile.conf';

const iosConfig: WebdriverIO.Config = {
  ...sharedMobileConfig,
  // ============
  // Capabilities
  // ============
  capabilities: [
    {
      'appium:app': path.join(
        process.cwd(),
        './ios/build/Build/Products/Release-iphonesimulator/gherkinDemo.app',
      ),
      'appium:automationName': 'XCUITest',
      'appium:deviceName': 'iPhone 8',
      'appium:newCommandTimeout': 240,
      'appium:noReset': false,
      'appium:orientation': 'PORTRAIT',
      'appium:platformVersion': '14.5',
      maxInstances: 1,
      platformName: 'iOS',
    },
  ],
};

export const config = iosConfig;
