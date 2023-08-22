import type { TextThemeData } from '../text';
import { createThemable } from 'react-native-theme-prototyper';

export type TopAppBarThemeData = {
  headline: TextThemeData;
  leadingIcon: { color: string; size: number };
  trailingIcons: { color: string; size: number };
  container: { color: string; colorOnScroll: string };
};

export const {
  Provider: TopAppBarTheme,
  useComponentTheme: useTopAppBarTheme,
} = createThemable<TopAppBarThemeData>(null!);
