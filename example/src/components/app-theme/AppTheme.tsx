import { copyWith, createAppTheme } from 'react-native-theme-prototyper';
import type { ReactNode } from 'react';
import React, { useMemo } from 'react';
import type { ImageStyle, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';
import type { AppBarThemeData } from '../app-bar/AppBarThemeData';
import { AppBarTheme, useAppBarTheme } from '../app-bar/AppBarThemeData';
import type { TextThemeData } from '../text/TextThemeData';

export type AppTheme = {
  primaryColor: string;
  appBar: AppBarThemeData;
};

const RootTheme = createAppTheme<{
  primaryColor: string;
}>(null!);

const baseText = { fontSize: 12 };

const AppThemes: { light: AppTheme } = {
  light: {
    primaryColor: 'red',
    appBar: {
      border: {
        color: 'black',
        thickness: 2,
      },
      titleStyle: copyWith(baseText, {
        fontSize: 24,
      }),
    },
  },
};

export const AppTheme = (props: { children?: ReactNode | undefined }) => {
  const current = AppThemes.light;

  return (
    <RootTheme.Provider value={current}>
      <AppBarTheme value={current.appBar}>{props.children}</AppBarTheme>
    </RootTheme.Provider>
  );
};

export const useAppTheme = () => ({
  ...RootTheme.useHook(),
  appBar: useAppBarTheme(),
});

type ThemeFactory = (theme: AppTheme) => {
  [K: string]: ViewStyle | TextThemeData | ImageStyle;
};

export function createAppStyle<T extends ThemeFactory>(themeFactory: T) {
  return (): ReturnType<T> => {
    const theme = useAppTheme();

    return useMemo(
      () => StyleSheet.create(themeFactory(theme) as ReturnType<T>),
      [theme]
    );
  };
}
