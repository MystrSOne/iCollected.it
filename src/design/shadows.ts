import type { ViewStyle } from 'react-native';

import { colors } from './colors';

/** Elevation / shadow presets (checklist §5). */
export const shadows = {
  none: {} satisfies ViewStyle,
  card: {
    shadowColor: colors.textPrimary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  } satisfies ViewStyle,
} as const;
