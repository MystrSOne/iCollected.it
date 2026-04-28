import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { tokens } from '@/design';

import { AppText } from './AppText';

export type LoadingStateProps = {
  message?: string;
};

export function LoadingState({ message }: LoadingStateProps) {
  return (
    <View style={styles.root} accessibilityRole="progressbar">
      <ActivityIndicator size="large" color={tokens.colors.accent} />
      {message ? (
        <AppText variant="bodySmall" muted style={styles.message}>
          {message}
        </AppText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: tokens.spacing.xl,
  },
  message: {
    marginTop: tokens.spacing.md,
    textAlign: 'center',
  },
});
