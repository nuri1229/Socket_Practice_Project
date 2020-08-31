import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FooterButton } from "global/layout";
import { SocketConnect } from "global/hook";
import { Stomp, CompatClient, Frame, Message, StompSubscription } from "@stomp/stompjs";

export const RoomListPage: React.FC = () => {
  const socketObjects = SocketConnect();

  const [roomList, setRoomList] = useState(["채팅방1", "채팅방2", "채팅방3", "채팅방4"]);

  useEffect(() => {
    console.log("SocketObjects", socketObjects.stompClient);
    if (socketObjects) {
      console.log("stompClient", socketObjects.stompClient?.connected);
    }
  }, []);
  return (
    <RoomListPageWrapper>
      <main>
        <RoomListWrapper>방목록</RoomListWrapper>
      </main>
      <FooterButton />
    </RoomListPageWrapper>
  );
};

const RoomListPageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const RoomListWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 50px);
  border: 1px solid blue;
`;
