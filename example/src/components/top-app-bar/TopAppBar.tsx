import { useAppTheme } from '../app-theme';
import React, { ReactNode } from 'react';
import { TextTheme } from '../text';
import { IconButtonTheme } from '../buttons';
import { Row, Column } from '../flex';
import {
  DecoratedBox,
  Padding,
  Center,
  Expanded,
  Container,
} from '../containers';
import {
  AlignmentDirectional,
  Border,
  BoxConstraints,
  BoxDecoration,
  EdgeInsets,
  Size,
} from '../../helpers';

// https://m3.material.io/components/top-app-bar/specs
// we're for now just implementing the small top appbar
// https://m3.material.io/components/top-app-bar/specs#14e23895-ac2e-40d8-b0f7-8d016c10a225
export const TopAppBar = (props: {
  leadingAction?: ReactNode;
  children?: ReactNode;
  centered?: boolean;
}) => {
  const { insets, topAppBar } = useAppTheme();
  const { container, leadingIcon, headline } = topAppBar;

  let title = <TextTheme value={headline}>{props.children}</TextTheme>;
  if (props.centered) {
    title = <Center>{title}</Center>;
  } else if (!props.leadingAction) {
    title = <Padding padding={EdgeInsets.only({ left: 16 })}>{title}</Padding>;
  }

  const hasIcons = !!props.leadingAction;

  return (
    <DecoratedBox boxDecoration={BoxDecoration.new({ color: container.color })}>
      <Padding padding={EdgeInsets.only({ top: insets.top })}>
        <Container
          boxDecoration={BoxDecoration.new({
            border: Border.debug(),
          })}
          constraints={BoxConstraints.tight(Size.fromHeight(64))}
          align={AlignmentDirectional.center}
        >
          <Column mainAxisSize="max" mainAxisAlignment="center">
            <Row mainAxisSize="max" crossAxisAlignment="center">
              {hasIcons && (
                <Container constraints={BoxConstraints.tight(Size.square(48))}>
                  <IconButtonTheme value={leadingIcon}>
                    {props.leadingAction}
                  </IconButtonTheme>
                </Container>
              )}
              <Expanded>{title}</Expanded>
              {hasIcons && <Expanded />}
            </Row>
          </Column>
        </Container>
      </Padding>
    </DecoratedBox>
  );
};
