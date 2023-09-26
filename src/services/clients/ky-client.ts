import ky, { HTTPError } from 'ky';
import { KyInstance } from 'ky/distribution/types/ky';

export class KyClient {
  private readonly _instance: KyInstance;

  constructor() {
    const baseInstance = ky.create({
      prefixUrl: process.env.NEXT_PUBLIC_API_URL,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      retry: {
        limit: 2,
        methods: ['get'],
        statusCodes: [401],
      },
    });

    this._instance = baseInstance.extend({
      hooks: {
        beforeRetry: [
          async ({ error }) => {
            const httpError = error as HTTPError;
            const response = httpError.response;
            if (response && response.status === 401) {
              await baseInstance.post('auth/token/refresh/');
            }
          },
        ],
      },
    });
  }

  public getInstance(): KyInstance {
    return this._instance;
  }
}
