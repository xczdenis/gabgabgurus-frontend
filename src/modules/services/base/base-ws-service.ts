import { convertKeysCamelToSnake } from '@/lib/utils/convert-keys-camel-to-snake';
import { joinPaths } from '@/lib/utils/join-paths';
import { TWSClientOptions, TWSClientRemoveListenersParams, WSClient } from '@/modules/clients/ws-client';

export abstract class AbstractBaseWSService {
  public readonly serviceName: string;

  protected readonly socketClient: WSClient;
  protected readonly urlNamespace: string;

  protected constructor(socketClient: WSClient, serviceName: string, urlNamespace: string = '') {
    this.socketClient = socketClient;
    this.serviceName = serviceName;
    this.urlNamespace = urlNamespace;
  }

  public isOpen = (): boolean => {
    return this.socketClient.isOpen();
  };

  public isConnecting = (): boolean => {
    return this.socketClient.isConnecting();
  };

  public disconnect = (): void => {
    this.socketClient.close();
  };

  public getState = (): string => {
    return this.socketClient.getState();
  };

  public registerEvents = (options?: TWSClientOptions): void => {
    this.socketClient.registerEvents(options);
  };

  public removeListeners = (params?: TWSClientRemoveListenersParams): void => {
    this.socketClient.removeListeners(params);
  };

  protected buildUrl = (path: string | number = ''): string => {
    const urlPath = joinPaths(this.urlNamespace, String(path));
    return `${urlPath}/`;
  };

  protected connectToWs = (url: string, options?: TWSClientOptions): void => {
    this.socketClient.connect(url, options);
  };

  protected sendWsMessage = <TMessageType, TPayload>(messageType: TMessageType, payload: TPayload): void => {
    const textMessage = this.makeTextMessage(messageType, payload);
    this.socketClient.sendMessage(textMessage);
  };

  protected makeTextMessage = <T, P>(type: T, payload: P): string => {
    const typedData = this.makeTypedData(type, payload);
    const convertedData = this.convertCase(typedData);
    return this.encodeData(convertedData);
  };

  protected makeTypedData = <T, P>(type: T, payload: P): Record<string, unknown> => {
    return convertKeysCamelToSnake({
      __ws_message_type: type,
      ...payload,
    });
  };

  protected convertCase = (data: Record<string, unknown>): Record<string, unknown> => {
    return convertKeysCamelToSnake(data);
  };

  protected encodeData = (data: unknown): string => {
    return JSON.stringify(data);
  };
}
