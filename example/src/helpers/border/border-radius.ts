export class BorderRadius {
  // For now we only support circular.
  static circular(value: number) {
    return new BorderRadius(value);
  }

  private constructor(private value: number) {}

  toStyle() {
    return {
      borderRadius: this.value,
    };
  }
}
