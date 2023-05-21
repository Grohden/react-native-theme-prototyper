import { createAppStyle } from '../app-theme';
import { View } from 'react-native';
import React, { ReactNode } from 'react';
import { TextThemeData, TextTheme } from '../text';
import { createThemable } from 'react-native-theme-prototyper';

export type AppBarThemeData = {
  border: { color: string; thickness: number };
  titleStyle: TextThemeData;
};

export const { Provider: AppBarTheme, useComponentTheme: useAppBarTheme } =
  createThemable<AppBarThemeData>(null!);

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
