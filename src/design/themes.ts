import { colors, colorsDark } from './colors';
import { radius } from './radius';
import { shadows } from './shadows';
import { spacing } from './spacing';
import { typography } from './typography';

/** Composed theme — add more slots as screens need them. Dark is ready for a future ThemeProvider. */
export const lightTheme = {
  mode: 'light' as const,
  colors,
  spacing,
  radius,
  typography,
  shadows,
};

export const darkTheme = {
  mode: 'dark' as const,
  colors: colorsDark,
  spacing,
  radius,
  typography,
  shadows,
};

export type Theme = typeof lightTheme;
