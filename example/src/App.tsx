import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import {
  AppBar,
  AppBarTheme,
  AppTheme,
  Text,
  useAppBarTheme,
} from './components';
import { copyWith } from 'react-native-theme-prototyper';

export default function App() {
  return (
    <AppTheme>
      <AfterTheme />
    </AppTheme>
  );
}

const AfterTheme = () => {
  const barTheme = useAppBarTheme();

  return (
    <View style={styles.container}>
      <AppBar>
        <Text>Using default root theme</Text>
      </AppBar>
      <AppBarTheme
        value={{
          titleStyle: copyWith(barTheme.titleStyle, { color: 'blue' }),
          border: copyWith(barTheme.border, { thickness: 1 }),
        }}
      >
        <AppBar>
          <Text>Using app bar theme</Text>
        </AppBar>
      </AppBarTheme>
      <AppBar>
        <Text style={copyWith(barTheme.titleStyle, { color: 'green' })}>
          Inline customization
        </Text>
      </AppBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
