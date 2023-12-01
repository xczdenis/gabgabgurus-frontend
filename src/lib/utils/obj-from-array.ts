export const objFromArray = <T extends Record<string, unknown>>(arr: T[], key: string = 'id') =>
  arr.reduce((accumulator: Record<string, T>, current: T) => {
    accumulator[current[key] as string] = current;
    return accumulator;
  }, {});
