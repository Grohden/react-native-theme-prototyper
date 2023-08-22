import React, { ReactNode } from 'react';
import { TouchableHighlight } from 'react-native';
import { TextTheme } from '../../text';
import { useAppTheme } from '../../app-theme';
import { Padding } from '../../padding';
import { BorderRadius, EdgeInsets } from '../../../helpers';
import chroma from 'chroma-js';

export const TextButton = ({
  children,
  onPress,
}: {
  children: ReactNode;
  onPress?: () => void;
}) => {
  const { textButton, states } = useAppTheme();
  const { labelText, color, shapeRadius } = textButton;

  const borderRadius = BorderRadius.circular(shapeRadius);
  const textStyle = { ...labelText, color };
  const underlayColor = chroma(color)
    .alpha(states.pressed.stateLayerOpacity)
    .hex();

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={underlayColor}
      style={borderRadius.toStyle()}
    >
      <Padding padding={EdgeInsets.symmetric({ vertical: 12, horizontal: 16 })}>
        <TextTheme value={textStyle}>{children}</TextTheme>
      </Padding>
    </TouchableHighlight>
  );
};
