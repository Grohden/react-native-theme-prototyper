import { Platform } from 'react-native';
import { IconButton } from '../icon-button';
import React from 'react';

export const BackButton = (props: { onPress?: () => void }) => (
  <IconButton
    name={Platform.OS === 'ios' ? 'arrow-back-ios' : 'arrow-back'}
    {...props}
  />
);
