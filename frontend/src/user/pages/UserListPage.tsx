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
import { useHistory } from "react-router-dom";
import { loginActions } from "global/action";


export const UserListPage: React.FC = () => {


  const dummy:User[] = [{
    userId: "유저아이디",
    useYn: "Y",
    userToken: "AAAAAAAAAAA",
    tokenExpiredTime: "2020.1 0.10",
    userPk:"111111",
    createdTime: "2020.10.10",
  }, {
    userId: "유저아이디",
    useYn: "Y",
    userToken: "AAAAAAAAAAA",
    tokenExpiredTime: "2020.10.10",
    userPk:"45454",
    createdTime: "2020.10.10",
  }]

  const socketContext = useContext(SocketContext);
  const userList = useSelector(selectUserState).userList;
  //const userList = dummy;
  const authToken = useSelector(selectLoginState).authToken;
  const dispatch = useDispatch();
  const history = useHistory();


  const userSubscribe = (receiveMessage: UserReceiveMessage) => {
          
    if (receiveMessage.dataType === "CONNECTED_USER_LIST") dispatch(userReceiveAction(receiveMessage.data));
    
  }

  const userOnClickHandler = (user: User) => {

    if(socketContext.socketObjects.stompClient) {
      console.log("TEST");
      console.log("authToken", authToken);
      const header = {"Authorization": authToken};
      
      const body = {"receiver": user.userToken};
      console.log("body", body);
      socketContext.socketObjects.stompClient.send(MESSAGE_URL.ROOM.ADD_ROOM, header ,JSON.stringify(body));
    } else {
      console.log("소켓 연결이 올바르지 않습니다.");
    }
    
  }
  
  useEffect(() => {
    console.log("useEffect");
    if(socketContext.socketObjects.stompClient) {
      socketContext.socketObjects.stompClient.send(MESSAGE_URL.USER.GET_USER_LIST, {"Authorization": authToken});
    } else {
      
      const payload = {
        userId: "hasemi",
        pw: "1234",
        successCallback: () => {
          history.push("/user_list");
        },
        setSocketObjects: socketContext.setSocketObjects,
        userSubscribe: (receiveMessage: UserReceiveMessage) => {        
          if (receiveMessage.dataType === "CONNECTED_USER_LIST") dispatch(userReceiveAction(receiveMessage.data));
        },
        roomSubscribe: (receiveMessage: any) => {
          console.log("roomReceive", receiveMessage.data);
        },
        chatSubscribe: (receiveMessage: any) => {
          console.log("chatMessage", receiveMessage.data);
        }
      };
  
      dispatch(loginActions.request(payload));
    }

  }, [socketContext]);


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
