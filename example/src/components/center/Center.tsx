import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Center = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.view}>{children}</View>
);

const styles = StyleSheet.create({
  view: {
    alignSelf: 'center',
  },
});
