import { Pressable, type PressableProps, StyleSheet, Text } from 'react-native';

import { tokens } from '@/design';

export type AppButtonVariant = 'primary' | 'ghost';

export type AppButtonProps = Omit<PressableProps, 'children'> & {
  title: string;
  variant?: AppButtonVariant;
};

export function AppButton({ title, variant = 'primary', style, ...rest }: AppButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      style={(state) => [
        styles.base,
        variant === 'primary' ? styles.primary : styles.ghost,
        state.pressed && styles.pressed,
        typeof style === 'function' ? style(state) : style,
      ]}
      {...rest}
    >
      <Text
        style={[
          tokens.typography.body,
          variant === 'primary' ? styles.labelPrimary : styles.labelGhost,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: tokens.spacing.sm,
    paddingHorizontal: tokens.spacing.lg,
    borderRadius: tokens.radius.md,
    minHeight: 44,
  },
  primary: {
    backgroundColor: tokens.colors.accent,
  },
  ghost: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: tokens.colors.borderSubtle,
  },
  pressed: {
    opacity: 0.88,
  },
  labelPrimary: {
    color: tokens.colors.textOnAccent,
    fontWeight: '600',
  },
  labelGhost: {
    color: tokens.colors.textPrimary,
    fontWeight: '600',
  },
});
