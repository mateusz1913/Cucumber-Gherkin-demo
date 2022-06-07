import path from 'path';

import {sharedMobileConfig} from './wdio.shared.mobile.conf';

const androidConfig: WebdriverIO.Config = {
  ...sharedMobileConfig,
  // ============
  // Capabilities
  // ============
  capabilities: [
    {
      'appium:app': path.join(
        process.cwd(),
        './android/app/build/outputs/apk/release/app-release.apk',
      ),
      'appium:automationName': 'UiAutomator2',
      'appium:deviceName': 'Pixel_4_API_30',
      'appium:newCommandTimeout': 2400,
      'appium:noReset': false,
      'appium:orientation': 'PORTRAIT',
      'appium:platformVersion': '11',
      maxInstances: 1,
      platformName: 'Android',
    },
  ],
};

export const config = androidConfig;
