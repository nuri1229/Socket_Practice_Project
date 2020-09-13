import { SocketContextObjects } from "./global.socket.model";
import { User } from "user/model";

export type LoginState = {
  isLoggedIn: boolean;
  authToken: string;
};

export type LoginRequestPayload = {
  userId: string;
  pw: string;
  successCallback: () => void;
  setSocketObjects: (socketObjects: SocketContextObjects) => void;
  userSubscribe: (userList: any) => void;
};

export type LoginRequestBody = {
  userId: string;
  pw: string;
};

export type LoginSuccessPayload = LoginState;

export type LoginResponseBody = {
  authToken: string;
};
