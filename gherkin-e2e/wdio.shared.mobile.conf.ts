import {sharedConfig} from './wdio.shared.conf';

export const sharedMobileConfig: WebdriverIO.Config = {
  ...sharedConfig,
  port: 4723,
  path: '/wd/hub/',
  services: (sharedConfig?.services ? sharedConfig.services : []).concat([
    [
      'appium',
      {
        args: {
          // This is needed to tell Appium that we can execute local ADB commands
          // and to automatically download the latest version of ChromeDriver
          relaxedSecurity: true,
        },
        // This will use the globally installed version of Appium
        command: 'appium',
      },
    ],
  ]),
};
