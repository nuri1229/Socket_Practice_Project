/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext } from "react";
import { SocketContextObjects } from "global/model";

export const socketContextDefaultValue: { socketObjects: SocketContextObjects; setSocketObjects: (socketObjects: SocketContextObjects) => void } = {
  socketObjects: {
    socket: null,
    stompClient: null,
    subscriptions: {
      chat: null,
      room: null,
      user: null
    }
  },
  setSocketObjects: (socketObjects) => {}
};

export const SocketContext = createContext(socketContextDefaultValue);
