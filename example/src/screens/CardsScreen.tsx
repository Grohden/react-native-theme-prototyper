import * as React from 'react';
import {
  BackButton,
  Card,
  Center,
  Column,
  Padding,
  Row,
  Scaffold,
  SizedBox,
  Spacer,
  Text,
  TopAppBar,
} from '../components';
import { EdgeInsets } from '../helpers';

export const CardsScreen = (props: { onPop: () => void }) => {
  return (
    <Scaffold
      topAppBar={
        <TopAppBar leadingAction={<BackButton onPress={props.onPop} />}>
          <Text>Cards</Text>
        </TopAppBar>
      }
    >
      <Padding padding={EdgeInsets.symmetric({ vertical: 24 })}>
        <Column crossAxisAlignment="center" mainAxisSize="max">
          <Row mainAxisAlignment="center" mainAxisSize="max">
            <Card mode="outlined">
              <SizedBox height={100} width={100}>
                <Center>
                  <Padding padding={EdgeInsets.symmetric({ horizontal: 12 })}>
                    <Text>Outlined</Text>
                  </Padding>
                </Center>
              </SizedBox>
            </Card>
          </Row>
          <Spacer.Tiny />
          <Row mainAxisAlignment="center" mainAxisSize="max">
            <Card mode="filled" clipsChildren>
              <SizedBox height={100} width={100}>
                <Center>
                  <Padding padding={EdgeInsets.symmetric({ horizontal: 12 })}>
                    <Text>Filled</Text>
                  </Padding>
                </Center>
              </SizedBox>
            </Card>
          </Row>
        </Column>
      </Padding>
    </Scaffold>
  );
};
