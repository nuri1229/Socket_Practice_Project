import { SocketContextObjects } from "./global.socket.model";
import { User } from "user/model";

export type LoginState = {
  isLoggedIn: boolean;
  authToken: string;
  connectToken:string;
};

export type LoginRequestPayload = {
  userId: string;
  pw: string;
  successCallback: () => void;
  setSocketObjects: (socketObjects: SocketContextObjects) => void;
  userSubscribe: (...args: any[]) => void;
  roomSubscribe: (...args: any[]) => void;
  chatSubscribe: (...args: any[]) => void;
};

export type LoginRequestBody = {
  userId: string;
  pw: string;
};

export type LoginSuccessPayload = LoginState;

export type LoginResponseBody = {
  authToken: string;
  connectToken: string;
};
