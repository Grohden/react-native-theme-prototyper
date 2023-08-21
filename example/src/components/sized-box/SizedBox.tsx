import type { PropsWithChildren } from 'react';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const SizedBox = (
  props: PropsWithChildren<{
    width?: string | number;
    height?: string | number;
  }>
) => <View style={[styles.defaults, props]}>{props.children}</View>;

const styles = StyleSheet.create({
  defaults: {
    width: '100%',
    height: '100%',
  },
});
