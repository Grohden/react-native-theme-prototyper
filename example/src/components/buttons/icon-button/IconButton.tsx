import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { useAppTheme } from '../../app-theme';
import { Center } from '../../center';
import { InkWell } from '../../ink-well';
import { SizedBox } from '../../sized-box';
import chroma from 'chroma-js';
import { DecoratedBox } from '../../decorated-box';
import { BorderRadius } from '../../../helpers';

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
    <DecoratedBox borderRadius={BorderRadius.circular(100)} clipsChildren>
      <InkWell onPress={onPress} rippleColor={highlightColor}>
        <SizedBox
          width={iconButton.containerSize ?? containerSize}
          height={iconButton.containerSize ?? containerSize}
        >
          <Center>
            <MaterialIcons
              name={name}
              size={size ?? iconButton.size}
              color={color || iconButton.color}
            />
          </Center>
        </SizedBox>
      </InkWell>
    </DecoratedBox>
  );
};
