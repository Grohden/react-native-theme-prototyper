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
  SizedBox,
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
            <SizedBox width={8} />
            <TextButtonTheme value={{ ...textButton, color: '#7BD22E' }}>
              <TextButton onPress={noop}>
                <Text>Custom</Text>
              </TextButton>
            </TextButtonTheme>
          </Row>
          <SizedBox height={12} />
          <Text style={typeScale.titleLarge}>Outline Buttons</Text>
          <SizedBox height={12} />
          <Row mainAxisSize="max" mainAxisAlignment="center">
            <OutlineButton onPress={noop}>
              <Text>Default</Text>
            </OutlineButton>
            <SizedBox width={8} />
            <OutlineButtonTheme value={{ ...outlineButton, color: '#D22E7B' }}>
              <OutlineButton onPress={noop}>
                <Text>Custom</Text>
              </OutlineButton>
            </OutlineButtonTheme>
          </Row>
          <SizedBox height={12} />
          <Text style={typeScale.titleLarge}>Outline Buttons</Text>
          <SizedBox height={12} />
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
