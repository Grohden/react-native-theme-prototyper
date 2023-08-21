import { View, ViewStyle } from 'react-native';
import type {
  CrossAxisAlignment,
  MainAxisAlignment,
  MainAxisSize,
} from '../../helpers';
import React, { PropsWithChildren } from 'react';

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
      style.width = '100%';
      break;
  }

  switch (mainAxisAlignment) {
    case 'start':
      style.justifyContent = 'flex-start';
      break;
    case 'center':
      style.justifyContent = 'center';
      break;
    case 'end':
      style.justifyContent = 'flex-end';
      break;
  }

  switch (crossAxisAlignment) {
    case 'start':
      style.alignItems = 'flex-start';
      break;
    case 'center':
      style.alignItems = 'center';
      break;
    case 'end':
      style.alignItems = 'flex-end';
      break;
  }

  return <View style={style}>{children}</View>;
};
