import React from "react";
import styled from "styled-components";
import { FooterButton } from "global/layout";

export const ChatPage: React.FC = () => {
  return (
    <ChatPageWrapper>
      <ChatWrapper>채팅</ChatWrapper>
      <FooterButton />
    </ChatPageWrapper>
  );
};

const ChatPageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ChatWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 50px);
  border: 1px solid blue;
`;
