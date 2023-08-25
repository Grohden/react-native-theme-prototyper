import { StyleSheet, View } from 'react-native';
import React from 'react';

export const Expanded = ({ children }: { children?: React.ReactNode }) => (
  <View style={styles.expanded}>{children}</View>
);

export const styles = StyleSheet.create({
  expanded: {
    flex: 1,
  },
});
