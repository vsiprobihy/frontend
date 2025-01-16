type CamelToSnakeCase<S extends string> = S extends `${infer T}${infer U}`
  ? U extends Capitalize<U>
    ? `${T}_${Lowercase<U>}`
    : `${T}${CamelToSnakeCase<U>}`
  : S;

export type CamelToSnake<T> = {
  [K in keyof T as CamelToSnakeCase<string & K>]: T[K];
};

export const camelToSnake = <T extends Record<string, unknown>>(
  data: T
): CamelToSnake<T> => {
  const convertKey = (key: string): string =>
    key.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);

  return Object.keys(data).reduce((acc, key) => {
    const snakeKey = convertKey(key) as keyof CamelToSnake<T>;
    (acc as Record<string, unknown>)[snakeKey as string] = data[key];
    return acc;
  }, {} as CamelToSnake<T>);
};
