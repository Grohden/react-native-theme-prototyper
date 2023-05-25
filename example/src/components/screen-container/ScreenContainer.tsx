import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { StyleSheet } from 'react-native';

export const ScreenContainer = (props: { children: React.ReactNode }) => (
  <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
});
