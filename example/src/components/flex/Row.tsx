import React from 'react';
import { Flex } from '../flex';

export const Row = (
  props: Omit<React.ComponentProps<typeof Flex>, 'direction'>
) => <Flex direction="row" {...props} />;
