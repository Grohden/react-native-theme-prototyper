export type ThemeValue<T> = {
  value: T;
  copyWith: (parts: Partial<T>) => ThemeValue<T>;
};

export const themeValue = <T>(value: T): ThemeValue<T> => ({
  value,
  copyWith: (parts) => themeValue({ ...value, ...parts }),
});
