import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { useAppTheme } from '../../app-theme';
import { Center } from '../../center';

type IconName = React.ComponentProps<typeof MaterialIcons>['name'];

export const IconButton = ({
  name,
  onPress,
}: {
  name: IconName;
  onPress?: () => void;
}) => {
  const { iconButton } = useAppTheme();

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Center>
        <MaterialIcons
          name={name}
          size={iconButton.size}
          color={iconButton.color}
        />
      </Center>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});
