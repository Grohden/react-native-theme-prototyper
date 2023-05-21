import { createAppStyle } from '../app-theme';
import { View } from 'react-native';
import React, { ReactNode } from 'react';
import { TextTheme } from '../text/TextThemeData';

export const AppBar = (props: { children?: ReactNode | undefined }) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <TextTheme value={styles.title}>{props.children}</TextTheme>
    </View>
  );
};

const useStyles = createAppStyle(({ primaryColor, appBar }) => ({
  container: {
    flexDirection: 'column',
    // FIXME: need to inject safe area into theme
    marginTop: 62,
    padding: 10,
    borderBottomWidth: appBar.border?.thickness ?? 1,
    borderBottomColor: appBar.border?.color || primaryColor,
  },
  title: appBar.titleStyle,
}));
