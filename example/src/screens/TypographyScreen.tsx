import * as React from 'react';
import {
  BackButton,
  Padding,
  Scaffold,
  Text,
  TopAppBar,
  useAppTheme,
} from '../components';
import { EdgeInsets } from '../helpers';

const uppersReg = /(?=[A-Z])/g;
export const TypographyScreen = (props: { onPop: () => void }) => {
  const { typeScale } = useAppTheme();

  return (
    <Scaffold
      topAppBar={
        <TopAppBar leadingAction={<BackButton onPress={props.onPop} />}>
          <Text>Typography</Text>
        </TopAppBar>
      }
    >
      <Padding padding={EdgeInsets.symmetric({ horizontal: 12 })}>
        {Object.entries(typeScale).map(([key, value]) => (
          <Text key={key} style={value}>
            {key.split(uppersReg).join(' ')}
          </Text>
        ))}
      </Padding>
    </Scaffold>
  );
};
