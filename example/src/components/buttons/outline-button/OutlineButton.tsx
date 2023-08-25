import React, { ReactNode } from 'react';
import chroma from 'chroma-js';
import { TextTheme } from '../../text';
import { useAppTheme } from '../../app-theme';
import { Border, BorderRadius, EdgeInsets } from '../../../helpers';
import { Padding } from '../../padding';
import { DecoratedBox } from '../../decorated-box';
import { InkWell } from '../../ink-well';

export const OutlineButton = ({
  children,
  onPress,
}: {
  children: ReactNode;
  onPress?: () => void;
}) => {
  const { outlineButton, states } = useAppTheme();
  const { container, shapeRadius, color } = outlineButton;

  const border = Border.all({
    width: container.outlineWidth,
    color: container.outlineColor,
  });

  const borderRadius = BorderRadius.circular(shapeRadius);
  const textStyle = { color, ...outlineButton.labelText };
  const highlightColor = chroma(color)
    .alpha(states.pressed.stateLayerOpacity)
    .hex();

  return (
    <DecoratedBox border={border} borderRadius={borderRadius} clipsChildren>
      <InkWell onPress={onPress} rippleColor={highlightColor} role="button">
        <Padding
          padding={EdgeInsets.symmetric({ vertical: 10, horizontal: 16 })}
        >
          <TextTheme value={textStyle}>{children}</TextTheme>
        </Padding>
      </InkWell>
    </DecoratedBox>
  );
};
