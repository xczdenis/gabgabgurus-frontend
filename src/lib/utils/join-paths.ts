export const joinPaths = (path1: string | undefined | null, path2: string): string => {
  const _path1 = path1 ? path1 : '';
  const _path2 = path2 ? path2 : '';

  if (_path1.endsWith('/') || _path2.startsWith('/')) {
    return _path1 + _path2;
  }

  return _path1 + '/' + _path2;
};
