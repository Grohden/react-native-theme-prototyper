import { View, ViewStyle } from 'react-native';
import type { Border, BorderRadius } from '../../helpers';
import React from 'react';

export const DecoratedBox = ({
  children,
  border,
  borderRadius,
  clipsChildren,
  backgroundColor,
}: React.PropsWithChildren<{
  border?: Border;
  borderRadius?: BorderRadius;
  backgroundColor?: string;
  // FIXME: maybe its better to make this a component, but its usually a practice to
  //  clip children when using radius, so for now it makes sense
  clipsChildren?: boolean;
}>) => {
  const style: ViewStyle = {
    ...(border?.toStyle() || {}),
    ...(borderRadius?.toStyle() || {}),
    overflow: clipsChildren ? 'hidden' : undefined,
    backgroundColor,
  };

  return <View style={style}>{children}</View>;
};
