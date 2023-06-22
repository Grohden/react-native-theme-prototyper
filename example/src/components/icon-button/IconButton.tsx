import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { createAppStyle } from '../app-theme';
import { Pressable } from 'react-native';

type IconName = 'chevron-left';

export const IconButton = ({
  name,
  onPress,
}: {
  name: IconName;
  onPress?: () => void;
}) => {
  const styles = useStyles();

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <FontAwesome
        name={name}
        size={styles.icon.size}
        color={styles.icon.color}
        backgroundColor={styles.icon.backgroundColor}
        borderRadius={styles.icon.borderRadius}
      />
    </Pressable>
  );
};

const useStyles = createAppStyle(({ iconButtonTheme }) => ({
  icon: {
    backgroundColor: iconButtonTheme.backgroundColor,
    borderRadius: iconButtonTheme.borderRadius,
    size: iconButtonTheme.size,
    color: iconButtonTheme.color,
  },
  container: {
    ...iconButtonTheme.padding,
    justifyContent: 'center',
  },
}));
