export const objFromArray = <T, K extends keyof T>(arr: T[], key: K = 'id' as K): Record<string, T> => {
  return arr.reduce((accumulator: Record<string, T>, current: T) => {
    accumulator[current[key] as unknown as string] = current;
    return accumulator;
  }, {});
};
