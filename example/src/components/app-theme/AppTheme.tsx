import { createAppTheme } from 'react-native-theme-prototyper';
import type { ReactNode } from 'react';
import React from 'react';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import type { TopAppBarThemeData } from '../top-app-bar';
import { TopAppBarTheme, useTopAppBarTheme } from '../top-app-bar';
import type {
  TextButtonThemeData,
  OutlineButtonThemeData,
  IconButtonThemeData,
} from '../buttons';
import {
  TextButtonTheme,
  useTextButtonTheme,
  OutlineButtonTheme,
  useOutlineButtonTheme,
  IconButtonTheme,
  useIconButtonTheme,
} from '../buttons';
import {
  ColorTokens,
  elevationTokens,
  lightColorTokens,
  stateTokens,
  StateTokens,
  TypeScaleTokens,
  typeScaleTokens,
} from '../../design-tokens';

export type AppTheme = {
  roundness: number;
  topAppBar: TopAppBarThemeData;
  textButton: TextButtonThemeData;
  outlineButton: OutlineButtonThemeData;
  iconButton: IconButtonThemeData;
  colors: ColorTokens;
  typeScale: TypeScaleTokens;
  states: StateTokens;
};

const RootTheme = createAppTheme<{
  colors: AppTheme['colors'];
  typeScale: AppTheme['typeScale'];
  states: AppTheme['states'];
  roundness: number;
}>(null!);

const roundness = 38;
const baseFontSize = 12;

const AppThemes: { light: AppTheme } = {
  light: {
    colors: lightColorTokens,
    typeScale: typeScaleTokens,
    states: stateTokens,
    roundness,
    topAppBar: {
      leadingIcon: {
        color: 'black',
        size: 24,
      },
      trailingIcons: {
        color: 'black',
        size: 24,
      },
      container: {
        color: lightColorTokens.surface,
        colorOnScroll: lightColorTokens.surfaceContainer,
      },
      headline: {
        color: lightColorTokens.onSurface,
        ...typeScaleTokens.titleLarge,
      },
    },
    textButton: {
      shapeRadius: 20,
      color: lightColorTokens.primary,
      container: { elevation: elevationTokens.level0 },
      labelText: typeScaleTokens.labelLarge,
    },
    outlineButton: {
      labelText: typeScaleTokens.labelLarge,
      color: lightColorTokens.primary,
      shapeRadius: 20,
      container: {
        outlineColor: lightColorTokens.outline,
        outlineWidth: 1,
      },
    },
    iconButton: {
      size: baseFontSize * 1.4,
    },
  },
};

export const AppTheme = (props: { children?: ReactNode | undefined }) => {
  const current = AppThemes.light;

  return (
    <SafeAreaProvider>
      <RootTheme.Provider value={current}>
        <TopAppBarTheme value={current.topAppBar}>
          <OutlineButtonTheme value={current.outlineButton}>
            <TextButtonTheme value={current.textButton}>
              <IconButtonTheme value={current.iconButton}>
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
  topAppBar: useTopAppBarTheme(),
  textButton: useTextButtonTheme(),
  outlineButton: useOutlineButtonTheme(),
  iconButton: useIconButtonTheme(),
  insets: useSafeAreaInsets(),
});
