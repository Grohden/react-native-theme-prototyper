import * as React from 'react';

import { AppTheme, ScreenContainer } from './components';
import { AppBarScreen } from './screens/AppBarScreen';
import { useState } from 'react';
import { ButtonsScreen } from './screens/ButtonsScreen';

export default function App() {
  return (
    <AppTheme>
      <AfterTheme />
    </AppTheme>
  );
}

const AfterTheme = () => {
  const [current] = useState<'AppBar' | 'Buttons'>('AppBar');

  const screen = (() => {
    switch (current) {
      case 'AppBar':
        return <AppBarScreen />;
      case 'Buttons':
        return <ButtonsScreen />;
    }
  })();

  return <ScreenContainer>{screen}</ScreenContainer>;
};
