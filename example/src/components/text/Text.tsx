import { Text as RNText } from 'react-native';
import React from 'react';
import { useTextTheme } from './TextThemeData';
import type { TypeScale } from '../../design-tokens';

export const Text = ({
  style,
  children,
}: React.PropsWithChildren<{ style?: Partial<TypeScale> }>) => {
  const effectiveStyle = { ...useTextTheme(), ...style };

  return (
    <RNText
      style={{
        color: effectiveStyle.color,
        textTransform: effectiveStyle.textTransform,
        fontFamily: effectiveStyle.font,
        fontSize: effectiveStyle.size,
        lineHeight: effectiveStyle.lineHeight,
        letterSpacing: effectiveStyle.tracking,
        fontWeight: effectiveStyle.weight,
      }}
    >
      {children}
    </RNText>
  );
};
