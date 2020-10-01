import { CompatClient, StompSubscription } from "@stomp/stompjs";
import { User } from "user/model";

export type SocketContextObjects = {
  socket: WebSocket | null;
  stompClient: CompatClient | null;
  subscriptions: {
    chat: StompSubscription | null;
    room: StompSubscription | null;
    user: StompSubscription | null;
  };
};

export type UserReceiveMessage = {
  dataType: string;
  data: User[];
}