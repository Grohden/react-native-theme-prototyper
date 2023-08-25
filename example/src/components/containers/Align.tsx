import React from 'react';
import type { AlignmentGeometry } from '../../helpers';
import { Container } from './Container';

export const Align = (
  props: React.PropsWithChildren<{ align: AlignmentGeometry }>
) => <Container {...props} />;
