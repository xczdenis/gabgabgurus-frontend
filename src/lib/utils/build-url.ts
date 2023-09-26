type TPathParams = { [key: string]: string | number };
type TQueryParams = { [key: string]: string | number | boolean };

interface IBuildUrlOptions {
  path?: TPathParams;
  query?: TQueryParams;
}

export function buildUrl(template: string, options: IBuildUrlOptions = {}): string {
  if (!template) {
    return '';
  }

  let url = template;

  const { path: pathParams, query: queryParams } = options;

  if (pathParams) {
    for (const [key, value] of Object.entries(pathParams)) {
      url = url.replace(`:${key}`, String(value));
    }
  }

  if (queryParams) {
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`)
      .join('&');

    if (queryString) {
      url += `?${queryString}`;
    }
  }

  return url;
}
