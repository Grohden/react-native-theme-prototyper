import * as React from 'react';
import {
  BackButton,
  Column,
  OutlineButton,
  OutlineButtonTheme,
  Scaffold,
  Spacer,
  Text,
  TextButton,
  TextButtonTheme,
  TopAppBar,
  useOutlineButtonTheme,
  useTextButtonTheme,
} from '../components';

const noop = () => {};

export const ButtonsScreen = (props: { onPop: () => void }) => {
  const textButtonTheme = useTextButtonTheme();
  const outlineButtonTheme = useOutlineButtonTheme();

  return (
    <Scaffold
      topAppBar={
        <TopAppBar leadingAction={<BackButton onPress={props.onPop} />}>
          <Text>Buttons</Text>
        </TopAppBar>
      }
    >
      <Column crossAxisAlignment="center">
        <TextButton onPress={noop}>
          <Text>Text button (default)</Text>
        </TextButton>
        <Spacer.Tiny />
        <TextButtonTheme
          value={{
            ...textButtonTheme,
            color: '#7BD22E',
          }}
        >
          <TextButton onPress={noop}>
            <Text>Text button (custom)</Text>
          </TextButton>
        </TextButtonTheme>
        <Spacer.Tiny />
        <OutlineButton onPress={noop}>
          <Text>Outline button (Default)</Text>
        </OutlineButton>
        <Spacer.Medium />
        <OutlineButtonTheme
          value={{
            ...outlineButtonTheme,
            color: '#D22E7B',
          }}
        >
          <OutlineButton onPress={noop}>
            <Text>Outline button (custom)</Text>
          </OutlineButton>
        </OutlineButtonTheme>
      </Column>
    </Scaffold>
  );
};
