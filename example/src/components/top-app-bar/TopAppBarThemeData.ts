import type { TextThemeData } from '../text';
import { createThemable } from 'react-native-theme-prototyper';
import type { Color } from '../../design-tokens';

export type TopAppBarThemeData = {
  headline: TextThemeData;
  leadingIcon: { color: Color; size: number; containerSize: number };
  trailingIcons: { color: Color; size: number; containerSize: number };
  container: { color: Color; colorOnScroll: string };
};

export const {
  Provider: TopAppBarTheme,
  useComponentTheme: useTopAppBarTheme,
} = createThemable<TopAppBarThemeData>(null!);
