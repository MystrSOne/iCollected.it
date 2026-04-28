import type { ReactNode } from 'react';
import { Pressable, StyleSheet, View, type ViewProps } from 'react-native';

import { tokens } from '@/design';

export type AppCardProps = ViewProps & {
  children: ReactNode;
  onPress?: () => void;
};

export function AppCard({ children, onPress, style, ...rest }: AppCardProps) {
  if (onPress) {
    return (
      <Pressable
        accessibilityRole="button"
        onPress={onPress}
        style={({ pressed }) => [styles.card, pressed && styles.pressed, style]}
        {...rest}
      >
        <View style={styles.inner}>{children}</View>
      </Pressable>
    );
  }

  return (
    <View style={[styles.card, style]} {...rest}>
      <View style={styles.inner}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: tokens.radius.md,
    backgroundColor: tokens.colors.surfaceElevated,
    ...tokens.shadows.card,
  },
  inner: {
    padding: tokens.spacing.md,
  },
  pressed: {
    opacity: 0.88,
  },
});
