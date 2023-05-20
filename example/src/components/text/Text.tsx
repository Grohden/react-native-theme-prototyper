import { StyleSheet, Text as RNText } from 'react-native';
import type { ComponentProps } from 'react';
import { useTextTheme } from './TextTheme';
import React from 'react';

export const Text = ({ style, ...rest }: ComponentProps<typeof RNText>) => {
  const theme = useTextTheme();

  return <RNText style={StyleSheet.flatten([theme, style])} {...rest} />;
};
