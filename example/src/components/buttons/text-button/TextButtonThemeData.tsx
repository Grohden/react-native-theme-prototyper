import { createThemable } from 'react-native-theme-prototyper';
import type { TextThemeData } from '../../text';

export type TextButtonThemeData = {
  shapeRadius: number;
  color: string;
  container: { elevation: number };
  labelText: Omit<TextThemeData, 'color'>;
};

export const {
  Provider: TextButtonTheme,
  useComponentTheme: useTextButtonTheme,
} = createThemable<TextButtonThemeData>(null!);
