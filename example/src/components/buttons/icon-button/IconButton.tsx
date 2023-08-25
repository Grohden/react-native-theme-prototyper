import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { useAppTheme } from '../../app-theme';
import { DecoratedBox, Container } from '../../containers';
import { InkWell } from '../../ink-well';
import chroma from 'chroma-js';
import {
  AlignmentDirectional,
  Border,
  BorderRadius,
  BoxConstraints,
  BoxDecoration,
  Size,
} from '../../../helpers';

type IconName = React.ComponentProps<typeof MaterialIcons>['name'];

export const IconButton = ({
  name,
  size,
  containerSize,
  color,
  onPress,
}: {
  name: IconName;
  size?: number;
  containerSize?: number;
  color?: string;
  onPress?: () => void;
}) => {
  const { states, iconButton } = useAppTheme();

  const highlightColor = chroma(iconButton.color)
    .alpha(states.pressed.stateLayerOpacity)
    .hex();

  return (
    <DecoratedBox
      boxDecoration={BoxDecoration.new({
        borderRadius: BorderRadius.circular(100),
        border: Border.debug(),
      })}
      clipsChildren
    >
      <InkWell onPress={onPress} rippleColor={highlightColor}>
        <Container
          align={AlignmentDirectional.center}
          constraints={BoxConstraints.tight(
            Size.square(containerSize ?? iconButton.containerSize)
          )}
        >
          <MaterialIcons
            name={name}
            size={size ?? iconButton.size}
            color={color || iconButton.color}
          />
        </Container>
      </InkWell>
    </DecoratedBox>
  );
};
