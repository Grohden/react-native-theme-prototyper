import { createThemable } from 'react-native-theme-prototyper';
import type { EdgeInsets, BorderRadius } from '../../helpers';

export type IconButtonThemeData = {
  size?: number;
  color?: string;
  backgroundColor?: string;
  borderRadius?: BorderRadius;
  padding?: EdgeInsets;
};

export const {
  Provider: IconButtonTheme,
  useComponentTheme: useIconButtonTheme,
} = createThemable<IconButtonThemeData>(null!);
