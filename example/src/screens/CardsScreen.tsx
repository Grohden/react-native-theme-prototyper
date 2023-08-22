import * as React from 'react';
import {
  BackButton,
  Card,
  Column,
  Padding,
  Scaffold,
  Text,
  TopAppBar,
} from '../components';
import { EdgeInsets } from '../helpers';

export const CardsScreen = (props: { onPop: () => void }) => {
  return (
    <Scaffold
      topAppBar={
        <TopAppBar leadingAction={<BackButton onPress={props.onPop} />}>
          <Text>Buttons</Text>
        </TopAppBar>
      }
    >
      <Column crossAxisAlignment="center">
        <Card>
          <Padding padding={EdgeInsets.symmetric({ horizontal: 12 })}>
            <Text>Buttons</Text>
          </Padding>
        </Card>
      </Column>
    </Scaffold>
  );
};
