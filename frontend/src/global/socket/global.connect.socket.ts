import { Stomp, CompatClient, Frame, Message, StompSubscription } from "@stomp/stompjs";
import { SUBSCRIBE_URL, MESSAGE_URL, SOKECT_CONNECT_URL } from "global/constants";
import SockJS from "sockjs-client";
import { SocketContextObjects } from "global/model"; 
import { useDispatch } from "react-redux";

export const connectSocket = (authToken: string, userSubscribe: any):Promise<SocketContextObjects> => {

  return new Promise((resolve, reject) => {

    const socket = new SockJS(SOKECT_CONNECT_URL);
    const stompClient = Stomp.over(socket);
    const header = { Authorization: authToken };
    console.log("authToken", authToken);

    stompClient.connect(
      header,
      () => {
        resolve({socket, stompClient, subscriptions: {
          chat: stompClient.subscribe(SUBSCRIBE_URL.CHAT, (data) => {
            userSubscribe(JSON.stringify(data.body));
          }, header),
          room: null,
          user: null
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