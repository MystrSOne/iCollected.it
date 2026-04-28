import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { tokens } from '@/design';

import { AppButton } from './AppButton';
import { AppText } from './AppText';

export type EmptyStateProps = {
  illustration?: ReactNode;
  title: string;
  message: string;
  actionTitle?: string;
  onAction?: () => void;
};

export function EmptyState({
  illustration,
  title,
  message,
  actionTitle,
  onAction,
}: EmptyStateProps) {
  return (
    <View style={styles.root} accessibilityRole="none">
      {illustration ? <View style={styles.illustration}>{illustration}</View> : null}
      <AppText variant="titleLarge" style={styles.title}>
        {title}
      </AppText>
      <AppText variant="bodySmall" muted style={styles.message}>
        {message}
      </AppText>
      {actionTitle && onAction ? (
        <AppButton title={actionTitle} onPress={onAction} style={styles.action} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: tokens.spacing.lg,
    paddingVertical: tokens.spacing.xl,
  },
  illustration: {
    marginBottom: tokens.spacing.md,
  },
  title: {
    textAlign: 'center',
    marginBottom: tokens.spacing.sm,
  },
  message: {
    textAlign: 'center',
    marginBottom: tokens.spacing.md,
  },
  action: {
    marginTop: tokens.spacing.sm,
  },
});
