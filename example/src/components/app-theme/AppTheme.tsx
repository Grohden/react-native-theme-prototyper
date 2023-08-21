import { createAppTheme } from 'react-native-theme-prototyper';
import type { ReactNode } from 'react';
import React from 'react';
import type { TextStyle } from 'react-native';
import chroma from 'chroma-js';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import type { TopAppBarThemeData } from '../top-app-bar';
import { TopAppBarTheme, useTopAppBarTheme } from '../top-app-bar';
import type { TextButtonThemeData } from '../text-button';
import { TextButtonTheme, useTextButtonTheme } from '../text-button';
import type { OutlineButtonThemeData } from '../outline-button';
import { OutlineButtonTheme, useOutlineButtonTheme } from '../outline-button';
import type { IconButtonThemeData } from '../icon-button';
import { IconButtonTheme, useIconButtonTheme } from '../icon-button';

export type AppTheme = {
  primaryColor: string;
  roundness: number;
  topAppBarTheme: TopAppBarThemeData;
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
    topAppBarTheme: {
      icons: {
        color: 'black',
        size: 24,
      },
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
        fontSize: baseFontSize * 1.6,
        fontWeight: '500',
        textTransform: 'uppercase',
      },
    },
    outlineButtonTheme: {
      text: {
        ...baseText,
        fontSize: baseFontSize * 1.6,
        fontWeight: '500',
        textTransform: 'uppercase',
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
        <TopAppBarTheme value={current.topAppBarTheme}>
          <OutlineButtonTheme value={current.outlineButtonTheme}>
            <TextButtonTheme value={current.textButtonTheme}>
              <IconButtonTheme value={current.iconButtonTheme}>
                {props.children}
              </IconButtonTheme>
            </TextButtonTheme>
          </OutlineButtonTheme>
        </TopAppBarTheme>
      </RootTheme.Provider>
    </SafeAreaProvider>
  );
};

export const useAppTheme = () => ({
  ...RootTheme.useHook(),
  topAppBarTheme: useTopAppBarTheme(),
  textButtonTheme: useTextButtonTheme(),
  outlineButtonTheme: useOutlineButtonTheme(),
  iconButtonTheme: useIconButtonTheme(),
  insets: useSafeAreaInsets(),
});
