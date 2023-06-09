import React from 'react';
import { StyleSheet, View } from 'react-native';

const createSpacer = (size: number) => {
  const style = StyleSheet.create({
    container: {
      height: size,
    },
  });

  return () => <View style={style.container} />;
};

export const Spacer = {
  Tiny: createSpacer(10),
  Medium: createSpacer(16),
  Big: createSpacer(24),
  Huge: createSpacer(36),
};
