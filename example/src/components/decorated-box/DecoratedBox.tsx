import { View, ViewStyle } from 'react-native';
import type { Border, BorderRadius } from '../../helpers';
import React from 'react';

export const DecoratedBox = ({
  children,
  border,
  borderRadius,
  backgroundColor,
}: React.PropsWithChildren<{
  border?: Border;
  borderRadius?: BorderRadius;
  backgroundColor?: string;
}>) => {
  const style: ViewStyle = {
    ...(border?.toStyle() || {}),
    ...(borderRadius?.toStyle() || {}),
    backgroundColor,
  };

  return <View style={style}>{children}</View>;
};
