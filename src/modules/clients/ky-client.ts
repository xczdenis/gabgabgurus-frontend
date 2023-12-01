import { HttpStatuses } from '@/config';
import { getCookie } from '@/lib/utils/get-cookie';
import { isClient } from '@/lib/utils/is-client';
import { isServer } from '@/lib/utils/is-server';
import { makeMessageFromObject } from '@/lib/utils/make-message-from-object';
import ky, { HTTPError, KyResponse, Options } from 'ky';
import { KyInstance } from 'ky/distribution/types/ky';
import { HttpMethod } from 'ky/distribution/types/options';

const CSRF_COOKIE_NAME = 'csrftoken';
const CSRF_HEADER_NAME = 'X-CSRFToken';

const DEFAULT_OPTIONS: Options = {
  prefixUrl: process.env.BASE_API_URL || process.env.NEXT_PUBLIC_BASE_API_URL,
  credentials: 'include',
  retry: {
    limit: 2,
    methods: ['get'],
    statusCodes: [401],
  },
};

export class KyClient {
  private readonly _instance: KyInstance;
  private readonly _defaultContentTypeHeader = { 'Content-Type': 'application/json' };

  constructor() {
    const baseInstance = ky.create(DEFAULT_OPTIONS);

    this._instance = baseInstance.extend({
      hooks: {
        beforeRequest: [
          async (request) => {
            await this._setCookieAndCSRFHeaderOnServer(request);
            this._setCSRFHeaderOnClient(request);
          },
        ],
        beforeRetry: [
          async ({ error }) => {
            await this._refreshToken(error as HTTPError, baseInstance);
          },
        ],
      },
    });
  }

  public async request<T>(method: HttpMethod, url: string, options?: Options): Promise<T> {
    options = this._getDefaultOptions(options);

    let result = null;

    try {
      const response = await this._instance[method](url, options);
      result = await this._parseResponse<T>(response);
    } catch (error) {
      const errorMessage = await this._logError(error, [method, url]);
      throw new Error(errorMessage);
    }

    return result as T;
  }

  private async _setCookieAndCSRFHeaderOnServer(request: Request) {
    if (isServer()) {
      const { cookies } = await import('next/headers');
      const cookieStore = cookies();
      request.headers.set('Cookie', cookieStore.toString());
      const csrfToken = cookieStore.get(CSRF_COOKIE_NAME);
      this._setCSRFHeader(request, csrfToken?.name);
    }
  }

  private _setCSRFHeaderOnClient(request: Request) {
    if (isClient()) {
      const csrfToken = getCookie(CSRF_COOKIE_NAME);
      this._setCSRFHeader(request, csrfToken);
    }
  }

  private _setCSRFHeader(request: Request, value: string | undefined) {
    if (value) {
      request.headers.set(CSRF_HEADER_NAME, value);
    }
  }

  private async _refreshToken(error: HTTPError, instance: KyInstance) {
    const response = error.response;
    if (response && response.status === HttpStatuses.Unauthorized) {
      await instance.post('auth/token/refresh/');
    }
  }

  private _getDefaultOptions(options?: Options) {
    const specifiedHeaders = options?.headers;
    const defaultHeaders = this._getDefaultContentTypeHeader(options);
    const mergedHeaders = {
      ...defaultHeaders,
      ...specifiedHeaders,
    };
    if (Object.keys(mergedHeaders).length > 0) {
      return {
        ...options,
        headers: mergedHeaders,
      };
    }
    return options;
  }

  private _getDefaultContentTypeHeader(options?: Options): Record<string, string> {
    return options?.body ? {} : this._defaultContentTypeHeader;
  }

  private async _logError(error: unknown, additionalLogParams?: string[]): Promise<string> {
    if (additionalLogParams) {
      console.info(additionalLogParams.join(' '));
    }
    const errorMessage = await this._makeErrorMessageFromError(error);
    if (errorMessage && error instanceof HTTPError) {
      if (error.response.status !== HttpStatuses.Unauthorized) {
        console.error(errorMessage);
      }
    } else {
      console.error(error);
    }
    return errorMessage;
  }

  private async _makeErrorMessageFromError(error: unknown): Promise<string> {
    let errorMessage = '';

    if (error instanceof HTTPError) {
      const errorResponse = await this._parseErrorResponseFromHTTPError(error);
      if (errorResponse) {
        errorMessage = makeMessageFromObject(errorResponse);
      } else {
        errorMessage = error.response.statusText;
      }
    }

    return errorMessage;
  }

  private async _parseErrorResponseFromHTTPError(error: HTTPError) {
    let result;
    try {
      result = await error.response.json();
    } catch {
      result = null;
    }
    return result;
  }

  private async _parseResponse<T>(response: KyResponse): Promise<T | null> {
    let result = null;
    if (response.status !== HttpStatuses.NoContent) {
      try {
        result = await response.json<T>();
      } catch (error) {
        console.warn('An error occurred while parsing the response', response);
        console.warn(error);
        return null as T;
      }
    }
    return result;
  }
}
