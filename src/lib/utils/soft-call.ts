type TOptions = {
  logError?: boolean;
};

const defaultOptions: TOptions = {
  logError: false,
};

export const softCall = async <T>(callback: () => Promise<T>, options?: TOptions): Promise<T | null> => {
  const defaults = {
    ...options,
    ...defaultOptions,
  };

  return callback()
    .then((result) => result)
    .catch((error) => {
      if (defaults.logError) {
        console.error(error);
      }
      return null;
    });
};
