import {DesiredCapabilities} from '@wdio/types/build/Capabilities';

const browserName = (driver.capabilities as DesiredCapabilities).browserName;
export const isIos = driver.isIOS;
export const isAndroid = driver.isAndroid;
export const isMobileBrowser =
  (driver.isAndroid || driver.isIOS) && !!browserName;
export const isSafari = isMobileBrowser && browserName === 'safari';
export const isChrome = isMobileBrowser && browserName === 'chrome';
export const isMobile =
  (driver.isAndroid && !isChrome) || (driver.isIOS && !isSafari);
export const isDesktopWeb = !isMobileBrowser && !isMobile;

export const getPlatformSelector = (testID: string) => {
  if (!isMobile) {
    return `[data-testid="${testID}"]`;
  }

  // xPath locator for Android isn't ideal, but `id` selector strategy does not seem to work as expected
  return driver.isIOS
    ? `~${testID}`
    : `//*[@resource-id="${testID}" or @content-desc="${testID}"]`;
};
