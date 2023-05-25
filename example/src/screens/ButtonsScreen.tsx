import { OutlineButtonTheme, Spacer, Text } from '../components';
import * as React from 'react';
import {
  Center,
  TextButton,
  TextButtonTheme,
  useTextButtonTheme,
  OutlineButton,
} from '../components';

const noop = () => {};
export const ButtonsScreen = () => {
  const theme = useTextButtonTheme();

  return (
    <>
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
        <Spacer.Tiny />
        <OutlineButtonTheme value={{ ...theme, color: '#D22E7B' }}>
          <OutlineButton onPress={noop}>
            <Text>Outline button (custom)</Text>
          </OutlineButton>
        </OutlineButtonTheme>
      </Center>
    </>
  );
};
