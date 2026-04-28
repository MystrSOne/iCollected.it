/**
 * Semantic color roles — light and dark (checklist §5).
 * Warm archive / notebook feel per product spec.
 */
export const colors = {
  surface: '#FAF8F5',
  surfaceElevated: '#FFFFFF',
  textPrimary: '#1A1A1A',
  textMuted: '#6B6B6B',
  borderSubtle: '#E8E4DE',
  accent: '#2F5F4F',
  accentMuted: '#4A7A6A',
  /** Text / icons on top of `accent` fills */
  textOnAccent: '#FAF8F5',
  /** Validation / destructive emphasis (borders, icons) — keep subdued per brand */
  danger: '#9B4540',
  overlay: 'rgba(26, 26, 26, 0.45)',
} as const;

export const colorsDark = {
  surface: '#121210',
  surfaceElevated: '#1C1C18',
  textPrimary: '#F4F1EA',
  textMuted: '#9A958C',
  borderSubtle: '#2E2E28',
  accent: '#6BA88E',
  accentMuted: '#558A74',
  textOnAccent: '#121210',
  danger: '#E08980',
  overlay: 'rgba(0, 0, 0, 0.55)',
} as const;

export type ColorScheme = typeof colors;
