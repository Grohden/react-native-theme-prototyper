import React from 'react';
import { Flex } from '../flex';

export const Column = (
  props: Omit<React.ComponentProps<typeof Flex>, 'direction'>
) => <Flex direction="column" {...props} />;
