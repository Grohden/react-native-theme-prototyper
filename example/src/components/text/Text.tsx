import type { TextStyle as RNTextStyle } from 'react-native';
import { StyleSheet, Text as RNText } from 'react-native';
import type { ComponentProps } from 'react';
import React from 'react';
import { createThemable } from 'react-native-theme-prototyper';

export type TextThemeData = RNTextStyle;

export const { Provider: TextTheme, useComponentTheme: useTextTheme } =
  createThemable<TextThemeData>(null!);

export const Text = ({ style, ...rest }: ComponentProps<typeof RNText>) => {
  const theme = useTextTheme();

  return <RNText style={StyleSheet.flatten([theme, style])} {...rest} />;
};
