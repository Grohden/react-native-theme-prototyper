import React from 'react';
import { TouchableHighlight } from 'react-native';
import { TextTheme } from '../text/TextThemeData';
import { createAppStyle } from '../app-theme';
import chroma from 'chroma-js';

export const OutlineButton = ({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress?: () => void;
}) => {
  const styles = useStyles();

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={styles.underlay.color}
      style={styles.touchable}
    >
      <TextTheme value={styles.text}>{children}</TextTheme>
    </TouchableHighlight>
  );
};

const useStyles = createAppStyle(
  ({ outlineButtonTheme, primaryColor, roundness }) => ({
    text: {
      color:
        outlineButtonTheme.text?.color ||
        outlineButtonTheme.color ||
        primaryColor,
      ...outlineButtonTheme.text,
    },
    underlay: {
      color:
        outlineButtonTheme.underlayColor ||
        chroma(outlineButtonTheme.color || primaryColor)
          .alpha(0.2)
          .hex(),
    },
    touchable: {
      paddingVertical: 10,
      paddingHorizontal: 16,
      alignItems: 'center',
      borderWidth: 1,
      borderColor:
        outlineButtonTheme.text?.color ||
        outlineButtonTheme.color ||
        primaryColor,
      borderRadius: outlineButtonTheme.touchable?.borderRadius ?? roundness,
      ...outlineButtonTheme.touchable,
    },
  })
);
