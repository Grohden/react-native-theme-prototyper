import { DecoratedBox } from '../containers';
import { Border, BorderRadius, BoxDecoration } from '../../helpers';
import React from 'react';
import { useAppTheme } from '../app-theme';
import type { Color } from '../../design-tokens';

export const Card = ({
  mode = 'outlined',
  clipsChildren,
  children,
}: React.PropsWithChildren<{
  mode?: 'outlined' | 'filled';
  clipsChildren?: boolean;
}>) => {
  const { colors } = useAppTheme();
  let border: Border | undefined;
  let color: Color | undefined;

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
      clipsChildren={clipsChildren}
      boxDecoration={BoxDecoration.new({
        border,
        color,
        borderRadius: BorderRadius.circular(12),
      })}
    >
      {children}
    </DecoratedBox>
  );
};
