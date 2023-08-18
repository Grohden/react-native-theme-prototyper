import { createAppTheme } from 'react-native-theme-prototyper';
import type { ReactNode } from 'react';
import React from 'react';
import type { TextStyle } from 'react-native';
import type { AppBarThemeData } from '../app-bar/AppBarThemeData';
import { AppBarTheme, useAppBarTheme } from '../app-bar/AppBarThemeData';
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
const baseFontSize = 12;
const baseText: TextStyle = { fontSize: baseFontSize };

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
        fontSize: baseFontSize * 2,
      },
    },
    textButtonTheme: {
      text: {
        ...baseText,
        fontSize: baseFontSize * 1.4,
        fontWeight: '500',
      },
    },
    outlineButtonTheme: {
      text: {
        ...baseText,
        fontSize: baseFontSize * 1.4,
        fontWeight: '500',
      },
    },
    iconButtonTheme: {
      size: baseFontSize * 1.4,
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
