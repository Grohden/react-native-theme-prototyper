import { useAppTheme } from '../app-theme';
import React, { ReactNode } from 'react';
import { TextTheme } from '../text';
import { IconButtonTheme } from '../buttons';
import { SizedBox } from '../sized-box';
import { Row } from '../row';
import { DecoratedBox } from '../decorated-box';
import { Column } from '../column';
import { Padding } from '../padding';
import { EdgeInsets } from '../../helpers';

// https://m3.material.io/components/top-app-bar/specs
// we're for now just implementing the small top appbar
// https://m3.material.io/components/top-app-bar/specs#14e23895-ac2e-40d8-b0f7-8d016c10a225
export const TopAppBar = (props: {
  leadingAction?: ReactNode;
  children?: ReactNode;
}) => {
  const { insets, topAppBar } = useAppTheme();
  const { container, leadingIcon, headline } = topAppBar;

  return (
    <DecoratedBox backgroundColor={container.color}>
      <Padding padding={EdgeInsets.only({ top: insets.top })}>
        <SizedBox height={64}>
          <Column mainAxisSize="max" mainAxisAlignment="center">
            <Row mainAxisSize="max" crossAxisAlignment="center">
              <SizedBox height={48} width={48}>
                <IconButtonTheme value={leadingIcon}>
                  {props.leadingAction}
                </IconButtonTheme>
              </SizedBox>
              <TextTheme value={headline}>{props.children}</TextTheme>
            </Row>
          </Column>
        </SizedBox>
      </Padding>
    </DecoratedBox>
  );
};
