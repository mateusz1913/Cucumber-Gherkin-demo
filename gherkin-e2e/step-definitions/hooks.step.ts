import {After, Before} from '@wdio/cucumber-framework';
import {isMobile} from '../utils/DriverUtils';

/**
 * Global before & after hooks
 *
 * On mobile launches and terminates app between each scenario
 */

Before(async function () {
  if (isMobile) {
    // If you have different app/bundle id on different platforms, remember to change it here
    await driver.activateApp('com.gherkindemo');
  } else {
    await driver.url('/');
  }
});

After(async function () {
  if (isMobile) {
    // If you have different app/bundle id on different platforms, remember to change it here
    await driver.terminateApp('com.gherkindemo');
  }
});
