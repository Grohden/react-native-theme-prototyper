import React, { createContext, ReactNode, useContext } from 'react';

export const createAppTheme = <T,>(initial: T) => {
  const AppThemeContext = createContext(initial);

  const useAppTheme = () => useContext(AppThemeContext);

  const AppThemeProvider = (props: {
    children?: ReactNode | undefined;
    value: T;
  }) => (
    <AppThemeContext.Provider value={props.value}>
      {props.children}
    </AppThemeContext.Provider>
  );

  return { Provider: AppThemeProvider, useHook: useAppTheme };
};
