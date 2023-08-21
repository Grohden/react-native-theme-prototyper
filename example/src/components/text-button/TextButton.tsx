import React, { ReactNode } from 'react';
import { TouchableHighlight } from 'react-native';
import { TextTheme } from '../text/TextThemeData';
import { useAppTheme } from '../app-theme';
import chroma from 'chroma-js';
import { Padding } from '../padding';
import { BorderRadius, EdgeInsets } from '../../helpers';
import { DecoratedBox } from '../decorated-box';

export const TextButton = ({
  children,
  onPress,
}: {
  children: ReactNode;
  onPress?: () => void;
}) => {
  const { textButtonTheme, primaryColor, roundness } = useAppTheme();

  const underlay =
    textButtonTheme.underlayColor ||
    chroma(textButtonTheme.color || primaryColor)
      .alpha(0.2)
      .hex();

  const text = {
    color: textButtonTheme.text?.color || textButtonTheme.color || primaryColor,
    ...textButtonTheme.text,
  };

  const borderRadius = roundness ? BorderRadius.circular(roundness) : undefined;

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={underlay}
      style={borderRadius?.toStyle()}
    >
      <DecoratedBox borderRadius={borderRadius}>
        <Padding
          padding={EdgeInsets.symmetric({ vertical: 12, horizontal: 16 })}
        >
          <TextTheme value={text}>{children}</TextTheme>
        </Padding>
      </DecoratedBox>
    </TouchableHighlight>
  );
};
