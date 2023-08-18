import { createThemable } from 'react-native-theme-prototyper';
import type { TextThemeData } from '../text/TextThemeData';

export type TextButtonThemeData = {
  text?: TextThemeData;
  underlayColor?: string;
  color?: string;
};

export const {
  Provider: TextButtonTheme,
  useComponentTheme: useTextButtonTheme,
} = createThemable<TextButtonThemeData>(null!);
