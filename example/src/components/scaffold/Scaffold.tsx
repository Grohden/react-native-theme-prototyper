import React, { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

export const Scaffold = (props: {
  topAppBar: ReactNode;
  children: ReactNode;
}) => (
  <SafeAreaView style={styles.container}>
    {props.topAppBar}
    {props.children}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
