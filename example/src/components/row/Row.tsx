import { View, ViewStyle } from 'react-native';
import type { PropsWithChildren } from 'react';
import React from 'react';
import { CrossAxisAlignment } from '../../helpers/cross-axis-alignment';

export const Row = ({
  crossAxisAlignment,
  children,
}: PropsWithChildren<{
  crossAxisAlignment?: CrossAxisAlignment;
}>) => {
  const style: ViewStyle = { flexDirection: 'row' };

  switch (crossAxisAlignment) {
    case CrossAxisAlignment.start:
      style.alignItems = 'flex-start';
      break;
    case CrossAxisAlignment.center:
      style.alignItems = 'center';
      break;
    case CrossAxisAlignment.end:
      style.alignItems = 'flex-end';
      break;
  }
  return <View style={style}>{children}</View>;
};
