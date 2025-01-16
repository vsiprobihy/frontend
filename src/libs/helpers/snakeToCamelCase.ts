type SnakeToCamelCase<S extends string> = S extends `${infer T}_${infer U}`
  ? `${T}${Capitalize<SnakeToCamelCase<U>>}`
  : S;

export type SnakeToCamel<T> = {
  [K in keyof T as SnakeToCamelCase<string & K>]: T[K];
};

export const snakeToCamelCase = <T extends Record<string, unknown>>(
  data: T
): SnakeToCamel<T> => {
  const convertKey = (key: string): string =>
    key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

  return Object.keys(data).reduce((acc, key) => {
    const camelKey = convertKey(key) as keyof SnakeToCamel<T>;
    (acc as Record<string, unknown>)[camelKey as string] = data[key];
    return acc;
  }, {} as SnakeToCamel<T>);
};
