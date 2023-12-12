import { joinPaths } from '@/lib/utils/join-paths';

export type TWSClientOptions = {
  log?: boolean;
  onOpen?: (event: WebSocketEventMap['open']) => void;
  onClose?: (event: WebSocketEventMap['close']) => void;
  onMessage?: (event: WebSocketEventMap['message']) => void;
  onError?: (event: WebSocketEventMap['error']) => void;
};

export type TWSClientRemoveListenersParams = {
  onOpen?: boolean;
  onClose?: boolean;
  onMessage?: boolean;
  onError?: boolean;
};

export type TWSClientMessage = string | ArrayBufferLike | Blob | ArrayBufferView;

export class WSClient {
  protected _socket: WebSocket | null = null;

  protected _options: TWSClientOptions = {};

  protected readonly _baseUrl: string = process.env.BASE_WS_URL || process.env.NEXT_PUBLIC_BASE_WS_URL || '';

  connect(urlPath: string, options?: TWSClientOptions): void {
    if (!this._baseUrl && !urlPath) {
      throw new Error('Websocket URL may not be blank');
    }

    const url = joinPaths(this._baseUrl, urlPath);

    this._options = options ?? {};

    this.close();
    try {
      this._socket = new WebSocket(url);
      this.registerEvents(options);
      if (options?.log) {
        console.info(`Connecting to ${this._socket.url}`);
      }
    } catch (e) {
      console.error(e);
    }
  }

  public close(): void {
    if (this._socket) {
      this.removeListeners();
      this._socket.close();
      this._socket = null;
    }
  }

  public sendMessage(message: TWSClientMessage): void {
    if (!this._socket || this._socket.readyState !== WebSocket.OPEN) {
      throw new Error('WebSocket is not connected.');
    }

    this._socket.send(message);
  }

  public isOpen(): boolean {
    return !!(this._socket && this._socket.readyState === WebSocket.OPEN);
  }

  public isConnecting(): boolean {
    return !!(this._socket && this._socket.readyState === WebSocket.CONNECTING);
  }

  public getState(): string {
    if (this._socket) {
      switch (this._socket.readyState) {
        case 0:
          return 'CONNECTING';
        case 1:
          return 'OPEN';
        case 2:
          return 'CLOSING';
        case 3:
          return 'CLOSED';
      }
    }
    return '';
  }

  public getUrl(): string {
    if (this._socket) {
      return this._socket.url;
    }
    return '';
  }

  public registerEvents(options?: TWSClientOptions): void {
    if (this._socket && options) {
      if (options.onOpen) {
        this._socket.addEventListener('open', options.onOpen);
        this._options.onOpen = options.onOpen;
      }
      if (options.onClose) {
        this._socket.addEventListener('close', options.onClose);
        this._options.onClose = options.onClose;
      }
      if (options.onMessage) {
        this._socket.addEventListener('message', options.onMessage);
        this._options.onMessage = options.onMessage;
      }
      if (options.onError) {
        this._socket.addEventListener('error', options.onError);
        this._options.onError = options.onError;
      }
    }
  }

  public removeListeners(params?: TWSClientRemoveListenersParams): void {
    if (this._socket && this._options) {
      if (this._options.onOpen && (!params || params.onOpen)) {
        this._socket.removeEventListener('open', this._options.onOpen);
      }
      if (this._options.onClose && (!params || params.onClose)) {
        this._socket.removeEventListener('close', this._options.onClose);
      }
      if (this._options.onMessage && (!params || params.onMessage)) {
        this._socket.removeEventListener('message', this._options.onMessage);
      }
      if (this._options.onError && (!params || params.onError)) {
        this._socket.removeEventListener('error', this._options.onError);
      }
    }
  }
}
