import React from 'react';
import { TouchableHighlight } from 'react-native';
import { TextTheme } from '../text/TextThemeData';
import { useAppTheme } from '../app-theme';
import chroma from 'chroma-js';
import { Padding } from '../padding/Padding';
import { EdgeInsets } from '../../helpers';

export const TextButton = ({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress?: () => void;
}) => {
  const { textButtonTheme, primaryColor } = useAppTheme();

  const underlay =
    textButtonTheme.underlayColor ||
    chroma(textButtonTheme.color || primaryColor)
      .alpha(0.2)
      .hex();

  const text = {
    color: textButtonTheme.text?.color || textButtonTheme.color || primaryColor,
    ...textButtonTheme.text,
  };

  return (
    <TouchableHighlight onPress={onPress} underlayColor={underlay}>
      <Padding padding={EdgeInsets.symmetric({ vertical: 12, horizontal: 16 })}>
        <TextTheme value={text}>{children}</TextTheme>
      </Padding>
    </TouchableHighlight>
  );
};
