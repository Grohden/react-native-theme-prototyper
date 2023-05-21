import React, { createContext, ReactNode, useContext, useMemo } from 'react';

export const createThemable = <T,>(initial: T) => {
  const Context = createContext(initial);

  const useComponentTheme = () => useContext(Context);

  // Themable provider merges the upper parent context into this
  // TODO: we might want to consider a flag for this behavior? merge might not be
  //  desirable every time
  const Provider = (props: { children?: ReactNode | undefined; value: T }) => {
    const parent = useComponentTheme();

    const effectiveValue = useMemo(
      () => ({
        ...parent,
        ...props.value,
      }),
      [parent, props.value]
    );

    return (
      <Context.Provider value={effectiveValue}>
        {props.children}
      </Context.Provider>
    );
  };

  return { Provider, useComponentTheme };
};
