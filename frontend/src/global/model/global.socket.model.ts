import { CompatClient, StompSubscription } from "@stomp/stompjs";

export type SocketContextObjects = {
  socket: WebSocket | null;
  stompClient: CompatClient | null;
  subscriptions: {
    chat: StompSubscription | null;
    room: StompSubscription | null;
    user: StompSubscription | null;
  };
};
