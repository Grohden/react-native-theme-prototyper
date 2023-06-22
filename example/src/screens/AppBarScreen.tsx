import { AppBar, AppBarTheme, Text, useAppBarTheme } from '../components';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';

export const AppBarScreen = () => {
  const barTheme = useAppBarTheme();

  return (
    <View style={styles.container}>
      <AppBar>
        <Text>Using default root theme</Text>
      </AppBar>
      <AppBarTheme
        value={{
          titleStyle: { ...barTheme.titleStyle, color: 'blue' },
          border: { ...barTheme.border, thickness: 1 },
        }}
      >
        <AppBar>
          <Text>Using app bar theme</Text>
        </AppBar>
      </AppBarTheme>
      <AppBar>
        <Text style={{ ...barTheme.titleStyle, color: 'green' }}>
          Inline customization
        </Text>
      </AppBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
});
