import { createThemable } from 'react-native-theme-prototyper';
import type { TextThemeData } from '../../text';

export type OutlineButtonThemeData = {
  shapeRadius: number;
  color: string;
  container: {
    outlineWidth: number;
    outlineColor: string;
  };
  labelText: Omit<TextThemeData, 'color'>;
};

export const {
  Provider: OutlineButtonTheme,
  useComponentTheme: useOutlineButtonTheme,
} = createThemable<OutlineButtonThemeData>(null!);
