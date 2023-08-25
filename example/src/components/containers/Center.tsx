import React from 'react';
import { Container } from './Container';
import { AlignmentDirectional } from '../../helpers';

export const Center = (props: { children?: React.ReactNode | undefined }) => (
  <Container align={AlignmentDirectional.center} {...props} />
);
