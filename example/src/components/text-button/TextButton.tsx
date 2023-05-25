import React from 'react';
import { TouchableHighlight } from 'react-native';
import { TextTheme } from '../text/TextThemeData';
import { createAppStyle } from '../app-theme';
import chroma from 'chroma-js';

export const TextButton = ({
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
  ({ textButtonTheme, primaryColor, roundness }) => ({
    text: {
      color:
        textButtonTheme.text?.color || textButtonTheme.color || primaryColor,
      ...textButtonTheme.text,
    },
    underlay: {
      color:
        textButtonTheme.underlayColor ||
        chroma(textButtonTheme.color || primaryColor)
          .alpha(0.2)
          .hex(),
    },
    touchable: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      alignItems: 'center',
      borderRadius: textButtonTheme.touchable?.borderRadius ?? roundness,
      ...textButtonTheme.touchable,
    },
  })
);
