import type { TextStyle as RNTextStyle } from 'react-native';
import { createThemable } from 'react-native-theme-prototyper';

export type TextThemeData = RNTextStyle;

export const { Provider: TextTheme, useComponentTheme: useTextTheme } =
  createThemable<TextThemeData>(null!);
