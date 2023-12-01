export const makeMessageFromObject = (obj: unknown): string => {
  let msg = '';

  if (typeof obj === 'object' && obj !== null) {
    if (Object.keys(obj).length > 0) {
      const result: string[] = [];

      Object.entries(obj).forEach(([key, valueArr]) => {
        if (Array.isArray(valueArr)) {
          valueArr.forEach((value) => {
            result.push(`${key}: ${value};`);
          });
        } else {
          result.push(valueArr as string);
        }
      });

      msg = result.join('\n');
    }
  }
  if (!msg) {
    msg = String(obj);
  }

  return msg;
};
