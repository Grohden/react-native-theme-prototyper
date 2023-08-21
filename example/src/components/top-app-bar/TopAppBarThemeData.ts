import type { TextThemeData } from '../text/TextThemeData';
import { createThemable } from 'react-native-theme-prototyper';

export type TopAppBarThemeData = {
  icons: { size: number; color: string };
  border: { color: string; thickness: number };
  titleStyle: TextThemeData;
};

export const {
  Provider: TopAppBarTheme,
  useComponentTheme: useTopAppBarTheme,
} = createThemable<TopAppBarThemeData>(null!);
