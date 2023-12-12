import { MessageStatuses } from '@/config';
import { createResourceId } from '@/lib/utils/create-resource-id';
import { joinPaths } from '@/lib/utils/join-paths';
import { mockAdmin } from '@/mocks/data/users';
import { MockWebsocket } from '@/mocks/mock-websocket';
import { TWSClientMessage, TWSClientOptions, WSClient } from '@/modules/clients/ws-client';

const isMockWebsocket = (instance: unknown): instance is MockWebsocket => {
  return true;
};

export class MockWsClient extends WSClient {
  connect(urlPath: string, options?: TWSClientOptions): void {
    if (!this._baseUrl && !urlPath) {
      throw new Error('Websocket URL may not be blank');
    }

    const url = joinPaths(this._baseUrl, urlPath);

    this._options = options ?? {};

    this.close();
    try {
      this._socket = new MockWebsocket(url) as unknown as WebSocket;
      this.registerEvents(options);
      if (options?.log) {
        console.info(`Connecting to ${this._socket.url}`);
      }
      // simulate network latency 500ms
      setTimeout(() => {
        if (isMockWebsocket(this._socket)) {
          this._socket.open();
        }
      }, 500);
    } catch (e) {
      console.error(e);
    }
  }

  public sendMessage(message: TWSClientMessage): void {
    const parsedMessage = JSON.parse(message as string);
    if (parsedMessage && parsedMessage.__ws_message_type === 'message') {
      const chatMsg = {
        id: createResourceId(),
        text: parsedMessage.text,
        createdAt: 1,
        sender: mockAdmin,
        status: MessageStatuses.Delivered,
      };

      const responseMessage = { type: 'message', content: chatMsg };

      // simulate network latency 300ms
      setTimeout(() => {
        this._sendMessage(JSON.stringify(responseMessage));
      }, 300);
    }
  }

  private _sendMessage(message: TWSClientMessage): void {
    if (!this._socket || this._socket.readyState !== WebSocket.OPEN) {
      throw new Error('WebSocket is not connected.');
    }

    this._socket.send(message);
  }
}
