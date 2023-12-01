type TDeepStringify<T> = T extends null | string | number | boolean
  ? string
  : T extends (infer U)[]
  ? TDeepStringify<U>[]
  : { [K in keyof T]: TDeepStringify<T[K]> };

export const deepStringifyValues = <T>(obj: T): TDeepStringify<T> => {
  if (obj === null || typeof obj !== 'object') {
    return String(obj) as TDeepStringify<T>;
  }

  if (Array.isArray(obj)) {
    return obj.map(deepStringifyValues) as unknown as TDeepStringify<T>;
  }

  return Object.keys(obj).reduce(
    (newObj, key) => {
      newObj[key] = deepStringifyValues((obj as Record<string, unknown>)[key]) as unknown;
      return newObj;
    },
    {} as Record<string, unknown>
  ) as unknown as TDeepStringify<T>;
};
