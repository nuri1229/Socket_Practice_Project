import React from "react";
import styled from "styled-components";
import { FooterButton } from "global/layout";
import { ChatMessage } from "chat/model"
import { useSelector } from "react-redux";
import { AppState } from "global/store";

export const ChatPage: React.FC = () => {

  const loginUser = useSelector((state: AppState) => state.globalState.loginState);

  const dummy: ChatMessage[] = [
    {
      room_id: "dummy_roomt1",
      user_id: "hasemi",
      chat_content: "안녕하세요",
      temp1: "111",
      created_time: "2020.01.01 11:11"
    },
    {
      room_id: "dummy_roomt1",
      user_id: "nuri",
      chat_content: "안녕하세요",
      temp1: "111",
      created_time: "2020.01.01 11:12"
    },
    {
      room_id: "dummy_roomt1",
      user_id: "hasemi",
      chat_content: "gdgd",
      temp1: "111",
      created_time: "2020.01.01 11:13"
    }
  ]

  return (
    <ChatPageWrapper>
      <ChatWrapper>
        {dummy.map((chat, index) => {
          return (
            <div 
              className={`chat_row ${chat.user_id === "hasemi" ? "mine": ""}`} 
              key={chat.room_id+index}>
                <span>{chat.chat_content}</span>
            </div>
          )
        })}
      </ChatWrapper>
      <InputArea>
        <input type="text"></input>
        <input type="button" value=">>"></input>
      </InputArea>
      <FooterButton />
    </ChatPageWrapper>
  );
};

const ChatPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #efefef;
`;

const InputArea = styled.div`

  display: flex;
  justify-content: center;

  align-items: center;
  width: 100%;
  height: 40px;
  padding: 0 5px;

  input {
    font-size: 12px;
    line-height: 14px;
  }

  input[type="text"] {
    border: 1px solid #000;
    flex: 1;
    height: 30px;
    margin-right: 5px;
    padding:0 0 0 10px;
    
  }

  input[type="button"] {
    width: 50px;
    height: 30px;
    border: 1px solid #000;
    
  }
`;

const ChatWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 88px);
  border: 1px solid blue;
  padding-top: 10px;

  .chat_row {
    width: 100%;
    padding: 0 20px;
    font-size: 12px;
    margin:10px 0;
    line-height: 30px;

    span {
      padding: 7px 10px;
      background: #fff;
      border-radius: 15px 15px 15px 0;
    }
  
  }

  .mine {
    text-align: right;

    span {
      background: yellow;
      border-radius: 15px 15px 0 15px;
    }
    
  }

`;
