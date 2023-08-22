import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

export const Scaffold = (props: {
  topAppBar: ReactNode;
  children: ReactNode;
}) => {
  return (
    <View style={styles.container}>
      {props.topAppBar}
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
