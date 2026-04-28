import { Text, type TextProps } from 'react-native';

import { tokens } from '@/design';
import type { TypographyVariant } from '@/design/typography';

export type AppTextProps = TextProps & {
  variant?: TypographyVariant;
  /** Use muted body color */
  muted?: boolean;
};

export function AppText({
  variant = 'body',
  muted,
  style,
  children,
  ...rest
}: AppTextProps) {
  const color = muted ? tokens.colors.textMuted : tokens.colors.textPrimary;
  return (
    <Text style={[tokens.typography[variant], { color }, style]} {...rest}>
      {children}
    </Text>
  );
}
