// https://m3.material.io/styles/typography/type-scale-tokens

import { Platform } from 'react-native';

export type TypeScale = {
  font?: string;
  lineHeight: number;
  size: number;
  tracking: number;
  weight: '400' | '500';
};

export type TypeScaleTokens = {
  displayLarge: TypeScale;
  displayMedium: TypeScale;
  displaySmall: TypeScale;
  headlineLarge: TypeScale;
  headlineMedium: TypeScale;
  headlineSmall: TypeScale;
  titleLarge: TypeScale;
  titleMedium: TypeScale;
  titleSmall: TypeScale;
  labelLarge: TypeScale;
  labelMedium: TypeScale;
  labelSmall: TypeScale;
  bodyLarge: TypeScale;
  bodyMedium: TypeScale;
  bodySmall: TypeScale;
};

const font = Platform.OS === 'ios' ? undefined : 'Roboto';

export const typeScaleTokens = {
  displayLarge: {
    font: font,
    lineHeight: 64,
    size: 57,
    tracking: -0.25,
    weight: '400',
  },
  displayMedium: {
    font: font,
    lineHeight: 52,
    size: 45,
    tracking: 0,
    weight: '400',
  },
  displaySmall: {
    font: font,
    lineHeight: 44,
    size: 36,
    tracking: 0,
    weight: '400',
  },
  headlineLarge: {
    font: font,
    lineHeight: 40,
    size: 32,
    tracking: 0,
    weight: '400',
  },
  headlineMedium: {
    font: font,
    lineHeight: 36,
    size: 28,
    tracking: 0,
    weight: '400',
  },
  headlineSmall: {
    font: font,
    lineHeight: 32,
    size: 24,
    tracking: 0,
    weight: '400',
  },
  titleLarge: {
    font: font,
    lineHeight: 28,
    size: 22,
    tracking: 0,
    weight: '400',
  },
  titleMedium: {
    font: font,
    lineHeight: 24,
    size: 16,
    tracking: 0.15,
    weight: '500',
  },
  titleSmall: {
    font: font,
    lineHeight: 20,
    size: 14,
    tracking: 0.1,
    weight: '500',
  },
  labelLarge: {
    font: font,
    lineHeight: 20,
    size: 14,
    tracking: 0.1,
    weight: '500',
  },
  labelMedium: {
    font: font,
    lineHeight: 16,
    size: 12,
    tracking: 0.5,
    weight: '500',
  },
  labelSmall: {
    font: font,
    lineHeight: 16,
    size: 11,
    tracking: 0.5,
    weight: '500',
  },
  bodyLarge: {
    font: font,
    lineHeight: 24,
    size: 16,
    tracking: 0.5,
    weight: '400',
  },
  bodyMedium: {
    font: font,
    lineHeight: 20,
    size: 14,
    tracking: 0.25,
    weight: '400',
  },
  bodySmall: {
    font: font,
    lineHeight: 16,
    size: 12,
    tracking: 0.4,
    weight: '400',
  },
} satisfies TypeScaleTokens;
