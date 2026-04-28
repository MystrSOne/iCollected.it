import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/design';

export type RootStackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>iCollected.it</Text>
      <Text style={styles.sub}>Foundation scaffold — see checklist.md</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  sub: {
    fontSize: 15,
    color: colors.textMuted,
    textAlign: 'center',
  },
});

export function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTitle: 'iCollected.it' }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
