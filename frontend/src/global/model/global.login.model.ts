import { SocketContextObjects } from "./global.socket.model";

export type LoginState = {
  isLoggedIn: boolean;
  authToken: string;
};

export type LoginRequestPayload = {
  userId: string;
  pw: string;
  successCallback: () => void;
  setSocketObjects: (socketObjects: SocketContextObjects) => void;
};

export type LoginRequestBody = {
  userId: string;
  pw: string;
};

export type LoginSuccessPayload = LoginState;

export type LoginResponseBody = {
  authToken: string;
};
