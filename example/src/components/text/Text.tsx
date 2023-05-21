import { StyleSheet, Text as RNText } from 'react-native';
import type { ComponentProps } from 'react';
import React from 'react';
import { useTextTheme } from './TextThemeData';

export const Text = ({ style, ...rest }: ComponentProps<typeof RNText>) => {
  const theme = useTextTheme();

  return <RNText style={StyleSheet.flatten([theme, style])} {...rest} />;
};
