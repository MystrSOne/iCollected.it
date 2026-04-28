import { Platform } from 'react-native';

export const platform = {
  os: Platform.OS,
  isWeb: Platform.OS === 'web',
  isIos: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
} as const;
