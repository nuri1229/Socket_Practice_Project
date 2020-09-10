import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { FooterButton } from "global/layout";
import { SocketContext } from "global/context";
import { useSelector } from "react-redux";
import { selectUserState, selectLoginState } from "global/selector";
import { SUBSCRIBE_URL, MESSAGE_URL } from "global/constants";

export const UserListPage: React.FC = () => {

  const socketContext = useContext(SocketContext);
  const userList = useSelector(selectUserState).userList;
  const authToken = useSelector(selectLoginState).authToken;

  useEffect(() => {

    if(socketContext.socketObjects.stompClient) {
      socketContext.socketObjects.stompClient.send(MESSAGE_URL.USER.GET_USER_LIST, {"Authorization": authToken});
    };

  }, []);

  return (
    <UserListPageWrapper>
      <main>
        <UserListWrapper>
          <ul>
            {userList.map((user) => {
              return <li key={user.user_token}>{user.userId}</li>
            })}
          </ul>
        </UserListWrapper>
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
