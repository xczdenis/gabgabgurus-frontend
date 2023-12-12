// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TEventListener = (...args: any[]) => void;

export interface IEventBus {
  addEventListener(eventName: string, handler: TEventListener): void;

  removeEventListener(eventName: string, handler: TEventListener): void;

  emit(eventName: string, ...args: unknown[]): void;
}

export class EventBus implements IEventBus {
  private _listeners: { [event: string]: TEventListener[] } = {};

  addEventListener(event: string, listener: TEventListener) {
    if (!this._listeners[event]) {
      this._listeners[event] = [];
    }
    this._listeners[event].push(listener);
  }

  removeEventListener(event: string, listener: TEventListener) {
    if (!this._listeners[event]) {
      return;
    }
    const index = this._listeners[event].indexOf(listener);
    if (index !== -1) {
      this._listeners[event].splice(index, 1);
    }
  }

  emit(event: string, ...args: unknown[]) {
    if (!this._listeners[event]) {
      return;
    }
    this._listeners[event].forEach((listener) => listener(...args));
  }
}
