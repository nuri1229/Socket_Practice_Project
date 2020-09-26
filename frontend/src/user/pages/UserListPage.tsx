import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { FooterButton } from "global/layout";
import { SocketContext } from "global/context";
import { useSelector } from "react-redux";
import { selectUserState, selectLoginState } from "global/selector";
import { SUBSCRIBE_URL, MESSAGE_URL } from "global/constants";
import { connectSocket } from "global/socket";
import { UserReceiveMessage } from "global/model"
import { useDispatch } from "react-redux";
import { userReceiveAction } from "user/action";
import { User } from "user/model";


export const UserListPage: React.FC = () => {


  const dummy:User[] = [{
    userId: "유저아이디",
    useYn: "Y",
    user_token: "AAAAAAAAAAA",
    token_expired_time: "2020.1 0.10",
    userPk:"111111",
    created_time: "2020.10.10",
  }, {
    userId: "유저아이디",
    useYn: "Y",
    user_token: "AAAAAAAAAAA",
    token_expired_time: "2020.10.10",
    userPk:"45454",
    created_time: "2020.10.10",
  }, {
    userId: "유저아이디",
    useYn: "Y",
    user_token: "AAAAAAAAAAA",
    token_expired_time: "2020.10.10",
    userPk:"1321",
    created_time: "2020.10.10",
  }]

  const socketContext = useContext(SocketContext);
  const userList = useSelector(selectUserState).userList;
  //const userList = dummy;
  const authToken = useSelector(selectLoginState).authToken;
  const dispatch = useDispatch();


  const userSubscribe = (receiveMessage: UserReceiveMessage) => {
          
    if (receiveMessage.dataType === "CONNECTED_USER_LIST") dispatch(userReceiveAction(receiveMessage.data));
    
  }

  const userOnClickHandler = (user: User) => {

    if(socketContext.socketObjects.stompClient) {

      const header = {"AUTHORIZATION": authToken};
      const body = {"receive": user.userPk};

      socketContext.socketObjects.stompClient.send(MESSAGE_URL.ROOM.ADD_ROOM, header ,JSON.stringify(body));
    } else {
      console.log("소켓 연결이 올바르지 않습니다.");
    }
    
  }
  
  useEffect(() => {

    if(socketContext.socketObjects.stompClient) {
      socketContext.socketObjects.stompClient.send(MESSAGE_URL.USER.GET_USER_LIST, {"Authorization": authToken});
    } else {
      
      connectSocket("SUPER_TOKEN", "SUPER_TOKEN", userSubscribe).then(() => {
        socketContext.socketObjects.stompClient!.send(MESSAGE_URL.USER.GET_USER_LIST, {"Authorization": authToken});
      })
    }

  }, []);

  return (
    <UserListPageWrapper>
      <main>
        <UserListWrapper>
          <ul>
            {userList.map((user) => {
              return (<li 
                key={user.userPk} 
                onClick={()=>{
                userOnClickHandler(user)
              }}>
                  
                    <p>{user.userId}</p>
                  
                </li>)
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

  ul {
    padding: 10px;
  }

  ul li {
    width: 100%;
    padding: 5px;
    font-size: 12px;
    margin: 10px auto;
  }

`;
