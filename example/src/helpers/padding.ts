import type { ViewStyle } from 'react-native';

export type PaddingMeasures = Pick<
  ViewStyle,
  | 'padding'
  | 'paddingHorizontal'
  | 'paddingVertical'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingTop'
>;

export const Padding = {
  symmetric: (style: {
    vertical?: number;
    horizontal?: number;
  }): PaddingMeasures => ({
    paddingVertical: style.vertical,
    paddingHorizontal: style.horizontal,
  }),
  only: (style: {
    left?: number;
    right?: number;
    bottom?: number;
    top?: number;
  }): PaddingMeasures => ({
    paddingLeft: style.left,
    paddingRight: style.right,
    paddingBottom: style.bottom,
    paddingTop: style.top,
  }),
  all: (padding: number): PaddingMeasures => ({ padding }),
};
