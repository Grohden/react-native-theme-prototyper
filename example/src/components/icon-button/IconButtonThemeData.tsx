import { createThemable } from 'react-native-theme-prototyper';
import type { PaddingMeasures } from '../../helpers/padding';

export type IconButtonThemeData = {
  size?: number;
  color?: string;
  backgroundColor?: string;
  borderRadius?: number;
  padding?: PaddingMeasures;
};

export const {
  Provider: IconButtonTheme,
  useComponentTheme: useIconButtonTheme,
} = createThemable<IconButtonThemeData>(null!);
