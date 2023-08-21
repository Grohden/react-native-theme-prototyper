import { useAppTheme } from '../app-theme';
import React, { ReactNode } from 'react';
import { TextTheme } from '../text/TextThemeData';
import { IconButtonTheme } from '../icon-button';
import { SizedBox } from '../sized-box';
import { Row } from '../row';

// https://m3.material.io/components/top-app-bar/specs
// we're for now just implementing the small top appbar
// https://m3.material.io/components/top-app-bar/specs#14e23895-ac2e-40d8-b0f7-8d016c10a225
export const TopAppBar = (props: {
  leadingAction?: ReactNode;
  children?: ReactNode;
}) => {
  const { topAppBarTheme } = useAppTheme();

  return (
    <SizedBox height={64}>
      <Row mainAxisSize="max" crossAxisAlignment="center">
        <SizedBox height={48} width={48}>
          <IconButtonTheme value={topAppBarTheme.icons}>
            {props.leadingAction}
          </IconButtonTheme>
        </SizedBox>
        <TextTheme value={topAppBarTheme.titleStyle}>
          {props.children}
        </TextTheme>
      </Row>
    </SizedBox>
  );
};
