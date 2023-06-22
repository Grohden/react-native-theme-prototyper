import { createAppTheme } from 'react-native-theme-prototyper';
import type { ReactNode } from 'react';
import React, { useMemo } from 'react';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';
import type { AppBarThemeData } from '../app-bar/AppBarThemeData';
import { AppBarTheme, useAppBarTheme } from '../app-bar/AppBarThemeData';
import type { TextThemeData } from '../text/TextThemeData';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {
  TextButtonTheme,
  TextButtonThemeData,
  useTextButtonTheme,
} from '../text-button/TextButtonThemeData';
import {
  OutlineButtonTheme,
  OutlineButtonThemeData,
  useOutlineButtonTheme,
} from '../outline-button/OutlineButtonThemeData';
import chroma from 'chroma-js';
import {
  IconButtonTheme,
  IconButtonThemeData,
  useIconButtonTheme,
} from '../icon-button/IconButtonThemeData';

export type AppTheme = {
  primaryColor: string;
  roundness: number;
  appBarTheme: AppBarThemeData;
  textButtonTheme: TextButtonThemeData;
  outlineButtonTheme: OutlineButtonThemeData;
  iconButtonTheme: IconButtonThemeData;
};

const RootTheme = createAppTheme<{
  primaryColor: string;
  roundness: number;
}>(null!);

const roundness = 38;
const primaryColor = chroma('#862ed2');
const thickness = 1;
const baseText: TextStyle = { fontSize: 12 };

const AppThemes: { light: AppTheme } = {
  light: {
    primaryColor: primaryColor.hex(),
    roundness,
    appBarTheme: {
      border: {
        color: 'black',
        thickness,
      },
      titleStyle: {
        ...baseText,
        fontSize: 24,
      },
    },
    textButtonTheme: {
      text: {
        ...baseText,
        fontSize: 16,
        fontWeight: '500',
      },
    },
    outlineButtonTheme: {
      text: {
        ...baseText,
        fontSize: 16,
        fontWeight: '500',
      },
    },
    iconButtonTheme: {
      backgroundColor: 'red',
    },
  },
};

export const AppTheme = (props: { children?: ReactNode | undefined }) => {
  const current = AppThemes.light;

  return (
    <SafeAreaProvider>
      <RootTheme.Provider value={current}>
        <AppBarTheme value={current.appBarTheme}>
          <OutlineButtonTheme value={current.outlineButtonTheme}>
            <TextButtonTheme value={current.textButtonTheme}>
              <IconButtonTheme value={current.iconButtonTheme}>
                {props.children}
              </IconButtonTheme>
            </TextButtonTheme>
          </OutlineButtonTheme>
        </AppBarTheme>
      </RootTheme.Provider>
    </SafeAreaProvider>
  );
};

export const useAppTheme = () => ({
  ...RootTheme.useHook(),
  appBarTheme: useAppBarTheme(),
  textButtonTheme: useTextButtonTheme(),
  outlineButtonTheme: useOutlineButtonTheme(),
  iconButtonTheme: useIconButtonTheme(),
  insets: useSafeAreaInsets(),
});

type ThemeFactory = (theme: ReturnType<typeof useAppTheme>) => {
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
