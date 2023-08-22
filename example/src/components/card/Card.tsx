import { DecoratedBox } from '../decorated-box';
import { Border, BorderRadius } from '../../helpers';
import React from 'react';
import { useAppTheme } from '../app-theme';

export const Card = ({
  mode = 'outlined',
  children,
}: React.PropsWithChildren<{ mode?: 'outlined' | 'filled' }>) => {
  const { colors } = useAppTheme();
  let border: Border | undefined;
  let color: string | undefined;

  switch (mode) {
    case 'outlined':
      color = colors.surface;
      border = Border.all({
        width: 1,
        color: colors.outline,
      });
      break;
    case 'filled':
      color = colors.surfaceContainerHighest;
      border = Border.all({
        width: 1,
        color: colors.outline,
      });
      break;
  }

  return (
    <DecoratedBox
      borderRadius={BorderRadius.circular(12)}
      border={border}
      backgroundColor={color}
    >
      {children}
    </DecoratedBox>
  );
};
