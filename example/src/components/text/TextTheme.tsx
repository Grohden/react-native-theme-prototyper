import { createThemable } from 'react-native-theme-prototyper';
import type { TextStyle as RNTextStyle } from 'react-native';

export type TextStyle = RNTextStyle;

const { ThemableProvider, useTheme } = createThemable<TextStyle>(null!);

export const TextTheme = ThemableProvider;

export const useTextTheme = useTheme;
