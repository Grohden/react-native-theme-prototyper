import { createThemable } from 'react-native-theme-prototyper';
import type { TextThemeData } from '../../text';
import type { Color } from '../../../design-tokens';

export type OutlineButtonThemeData = {
  shapeRadius: number;
  color: Color;
  container: {
    outlineWidth: number;
    outlineColor: Color;
  };
  labelText: Omit<TextThemeData, 'color'>;
};

export const {
  Provider: OutlineButtonTheme,
  useComponentTheme: useOutlineButtonTheme,
} = createThemable<OutlineButtonThemeData>(null!);
