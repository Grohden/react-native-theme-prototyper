import { createThemable } from 'react-native-theme-prototyper';
import type { TextThemeData } from '../text/TextThemeData';
import type { BorderRadius } from '../../helpers';

export type OutlineButtonThemeData = {
  text?: TextThemeData;
  borderRadius?: BorderRadius;
  underlayColor?: string;
  color?: string;
};

export const {
  Provider: OutlineButtonTheme,
  useComponentTheme: useOutlineButtonTheme,
} = createThemable<OutlineButtonThemeData>(null!);
