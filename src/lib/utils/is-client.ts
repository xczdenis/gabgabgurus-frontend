export function isClient(): boolean {
  /*
  This is a hacky way to check if we're on the client or not.
   */
  return typeof window !== 'undefined';
}
