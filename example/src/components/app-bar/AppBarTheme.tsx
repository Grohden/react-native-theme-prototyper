import { createThemable, ThemeValue } from 'react-native-theme-prototyper';
import type { TextStyle } from '../text/TextTheme';

export type AppBarTheme = {
  border: ThemeValue<{ color: string; thickness: number }>;
  titleStyle: ThemeValue<TextStyle>;
};

const { ThemableProvider, useTheme } = createThemable<AppBarTheme>(null!);

export const AppBarTheme = ThemableProvider;

export const useAppBarTheme = useTheme;
