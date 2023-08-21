import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

export const Center = ({ children }: { children: ReactNode }) => (
  <View style={styles.view}>{children}</View>
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
