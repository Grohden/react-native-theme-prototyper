import * as React from 'react';
import {
  AppBar,
  Center,
  OutlineButton,
  OutlineButtonTheme,
  Spacer,
  Text,
  TextButton,
  TextButtonTheme,
  useTextButtonTheme,
} from '../components';
import { IconButton } from '../components/icon-button/IconButton';

const noop = () => {};
export const ButtonsScreen = () => {
  const theme = useTextButtonTheme();

  return (
    <>
      <AppBar>
        <IconButton name="chevron-left" onPress={noop} />
        <Text>Buttons</Text>
      </AppBar>
      <Center>
        <TextButton onPress={noop}>
          <Text>Text button (default)</Text>
        </TextButton>
        <Spacer.Tiny />
        <TextButtonTheme value={{ ...theme, color: '#7BD22E' }}>
          <TextButton onPress={noop}>
            <Text>Text button (custom)</Text>
          </TextButton>
        </TextButtonTheme>
      </Center>
      <Spacer.Tiny />
      <Center>
        <OutlineButton onPress={noop}>
          <Text>Outline button (Default)</Text>
        </OutlineButton>
        <Spacer.Medium />
        <OutlineButtonTheme value={{ ...theme, color: '#D22E7B' }}>
          <OutlineButton onPress={noop}>
            <Text>Outline button (custom)</Text>
          </OutlineButton>
        </OutlineButtonTheme>
      </Center>
    </>
  );
};
