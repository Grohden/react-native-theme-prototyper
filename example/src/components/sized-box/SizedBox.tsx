import type { PropsWithChildren } from 'react';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

export const SizedBox = (
  props: PropsWithChildren<{
    width?: ViewStyle['width'];
    height?: ViewStyle['height'];
  }>
) => <View style={[styles.defaults, props]}>{props.children}</View>;

const styles = StyleSheet.create({
  defaults: {
    width: '100%',
    height: '100%',
  },
});
