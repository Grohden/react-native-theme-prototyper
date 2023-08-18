import { useAppTheme } from '../app-theme';
import React, { ReactNode } from 'react';
import { TextTheme } from '../text/TextThemeData';
import {
  IconButtonTheme,
  IconButtonThemeData,
} from '../icon-button/IconButtonThemeData';
import chroma from 'chroma-js';
import { Spacer } from '../spacer/Spacer';
import { Row } from '../row/Row';
import { Border, BorderRadius, BorderSide, EdgeInsets } from '../../helpers';
import { Padding } from '../padding/Padding';
import { DecoratedBox } from '../decorated-box/DecoratedBox';
import { CrossAxisAlignment } from '../../helpers/cross-axis-alignment';

export const AppBar = (props: { children?: ReactNode | undefined }) => {
  const { appBarTheme, iconButtonTheme, insets, primaryColor, roundness } =
    useAppTheme();

  const border = Border.only({
    bottom: BorderSide.new({
      width: appBarTheme.border?.thickness ?? 1,
      color: appBarTheme.border?.color || primaryColor,
    }),
  });

  const iconColor = (appBarTheme.icons || iconButtonTheme)?.color;
  const iconBackground = (appBarTheme.icons || iconButtonTheme)
    ?.backgroundColor;
  const iconTheme: IconButtonThemeData = {
    padding: EdgeInsets.all(12),
    borderRadius: BorderRadius.circular(roundness),
    size: iconButtonTheme?.size || 20,
    backgroundColor: iconBackground,
    color: iconColor
      ? iconColor
      : chroma(iconBackground || 'white').luminance() > 0.5
      ? 'black'
      : 'white',
  };

  return (
    <>
      {/* FIXME: should we care about safe area here? */}
      <Spacer.Specific size={insets.top} />
      <Padding padding={EdgeInsets.symmetric({ vertical: 10 })}>
        <DecoratedBox border={border}>
          <Padding padding={EdgeInsets.only({ bottom: 10, left: 5, right: 5 })}>
            <Row crossAxisAlignment={CrossAxisAlignment.center}>
              <IconButtonTheme value={iconTheme}>
                <TextTheme value={appBarTheme.titleStyle}>
                  {props.children}
                </TextTheme>
              </IconButtonTheme>
            </Row>
          </Padding>
        </DecoratedBox>
      </Padding>
    </>
  );
};
