export const removeNullKeys = <T>(obj: Record<string, unknown>): Record<string, T> => {
  return Object.fromEntries(Object.entries(obj).filter(([, value]) => value !== null && value != undefined)) as Record<
    string,
    T
  >;
};
