import React from 'react';
import type { EdgeInsets } from '../../helpers';
import { Container } from './Container';

export const Padding = (
  props: React.PropsWithChildren<{ padding: EdgeInsets }>
) => <Container {...props} />;
