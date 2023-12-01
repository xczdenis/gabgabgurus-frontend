import { TObjectKeysSnakeToCamel } from '@/lib/types/case-converters';

function toCamelCase(str: string): string {
  return str.replace(/(_\w)/g, (matches) => matches[1].toUpperCase());
}

export const convertKeysSnakeToCamel = <T>(obj: T): TObjectKeysSnakeToCamel<T> => {
  if (Array.isArray(obj)) {
    return obj.map(convertKeysSnakeToCamel) as TObjectKeysSnakeToCamel<T>;
  } else if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((accumulator, key) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      accumulator[toCamelCase(key)] = convertKeysSnakeToCamel((obj as any)[key]);
      return accumulator;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }, {} as any) as TObjectKeysSnakeToCamel<T>;
  } else {
    return obj as TObjectKeysSnakeToCamel<T>;
  }
};
