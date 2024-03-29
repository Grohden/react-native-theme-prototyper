export type Color = string;

export type ColorTokens = {
  primary: Color;
  surface: Color;
  surfaceContainer: Color;
  surfaceContainerHighest: Color;
  onSurface: Color;
  outline: Color;
  background: Color;
  onBackground: Color;
};

export const lightColorTokens = {
  primary: '#6750A4',
  surface: '#FEF7FF',
  surfaceContainer: '#F3EDF7',
  surfaceContainerHighest: '#E6E0E9',
  onSurface: '#1C1B1F',
  outline: '#79747E',
  background: '#FEF7FF',
  onBackground: '#1C1B1F',
} satisfies ColorTokens;
