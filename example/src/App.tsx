import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { AppBar } from './components/app-bar/AppBar';
import { Text } from './components/text/Text';
import { AppTheme } from './components/app-theme/AppTheme';
import { AppBarTheme, useAppBarTheme } from './components/app-bar/AppBarTheme';

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
          titleStyle: barTheme.titleStyle.copyWith({ color: 'blue' }),
          border: barTheme.border.copyWith({ thickness: 1 }),
        }}
      >
        <AppBar>
          <Text>Using app bar theme</Text>
        </AppBar>
      </AppBarTheme>
      <AppBar>
        <Text style={barTheme.titleStyle.copyWith({ color: 'green' }).value}>
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
