import type { ReactNode } from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { tokens } from '@/design';

export type AppScreenProps = ViewProps & {
  children: ReactNode;
  /** When false, only applies horizontal safe area (e.g. under custom header). Default true. */
  safeTop?: boolean;
};

export function AppScreen({ children, style, safeTop = true, ...rest }: AppScreenProps) {
  const edges = safeTop ? (['top', 'left', 'right', 'bottom'] as const) : (['left', 'right', 'bottom'] as const);
  return (
    <SafeAreaView style={[styles.safe, style]} edges={edges} {...rest}>
      <View style={styles.fill}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: tokens.colors.surface,
  },
  fill: {
    flex: 1,
  },
});
