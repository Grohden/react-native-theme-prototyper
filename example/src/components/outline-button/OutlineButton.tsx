import React from 'react';
import { TouchableHighlight } from 'react-native';
import { TextTheme } from '../text/TextThemeData';
import { useAppTheme } from '../app-theme';
import chroma from 'chroma-js';
import { Border, BorderRadius, EdgeInsets } from '../../helpers';
import { Padding } from '../padding/Padding';
import { DecoratedBox } from '../decorated-box/DecoratedBox';

export const OutlineButton = ({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress?: () => void;
}) => {
  const { outlineButtonTheme, primaryColor, roundness } = useAppTheme();

  const border = Border.all({
    width: 1,
    color:
      // FIXME: why only text can use opaque value?
      //  maybe we could evaluate allowing chroma instead of string
      (outlineButtonTheme.text?.color as string) ||
      outlineButtonTheme.color ||
      primaryColor,
  });

  const underlay =
    outlineButtonTheme.underlayColor ||
    chroma(outlineButtonTheme.color || primaryColor)
      .alpha(0.2)
      .hex();

  const text = {
    color:
      outlineButtonTheme.text?.color ||
      outlineButtonTheme.color ||
      primaryColor,
    ...outlineButtonTheme.text,
  };

  const borderRadius =
    outlineButtonTheme.borderRadius || roundness
      ? BorderRadius.circular(roundness)
      : undefined;

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={underlay}
      style={borderRadius?.toStyle()}
    >
      <DecoratedBox border={border} borderRadius={borderRadius}>
        <Padding
          padding={EdgeInsets.symmetric({ vertical: 10, horizontal: 16 })}
        >
          <TextTheme value={text}>{children}</TextTheme>
        </Padding>
      </DecoratedBox>
    </TouchableHighlight>
  );
};
