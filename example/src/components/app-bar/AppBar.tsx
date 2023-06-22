import { createAppStyle } from '../app-theme';
import { View } from 'react-native';
import React, { ReactNode } from 'react';
import { TextTheme } from '../text/TextThemeData';
import { IconButtonTheme } from '../icon-button/IconButtonThemeData';
import chroma from 'chroma-js';

export const AppBar = (props: { children?: ReactNode | undefined }) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <IconButtonTheme value={styles.icon}>
        <TextTheme value={styles.title}>{props.children}</TextTheme>
      </IconButtonTheme>
    </View>
  );
};

const useStyles = createAppStyle(
  ({ primaryColor, roundness, iconButtonTheme, appBarTheme, insets }) => {
    const customIconColor = (appBarTheme.icons || iconButtonTheme)?.color;
    const customIconBackground = (appBarTheme.icons || iconButtonTheme)
      ?.backgroundColor;

    return {
      container: {
        flexDirection: 'row',
        padding: 10,
        marginTop: insets.top,
        borderBottomWidth: appBarTheme.border?.thickness ?? 1,
        borderBottomColor: appBarTheme.border?.color || primaryColor,
      },
      title: appBarTheme.titleStyle,
      icon: {
        // FIXME: need to hack type checker to support this
        // padding: Padding.only({ right: 12 }),
        borderRadius: roundness,
        size: iconButtonTheme?.size || 20,
        backgroundColor: customIconBackground,
        color: customIconColor
          ? customIconColor
          : chroma(customIconBackground || 'white').luminance() > 0.5
          ? 'black'
          : 'white',
      },
    };
  }
);
