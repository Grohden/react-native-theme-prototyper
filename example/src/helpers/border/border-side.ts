export type BorderSideArgs = { color?: string; width?: number };

export class BorderSide {
  public color: string | undefined;
  public width: number | undefined;

  static new(values: BorderSideArgs) {
    return new BorderSide(values);
  }

  private constructor(values: BorderSideArgs) {
    this.color = values.color;
    this.width = values.width;
  }
}
