import React, { ReactNode } from 'react';
import { useAppTheme } from '../../app-theme';
import { BorderRadius, EdgeInsets } from '../../../helpers';
import chroma from 'chroma-js';
import { DecoratedBox } from '../../decorated-box';
import { Padding } from '../../padding';
import { TextTheme } from '../../text';
import { InkWell } from '../../ink-well';

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
    <DecoratedBox borderRadius={borderRadius} clipsChildren>
      <InkWell rippleColor={underlayColor} onPress={onPress}>
        <Padding
          padding={EdgeInsets.symmetric({
            vertical: 12,
            horizontal: 16,
          })}
        >
          <TextTheme value={textStyle}>{children}</TextTheme>
        </Padding>
      </InkWell>
    </DecoratedBox>
  );
};
