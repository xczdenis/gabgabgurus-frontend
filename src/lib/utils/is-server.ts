export const isServer = () => {
  /*
  This is a hacky way to check if we're on the server or not.
   */
  return typeof window === 'undefined';
};
