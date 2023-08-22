import React, { ReactNode } from 'react';
import { TouchableHighlight } from 'react-native';
import chroma from 'chroma-js';
import { TextTheme } from '../../text';
import { useAppTheme } from '../../app-theme';
import { Border, BorderRadius, EdgeInsets } from '../../../helpers';
import { Padding } from '../../padding';
import { DecoratedBox } from '../../decorated-box';

export const OutlineButton = ({
  children,
  onPress,
}: {
  children: ReactNode;
  onPress?: () => void;
}) => {
  const { outlineButton } = useAppTheme();
  const { container, shapeRadius, color } = outlineButton;

  const border = Border.all({
    width: container.outlineWidth,
    color: container.outlineColor,
  });

  const underlay = chroma(color).alpha(0.2).hex();
  const borderRadius = BorderRadius.circular(shapeRadius);
  const textStyle = { color, ...outlineButton.labelText };

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
          <TextTheme value={textStyle}>{children}</TextTheme>
        </Padding>
      </DecoratedBox>
    </TouchableHighlight>
  );
};
