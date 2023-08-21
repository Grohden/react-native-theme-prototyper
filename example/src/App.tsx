import React, { useState } from 'react';

import { AppTheme } from './components';
import { ButtonsScreen } from './screens/ButtonsScreen';
import { MainScreen } from './screens/MainScreen';

export default function App() {
  return (
    <AppTheme>
      <AfterTheme />
    </AppTheme>
  );
}

const AfterTheme = () => {
  const [current, setCurrent] = useState<('AppBar' | 'Buttons' | 'Main')[]>([
    'Main',
  ]);

  const onPop = () => {
    setCurrent((routes) => {
      if (routes.length === 1) {
        return ['Main'];
      }

      return routes.slice(0, routes.length - 1);
    });
  };

  const onOpen = (route: 'Buttons') => {
    setCurrent((old) => [...old, route]);
  };

  return (() => {
    switch (current[current.length - 1]) {
      case 'Buttons':
        return <ButtonsScreen onPop={onPop} />;
      default:
        return <MainScreen onOpen={onOpen} />;
    }
  })();
};
