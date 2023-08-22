import * as React from 'react';
import { Column, Scaffold, Text, TextButton, TopAppBar } from '../components';

export const MainScreen = ({
  onOpen,
}: {
  onOpen: (route: 'Buttons' | 'Cards' | 'Typography') => void;
}) => (
  <Scaffold
    topAppBar={
      <TopAppBar>
        <Text>Chose a view</Text>
      </TopAppBar>
    }
  >
    <Column crossAxisAlignment="center">
      <TextButton onPress={() => onOpen('Typography')}>
        <Text>Typography</Text>
      </TextButton>
      <TextButton onPress={() => onOpen('Buttons')}>
        <Text>Buttons</Text>
      </TextButton>
      <TextButton onPress={() => onOpen('Cards')}>
        <Text>Cards</Text>
      </TextButton>
    </Column>
  </Scaffold>
);
