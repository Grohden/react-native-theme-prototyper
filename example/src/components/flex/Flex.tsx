import { FlexStyle, View, ViewStyle } from 'react-native';
import type {
  CrossAxisAlignment,
  MainAxisAlignment,
  MainAxisSize,
} from '../../helpers';
import React, { PropsWithChildren } from 'react';

const mainAxisToFlex: Record<MainAxisAlignment, FlexStyle['justifyContent']> = {
  spaceAround: 'space-around',
  spaceBetween: 'space-between',
  spaceEvenly: 'space-evenly',
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
};

const crossAxisToFlex: Record<CrossAxisAlignment, FlexStyle['alignItems']> = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
};

export const Flex = ({
  direction,
  mainAxisSize = 'min',
  mainAxisAlignment = 'start',
  crossAxisAlignment = 'start',
  children,
}: PropsWithChildren<{
  direction: 'row' | 'column';
  mainAxisSize?: MainAxisSize;
  mainAxisAlignment?: MainAxisAlignment;
  crossAxisAlignment?: CrossAxisAlignment;
}>) => {
  const style: ViewStyle = { flexDirection: direction };

  switch (mainAxisSize) {
    case 'max':
      style[direction === 'row' ? 'width' : 'height'] = '100%';
      break;
  }

  style.justifyContent = mainAxisToFlex[mainAxisAlignment];
  style.alignItems = crossAxisToFlex[crossAxisAlignment];

  return <View style={style}>{children}</View>;
};
