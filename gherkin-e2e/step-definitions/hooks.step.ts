import {After, Before} from '@wdio/cucumber-framework';
import {isMobile} from '../utils/DriverUtils';

/**
 * Global before & after hooks
 *
 * On mobile launches and terminates app between each scenario
 */

Before(function () {
  if (isMobile) {
    // If you have different app/bundle id on different platforms, remember to change it here
    driver.activateApp('com.gherkindemo');
  }
});

After(function () {
  if (isMobile) {
    // If you have different app/bundle id on different platforms, remember to change it here
    driver.terminateApp('com.gherkindemo');
  }
});
