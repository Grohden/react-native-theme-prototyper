import type { TextThemeData } from '../text/TextThemeData';
import { createThemable } from 'react-native-theme-prototyper';
import type { IconButtonThemeData } from '../icon-button/IconButtonThemeData';

export type AppBarThemeData = {
  icons?: IconButtonThemeData;
  border: { color: string; thickness: number };
  titleStyle: TextThemeData;
};

export const { Provider: AppBarTheme, useComponentTheme: useAppBarTheme } =
  createThemable<AppBarThemeData>(null!);
