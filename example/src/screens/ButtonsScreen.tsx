import * as React from 'react';
import {
  BackButton,
  Column,
  IconButton,
  IconButtonTheme,
  OutlineButton,
  OutlineButtonTheme,
  Padding,
  Row,
  Scaffold,
  Spacer,
  Text,
  TextButton,
  TextButtonTheme,
  TopAppBar,
  useAppTheme,
} from '../components';
import { EdgeInsets } from '../helpers';

const noop = () => {};

export const ButtonsScreen = (props: { onPop: () => void }) => {
  const { iconButton, textButton, outlineButton, typeScale } = useAppTheme();

  return (
    <Scaffold
      topAppBar={
        <TopAppBar leadingAction={<BackButton onPress={props.onPop} />}>
          <Text>Button</Text>
        </TopAppBar>
      }
    >
      <Padding padding={EdgeInsets.all(12)}>
        <Column mainAxisSize="max" crossAxisAlignment="start">
          <Text style={typeScale.headlineSmall}>Text buttons</Text>
          <Row mainAxisSize="max" mainAxisAlignment="center">
            <TextButton onPress={noop}>
              <Text>Default</Text>
            </TextButton>
            <Spacer.Tiny />
            <TextButtonTheme value={{ ...textButton, color: '#7BD22E' }}>
              <TextButton onPress={noop}>
                <Text>Custom</Text>
              </TextButton>
            </TextButtonTheme>
          </Row>
          <Spacer.Medium />
          <Text style={typeScale.titleLarge}>Outline Buttons</Text>
          <Spacer.Medium />
          <Row mainAxisSize="max" mainAxisAlignment="center">
            <OutlineButton onPress={noop}>
              <Text>Default</Text>
            </OutlineButton>
            <Spacer.Tiny />
            <OutlineButtonTheme value={{ ...outlineButton, color: '#D22E7B' }}>
              <OutlineButton onPress={noop}>
                <Text>Custom</Text>
              </OutlineButton>
            </OutlineButtonTheme>
          </Row>
          <Spacer.Medium />
          <Text style={typeScale.titleLarge}>Outline Buttons</Text>
          <Spacer.Medium />
          <Row mainAxisSize="max" mainAxisAlignment="center">
            <IconButtonTheme value={{ ...iconButton, size: 28 }}>
              <IconButton name="arrow-back" onPress={noop} />
              <IconButton name="search" onPress={noop} />
              <IconButton name="apartment" onPress={noop} />
              <IconButton name="attach-file" onPress={noop} />
            </IconButtonTheme>
          </Row>
        </Column>
      </Padding>
    </Scaffold>
  );
};
