import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { tokens } from '@/design';

import { AppText } from './AppText';

export type AppHeaderProps = {
  left?: ReactNode;
  title?: ReactNode;
  right?: ReactNode;
  /** Describes the bar for screen readers when title is absent or non-textual */
  accessibilityLabel?: string;
};

export function AppHeader({ left, title, right, accessibilityLabel }: AppHeaderProps) {
  const titleNode =
    typeof title === 'string' ? (
      <AppText variant="title" numberOfLines={1} accessibilityRole="header">
        {title}
      </AppText>
    ) : (
      title
    );

  return (
    <View
      accessibilityRole="none"
      accessibilityLabel={accessibilityLabel}
      style={styles.root}
    >
      <View style={styles.side}>{left}</View>
      <View style={styles.center}>{titleNode}</View>
      <View style={[styles.side, styles.sideEnd]}>{right}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 44,
    paddingHorizontal: tokens.spacing.md,
    backgroundColor: tokens.colors.surface,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: tokens.colors.borderSubtle,
  },
  side: {
    flex: 1,
    minWidth: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  sideEnd: {
    alignItems: 'flex-end',
  },
  center: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: tokens.spacing.sm,
  },
});
