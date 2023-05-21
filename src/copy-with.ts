// Might be worth using a deep comparison memoization for optimization?
export const copyWith = <T>(from: T, overrides: Partial<T>): T => ({
  ...from,
  ...overrides,
});
