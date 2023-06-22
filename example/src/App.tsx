import React, { useState } from 'react';

import { AppTheme } from './components';
import { AppBarScreen } from './screens/AppBarScreen';
import { ButtonsScreen } from './screens/ButtonsScreen';

export default function App() {
  return (
    <AppTheme>
      <AfterTheme />
    </AppTheme>
  );
}

const AfterTheme = () => {
  const [current] = useState<'AppBar' | 'Buttons'>('Buttons');

  return (() => {
    switch (current) {
      case 'AppBar':
        return <AppBarScreen />;
      case 'Buttons':
        return <ButtonsScreen />;
    }
  })();
};
