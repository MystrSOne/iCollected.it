/**
 * Design tokens — expand per /src/docs/DESIGN_SYSTEM.md and checklist §5.
 */
export const colors = {
  surface: '#FAF8F5',
  textPrimary: '#1A1A1A',
  textMuted: '#6B6B6B',
  borderSubtle: '#E8E4DE',
  accent: '#2F5F4F',
} as const;

export type ColorKey = keyof typeof colors;
