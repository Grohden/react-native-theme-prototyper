import type { Border, BorderRadius } from './border';
import type { Color } from '../design-tokens';
import type { ViewStyle } from 'react-native';

type BoxDecorationProps = {
  border?: Border;
  borderRadius?: BorderRadius;
  color?: Color;
};

export class BoxDecoration {
  static new(props: BoxDecorationProps) {
    return new BoxDecoration(props.border, props.borderRadius, props.color);
  }

  private constructor(
    private border: BoxDecorationProps['border'],
    private borderRadius: BoxDecorationProps['borderRadius'],
    private color: BoxDecorationProps['color']
  ) {}

  toStyle() {
    return {
      backgroundColor: this.color,
      ...this.border?.toStyle(),
      ...this.borderRadius?.toStyle(),
    } satisfies ViewStyle;
  }
}
