import { takeLatest, call, put } from "redux-saga/effects";
import { loginActions } from "global/action";
import { login } from "global/service";
import { LoginResponseBody, LoginSuccessPayload } from "global/model";
import { AxiosResponse } from "axios";
import { Stomp, CompatClient, Frame, Message, StompSubscription } from "@stomp/stompjs";
import { SUBSCRIBE_URL, MESSAGE_URL, SOKECT_CONNECT_URL } from "global/constants";
import SockJS from "sockjs-client";
import { connectSocket } from "global/socket";


function* asyncLoginActionSaga(action: ReturnType<typeof loginActions.request>) {
  try {
    const { userId, pw, setSocketObjects, successCallback } = action.payload;
    const body = { userId, pw };
    const loginResponse: AxiosResponse<LoginResponseBody> = yield call(login, body);
    console.log("loginRe", loginResponse);
    const loginSuccessPayload: LoginSuccessPayload = {
      isLoggedIn: true,
      authToken: "SUPER_TOKEN"
    };

    // const connectSocket = (authToken: string) => {
    //   const socket = new SockJS(SOKECT_CONNECT_URL);
    //   const stompClient = Stomp.over(socket);
    //   stompClient.connect(
    //     { Authorization: authToken },
    //     () => {
    //       console.log("SOCKET_CONNECTED_SUCCESS");
    //       setSocketObjects({
    //         socket,
    //         stompClient,
    //         subscriptions: {
    //           room: null,
    //           user: null,
    //           chat: null,
    //         }
    //       });
    //       successCallback();
    //     },
    //     () => {
    //       console.log("SOCKET_CONNECTED_ERROR");
    //     }
    //   );
    // };

    yield put(loginActions.success(loginSuccessPayload));
    const socketObjects = yield call(connectSocket, "SUPER_TOKEN");
    console.log("socketObejct", socketObjects);
    //yield call(successCallback);

    
  } catch (error) {
    alert("error");
    console.log("ERROR", error);
    //throw error.response || error;
  }
}

export function* loginActionSaga() {
  yield takeLatest(loginActions.request, asyncLoginActionSaga);
}

console.log(11);
console.log(12);
