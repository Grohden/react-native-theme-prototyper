import { View } from 'react-native';
import React from 'react';
import type { EdgeInsets } from '../../helpers';

export const Padding = ({
  padding,
  children,
}: React.PropsWithChildren<{ padding: EdgeInsets }>) => (
  <View style={padding.toPrefixed('padding')}>{children}</View>
);
