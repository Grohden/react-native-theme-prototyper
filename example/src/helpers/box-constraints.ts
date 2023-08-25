import type { Size } from './size';

export class BoxConstraints {
  static expand({ width, height }: { width?: number; height?: number }) {
    return new BoxConstraints(
      width ?? Infinity,
      width ?? Infinity,
      height ?? Infinity,
      height ?? Infinity
    );
  }

  static loose(size: Size) {
    return new BoxConstraints(0, size.width, 0, size.height);
  }

  static tight(size: Size) {
    return new BoxConstraints(size.width, size.width, size.width, size.height);
  }

  constructor(
    public readonly minWidth = 0,
    public readonly maxWidth = Infinity,
    public readonly minHeight = 0,
    public readonly maxHeight = Infinity
  ) {}
}
