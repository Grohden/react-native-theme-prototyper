import { createAppStyle } from '../app-theme/AppTheme';
import { View } from 'react-native';
import React, { ReactNode } from 'react';
import { TextTheme } from '../text/TextTheme';

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
    borderBottomWidth: appBar.border?.value.thickness ?? 1,
    borderBottomColor: appBar.border?.value.color || primaryColor,
  },
  title: appBar.titleStyle.value,
}));
