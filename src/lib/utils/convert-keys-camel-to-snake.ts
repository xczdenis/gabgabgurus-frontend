import { TObjectKeysCamelToSnake } from '@/lib/types/case-converters';

function toSnakeCase(str: string): string {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase();
}

export const convertKeysCamelToSnake = <T>(obj: T): TObjectKeysCamelToSnake<T> => {
  if (Array.isArray(obj)) {
    return obj.map(convertKeysCamelToSnake) as TObjectKeysCamelToSnake<T>;
  } else if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((accumulator, key) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      accumulator[toSnakeCase(key)] = convertKeysCamelToSnake((obj as any)[key]);
      return accumulator;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }, {} as any) as TObjectKeysCamelToSnake<T>;
  } else {
    return obj as TObjectKeysCamelToSnake<T>;
  }
};
