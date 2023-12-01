export const deepCopy = <T>(obj: T): T => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date((obj as Date).getTime()) as unknown as T;
  }

  if (Array.isArray(obj)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return obj.reduce((arr: any[], item: any, index: number) => {
      arr[index] = deepCopy(item);
      return arr;
    }, []) as unknown as T;
  }

  if (obj instanceof Object) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Object.keys(obj).reduce((newObj: { [key: string]: any }, key: string) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      newObj[key] = deepCopy((obj as { [key: string]: any })[key]);
      return newObj;
    }, {}) as unknown as T;
  }

  // Explicitly return undefined for non-object, null or unexpected types
  return undefined as unknown as T;
};
