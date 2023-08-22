import { createThemable } from 'react-native-theme-prototyper';
import type { TypeScale } from '../../design-tokens';

export type TextThemeData = TypeScale & {
  textTransform?: 'uppercase';
  color?: string;
};

export const { Provider: TextTheme, useComponentTheme: useTextTheme } =
  createThemable<TextThemeData>(null!);
