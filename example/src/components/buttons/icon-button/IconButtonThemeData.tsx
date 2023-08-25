import { createThemable } from 'react-native-theme-prototyper';
import type { BorderRadius } from '../../../helpers';
import type { Color } from '../../../design-tokens';

export type IconButtonThemeData = {
  size?: number;
  containerSize: number;
  color: Color;
  backgroundColor?: string;
  borderRadius?: BorderRadius;
};

export const {
  Provider: IconButtonTheme,
  useComponentTheme: useIconButtonTheme,
} = createThemable<IconButtonThemeData>(null!);
