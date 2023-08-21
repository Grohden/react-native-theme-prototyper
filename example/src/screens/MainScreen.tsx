import { Center, Scaffold, Text, TextButton, TopAppBar } from '../components';
import * as React from 'react';

export const MainScreen = ({
  onOpen,
}: {
  onOpen: (route: 'Buttons') => void;
}) => (
  <Scaffold
    topAppBar={
      <TopAppBar>
        <Text>Chose a view</Text>
      </TopAppBar>
    }
  >
    <Center>
      <TextButton onPress={() => onOpen('Buttons')}>
        <Text>Buttons</Text>
      </TextButton>
    </Center>
  </Scaffold>
);
