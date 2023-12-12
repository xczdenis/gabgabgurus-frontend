import { EventBus } from '@/mocks/event-bus';
import { TWSClientMessage } from '@/modules/clients/ws-client';

export class MockWebsocket extends EventBus {
  public url: string;
  public readyState: number;

  constructor(url: string = '', readyState: number = 0) {
    super();
    this.url = url;
    this.readyState = readyState;
  }

  public open() {
    this.readyState = WebSocket.OPEN;
    this.emit('open');
  }

  public send(message: TWSClientMessage) {
    this.emit('message', { data: message });
  }

  public close() {
    this.readyState = WebSocket.CLOSED;
    this.emit('close');
  }
}
