import type { TextStyle } from 'react-native';

/** Typography variants — sizes/weights only; color from theme at use site (checklist §5). */
export const typography = {
  title: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '600',
  } satisfies TextStyle,
  titleLarge: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '600',
  } satisfies TextStyle,
  body: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
  } satisfies TextStyle,
  bodySmall: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '400',
  } satisfies TextStyle,
  caption: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '400',
  } satisfies TextStyle,
} as const;

export type TypographyVariant = keyof typeof typography;
