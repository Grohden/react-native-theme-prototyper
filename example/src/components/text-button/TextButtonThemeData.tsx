import { createThemable } from 'react-native-theme-prototyper';
import type { TextThemeData } from '../text/TextThemeData';
import type { ViewStyle } from 'react-native';

export type TextButtonThemeData = {
  text?: TextThemeData;
  touchable?: ViewStyle;
  underlayColor?: string;
  color?: string;
};

export const {
  Provider: TextButtonTheme,
  useComponentTheme: useTextButtonTheme,
} = createThemable<TextButtonThemeData>(null!);
