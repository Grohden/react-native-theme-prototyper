import React from 'react';
import { Container } from './Container';
import type { BoxDecoration } from '../../helpers';

export const DecoratedBox = (
  props: React.PropsWithChildren<{
    boxDecoration: BoxDecoration;
    // FIXME: maybe its better to make this a component, but its usually a practice to
    //  clip children when using radius, so for now it makes sense
    clipsChildren?: boolean;
  }>
) => <Container {...props} />;
