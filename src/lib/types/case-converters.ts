type TConvertSnakeToCamel<S extends string> = S extends `${infer P}_${infer Q}${infer R}`
  ? `${Lowercase<P>}${Uppercase<Q>}${TConvertSnakeToCamel<R>}`
  : S;

export type TObjectKeysSnakeToCamel<T> = T extends (infer R)[]
  ? TObjectKeysSnakeToCamel<R>[]
  : T extends object
  ? {
      [K in keyof T as TConvertSnakeToCamel<string & K>]: TObjectKeysSnakeToCamel<T[K]>;
    }
  : T;

type TConvertCamelToSnake<T extends string> = T extends `${infer P1}${infer P2}${infer P3}`
  ? P2 extends Uncapitalize<P2>
    ? `${Lowercase<P1>}${TConvertCamelToSnake<`${P2}${P3}`>}`
    : `${Lowercase<P1>}_${Lowercase<P2>}${TConvertCamelToSnake<P3>}`
  : Lowercase<T>;

export type TObjectKeysCamelToSnake<T> = {
  [K in keyof T as TConvertCamelToSnake<string & K>]: T[K] extends infer O
    ? O extends object
      ? TObjectKeysCamelToSnake<O>
      : O
    : never;
};
