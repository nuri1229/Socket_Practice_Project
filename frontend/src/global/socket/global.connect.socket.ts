import { Stomp, CompatClient, Frame, Message, StompSubscription } from "@stomp/stompjs";
import { SUBSCRIBE_URL, MESSAGE_URL, SOKECT_CONNECT_URL } from "global/constants";
import SockJS from "sockjs-client";
import { SocketContextObjects } from "global/model"; 
import { useDispatch } from "react-redux";

export const connectSocket = (authToken: string, connectToken:string ,userSubscribe: any):Promise<SocketContextObjects> => {

  return new Promise((resolve, reject) => {

    const socket = new SockJS(`${SOKECT_CONNECT_URL}?connect_token=${connectToken}`);
    const stompClient = Stomp.over(socket);
    const header = { Authorization: authToken };

    stompClient.connect(
      header,
      (res) => {
        
        resolve({socket, stompClient, subscriptions: {
          chat: stompClient.subscribe(SUBSCRIBE_URL.CHAT, (data) => {
            console.log("채팅 메시지 구독중", data);
            userSubscribe(JSON.parse(data.body));
          }, header),
          room: stompClient.subscribe(SUBSCRIBE_URL.ROOM, (data) => {
            console.log("룸메시지 구독 중", data);
          }, header),
          user: stompClient.subscribe(SUBSCRIBE_URL.USER, (data) => {
            console.log("유저메시지 구독 중", data);
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