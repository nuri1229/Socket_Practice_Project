import { useEffect } from "react";
import SockJS from "sockjs-client";
import { Stomp, CompatClient, Frame, Message, StompSubscription } from "@stomp/stompjs";
import { SUBSCRIBE_URL, MESSAGE_URL, SOKECT_CONNECT_URL } from "global/constants";

type SocketObjects = {
  socket: WebSocket | null;
  stompClient: CompatClient | null;
  subscription: StompSubscription | null;
};

export const SocketConnect = (): SocketObjects => {
  let socket: WebSocket | null = null;
  let stompClient: CompatClient | null = null;
  let subscription: StompSubscription | null = null;

  const socketObject: SocketObjects = {
    socket,
    stompClient,
    subscription
  };

  const connect = () => {
    socket = new SockJS(SOKECT_CONNECT_URL);
    stompClient = Stomp.over(socket);
    stompClient.connect(
      { Authorization: "SUPER_TOKEN" },
      () => {
        console.log("SOCKET_CONNECTED_SUCCESS");
      },
      () => {
        console.log("SOCKET_CONNECTED_ERROR");
      }
    );
  };

  useEffect(() => {
    if (!stompClient || stompClient.connected) connect();
  }, []);

  return socketObject;
};
