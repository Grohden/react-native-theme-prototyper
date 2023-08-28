import { Container } from './Container';
import type { BoxConstraints } from '../../helpers';
import React from 'react';

export const ConstrainedBox = (
  props: React.PropsWithChildren<{
    constraints: BoxConstraints;
  }>
) => <Container {...props} />;
