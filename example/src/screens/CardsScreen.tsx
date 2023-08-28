import * as React from 'react';
import {
  BackButton,
  Card,
  Column,
  ConstrainedBox,
  Padding,
  Row,
  Scaffold,
  SizedBox,
  Text,
  TopAppBar,
  useAppTheme,
} from '../components';
import { BoxConstraints, EdgeInsets } from '../helpers';

export const CardsScreen = (props: { onPop: () => void }) => {
  const { typeScale } = useAppTheme();
  const cardPadding = EdgeInsets.all(12);
  const cardConstraints = BoxConstraints.expand({
    height: 100,
  });

  return (
    <Scaffold
      topAppBar={
        <TopAppBar leadingAction={<BackButton onPress={props.onPop} />}>
          <Text>Cards</Text>
        </TopAppBar>
      }
    >
      <Padding padding={EdgeInsets.all(12)}>
        <Column crossAxisAlignment="center" mainAxisSize="max">
          <Row mainAxisAlignment="center" mainAxisSize="max">
            <ConstrainedBox constraints={cardConstraints}>
              <Card mode="outlined">
                <Padding padding={cardPadding}>
                  <Text style={typeScale.titleMedium}>Outlined</Text>
                </Padding>
              </Card>
            </ConstrainedBox>
          </Row>
          <SizedBox height={12} />
          <Row mainAxisAlignment="center" mainAxisSize="max">
            <ConstrainedBox constraints={cardConstraints}>
              <Card mode="filled" clipsChildren>
                <Padding padding={cardPadding}>
                  <Text style={typeScale.titleMedium}>Filled</Text>
                </Padding>
              </Card>
            </ConstrainedBox>
          </Row>
        </Column>
      </Padding>
    </Scaffold>
  );
};
