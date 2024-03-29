import { View, ViewStyle } from 'react-native';
import React from 'react';
import type {
  AlignmentGeometry,
  EdgeInsets,
  BoxDecoration,
  BoxConstraints,
} from '../../helpers';

export const Container = ({
  children,
  boxDecoration,
  padding,
  constraints,
  clipsChildren,
  align,
}: React.PropsWithChildren<{
  boxDecoration?: BoxDecoration;
  padding?: EdgeInsets;
  align?: AlignmentGeometry;
  constraints?: BoxConstraints;
  // FIXME: maybe its better to make this a component, but its usually a practice to
  //  clip children when using radius, so for now it makes sense
  clipsChildren?: boolean;
}>) => {
  // For POTENTIAL perf improvements I've decided to put all styles in Container
  //  and make other components merely an alias for Container.
  //  It might be worth to investigate how flutter handles all that nesting it does
  //  on its original Container
  const style: ViewStyle = {
    ...boxDecoration?.toStyle(),
    ...padding?.toPrefixed('padding'),
    ...align?.toStyle(),
    ...constraints?.toStyle(),
    overflow: clipsChildren ? 'hidden' : undefined,
  };

  return <View style={style}>{children}</View>;
};
