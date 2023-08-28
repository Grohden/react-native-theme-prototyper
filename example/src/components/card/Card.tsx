import { Container } from '../containers';
import {
  Border,
  BorderRadius,
  BoxConstraints,
  BoxDecoration,
} from '../../helpers';
import React, { Children } from 'react';
import { useAppTheme } from '../app-theme';
import type { Color } from '../../design-tokens';

export const Card = ({
  mode = 'outlined',
  clipsChildren,
  children,
}: React.PropsWithChildren<{
  mode?: 'outlined' | 'filled' | 'elevated';
  clipsChildren?: boolean;
}>) => {
  const { colors } = useAppTheme();
  let border: Border | undefined;
  let color: Color | undefined;

  switch (mode) {
    case 'outlined':
      color = colors.surface;
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
    <Container
      clipsChildren={clipsChildren}
      constraints={BoxConstraints.expand()}
      boxDecoration={BoxDecoration.new({
        border,
        color,
        borderRadius: BorderRadius.circular(12),
      })}
    >
      {Children.only(children)}
    </Container>
  );
};
