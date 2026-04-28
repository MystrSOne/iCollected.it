import { forwardRef } from 'react';
import { StyleSheet, TextInput, type TextInputProps, View, type ViewStyle } from 'react-native';

import { tokens } from '@/design';

import { AppText } from './AppText';

export type AppInputProps = TextInputProps & {
  label?: string;
  error?: boolean;
  containerStyle?: ViewStyle;
};

export const AppInput = forwardRef<TextInput, AppInputProps>(function AppInput(
  { label, error, style, containerStyle, accessibilityLabel, ...rest },
  ref,
) {
  const a11yLabel = accessibilityLabel ?? label ?? rest.placeholder;
  return (
    <View style={containerStyle}>
      {label ? (
        <AppText variant="caption" muted style={styles.label}>
          {label}
        </AppText>
      ) : null}
      <TextInput
        ref={ref}
        accessibilityLabel={a11yLabel}
        placeholderTextColor={tokens.colors.textMuted}
        style={[styles.input, error && styles.inputError, style]}
        {...rest}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  label: {
    marginBottom: tokens.spacing.xs,
  },
  input: {
    minHeight: 44,
    paddingVertical: tokens.spacing.sm,
    paddingHorizontal: tokens.spacing.md,
    borderRadius: tokens.radius.md,
    borderWidth: 1,
    borderColor: tokens.colors.borderSubtle,
    backgroundColor: tokens.colors.surfaceElevated,
    color: tokens.colors.textPrimary,
    ...tokens.typography.body,
  },
  inputError: {
    borderColor: tokens.colors.danger,
  },
});
