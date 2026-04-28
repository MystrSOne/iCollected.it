import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';

import { tokens } from '@/design';
import { AppScreen, AppText } from '@/shared/components';

export type RootStackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeScreen() {
  return (
    <AppScreen>
      <View style={styles.center}>
        <AppText variant="title">iCollected.it</AppText>
        <AppText variant="bodySmall" muted style={styles.sub}>
          Foundation scaffold — see checklist.md
        </AppText>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: tokens.spacing.lg,
  },
  sub: {
    textAlign: 'center',
    marginTop: tokens.spacing.sm,
  },
});

const stackScreenOptions = {
  headerTitle: 'iCollected.it' as const,
  headerStyle: { backgroundColor: tokens.colors.surface },
  headerTintColor: tokens.colors.textPrimary,
  headerTitleStyle: {
    ...tokens.typography.body,
    fontWeight: '600' as const,
    color: tokens.colors.textPrimary,
  },
};

export function RootStack() {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
