import { StyleSheet, View, type ViewProps } from 'react-native';

import { tokens } from '@/design';

export type AppDividerProps = ViewProps & {
  /** Adds vertical margin using design spacing */
  withMargin?: boolean;
};

export function AppDivider({ withMargin, style, ...rest }: AppDividerProps) {
  return (
    <View
      accessibilityRole="none"
      style={[styles.rule, withMargin && styles.withMargin, style]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  rule: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: tokens.colors.borderSubtle,
  },
  withMargin: {
    marginVertical: tokens.spacing.sm,
  },
});
