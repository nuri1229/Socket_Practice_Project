import React, { useEffect } from "react";
import styled from "styled-components";
import { FooterButton } from "global/layout";
import SockJS from "sockjs-client";
import { Stomp, CompatClient, Frame, Message, StompSubscription } from "@stomp/stompjs";
import { SUBSCRIBE_URL, MESSAGE_URL, SOKECT_CONNECT_URL } from "global/constants";

export const UserListPage: React.FC = () => {
  let socket: WebSocket | null = null;
  let stompClient: CompatClient | null = null;
  let subscription: StompSubscription | null = null;

  const connect = () => {
    const connectSucessCallback = (frame: Frame) => {
      if (!stompClient) return;

      const receiveMesssageCallback = (message: Message) => {
        console.log("RECEIVED_MESSAGE", message);
      };

      const subscribeHeader = {};
      subscription = stompClient.subscribe(SUBSCRIBE_URL.USER, receiveMesssageCallback, subscribeHeader);

      const sendHeader = {};
      const sendData = { test: "test" };
      stompClient.send(MESSAGE_URL.USER.GET_USER_LIST, sendHeader, JSON.stringify(sendData));
    };

    const connectErrorCallback = (error: Error) => {
      console.log("CONNECTED_ERROR", error);
    };

    socket = new SockJS(SOKECT_CONNECT_URL);
    stompClient = Stomp.over(socket);
    stompClient.connect("USER_ID", "PASS_CODE", connectSucessCallback, connectErrorCallback);
  };

  const distroy = () => {
    console.log("DISTROY CALLED");
    if (!stompClient || !subscription) return;

    const disconnectCallback = () => {
      console.log("DISCONNECT_SUCCESS");
    };

    const disconnectHeader = {};

    subscription.unsubscribe();
    stompClient.disconnect(disconnectCallback, disconnectHeader);
  };

  useEffect(() => {
    connect();
    return () => distroy();
  }, []);

  return (
    <UserListPageWrapper>
      <main>
        <UserListWrapper>유저목록</UserListWrapper>
        <FooterButton />
      </main>
    </UserListPageWrapper>
  );
};

const UserListPageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const UserListWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 50px);
  border: 1px solid blue;
`;
