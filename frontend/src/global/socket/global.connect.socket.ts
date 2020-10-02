import { Stomp, CompatClient, Frame, Message, StompSubscription } from "@stomp/stompjs";
import { SUBSCRIBE_URL, MESSAGE_URL, SOKECT_CONNECT_URL } from "global/constants";
import SockJS from "sockjs-client";
import { SocketContextObjects } from "global/model"; 
import { useDispatch } from "react-redux";

export const connectSocket = (
  authToken: string, 
  connectToken:string ,
  userSubscribe: (...args: any[]) => void, 
  roomSubscribe: (...args: any[]) => void, 
  chatSubscribe: (...args: any[]) => void
  ):Promise<SocketContextObjects> => {

  return new Promise((resolve, reject) => {

    const socket = new SockJS(`${SOKECT_CONNECT_URL}?connect_token=${connectToken}`);
    const stompClient = Stomp.over(socket);
    const header = { Authorization: authToken };

    stompClient.connect(
      header,
      (res) => {
        
        resolve({socket, stompClient, subscriptions: {
          chat: stompClient.subscribe(SUBSCRIBE_URL.CHAT, (data) => {
            console.log("챗메시지 구독 중", data);
            chatSubscribe(data.body);
          }, header),
          room: stompClient.subscribe(SUBSCRIBE_URL.ROOM, (data) => {
            console.log("룸메시지 구독 중", data);
            roomSubscribe(data.body);
          }, header),
          user: stompClient.subscribe(SUBSCRIBE_URL.USER, (data) => {
            console.log("유저메시지 구독 중", JSON.parse(data.body));
            
            userSubscribe(JSON.parse(data.body));
          }, header),
        }});
      },
      () => {
        console.log("SOCKET_CONNECTED_ERROR");
        reject(null);
      }
    );

  })

}

const subsribeTopic = (stompClient: CompatClient) => {
  //const chat = stompClient.subscribe(""),
  //const room = sto
  //const user;
}