import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { useAppTheme } from '../app-theme';
import { Pressable } from 'react-native';
import { Padding } from '../padding/Padding';
import { EdgeInsets } from '../../helpers';
import { DecoratedBox } from '../decorated-box/DecoratedBox';

type IconName = 'chevron-left';

export const IconButton = ({
  name,
  onPress,
}: {
  name: IconName;
  onPress?: () => void;
}) => {
  const { iconButtonTheme } = useAppTheme();
  const padding = iconButtonTheme.padding || EdgeInsets.all(6);

  return (
    <Pressable onPress={onPress}>
      <DecoratedBox
        backgroundColor={iconButtonTheme.backgroundColor}
        borderRadius={iconButtonTheme.borderRadius}
      >
        <Padding padding={padding}>
          <FontAwesome
            name={name}
            size={iconButtonTheme.size}
            color={iconButtonTheme.color}
          />
        </Padding>
      </DecoratedBox>
    </Pressable>
  );
};
