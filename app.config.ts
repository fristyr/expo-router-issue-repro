import {ConfigContext, ExpoConfig} from '@expo/config';

// If you want to change app version, please change only this object
// So we no longer need to find version number and code
// To prevent old version/code
const versions = {
  number: '1.0.0',
  code: 1,
  app_name: 'Router test',
  app_slug: 'router-test',
  app_scheme: 'routertest',
  bundle_idf: 'com.routesttest.com',
};

export default ({config}: ConfigContext): ExpoConfig => ({
  ...config,
  name: versions.app_name,
  version: versions.number,
  slug: versions.app_slug,
  scheme: versions.app_scheme,
  jsEngine: 'hermes',
  ios: {
    bundleIdentifier: versions.bundle_idf,
    buildNumber: versions.number,
    config: {},
    supportsTablet: true,
    
  },
  android: {
    package: versions.bundle_idf,
    permissions: [],
    versionCode: versions.code,
    useNextNotificationsApi: true,
  },
  assetBundlePatterns: ['**/*'],
  platforms: ['ios', 'android'],


 
});
