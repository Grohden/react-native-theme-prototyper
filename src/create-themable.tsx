import React, { createContext, ReactNode, useContext, useMemo } from 'react';

export const createThemable = <T,>(initial: T) => {
  const ThemableContext = createContext(initial);

  const useTheme = () => useContext(ThemableContext);

  const ThemableProvider = (props: {
    children?: ReactNode | undefined;
    value: T;
  }) => {
    const parent = useTheme();

    const effectiveValue = useMemo(
      () => ({
        ...parent,
        ...props.value,
      }),
      [parent, props.value]
    );

    return (
      <ThemableContext.Provider value={effectiveValue}>
        {props.children}
      </ThemableContext.Provider>
    );
  };

  return { ThemableProvider, useTheme };
};
