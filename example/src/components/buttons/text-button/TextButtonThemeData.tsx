import { createThemable } from 'react-native-theme-prototyper';
import type { TextThemeData } from '../../text';
import type { Color } from '../../../design-tokens';

export type TextButtonThemeData = {
  shapeRadius: number;
  color: Color;
  container: { elevation: number };
  labelText: Omit<TextThemeData, 'color'>;
};

export const {
  Provider: TextButtonTheme,
  useComponentTheme: useTextButtonTheme,
} = createThemable<TextButtonThemeData>(null!);
