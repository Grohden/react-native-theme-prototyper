export type BorderSideArgs = { color?: string; width?: number };

export class BorderSide {
  public color: string | undefined;
  public width: number | undefined;

  private constructor(values: BorderSideArgs) {
    this.color = values.color;
    this.width = values.width;
  }

  static new(values: BorderSideArgs) {
    return new BorderSide(values);
  }
}
