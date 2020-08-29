const SUBSCRIBE_PREFIX = "/topic";

export const SUBSCRIBE_URL: {
  USER: string;
  ROOM: string;
  CHAT: string;
} = {
  USER: `${SUBSCRIBE_PREFIX}/user`,
  ROOM: `${SUBSCRIBE_PREFIX}/room`,
  CHAT: `${SUBSCRIBE_PREFIX}/chat`
};

const USER_MESSAGE_PREFIX = "/user";
const ROOM_MESSAGE_PREFIX = "/room";
const CHAT_MESSAGE_PREFIX = "/chat";

export const MESSAGE_URL = {
  USER: {
    GET_USER_LIST: `${USER_MESSAGE_PREFIX}/list/get`
  },
  ROOM: {
    GET_ROOM_LIST: `${ROOM_MESSAGE_PREFIX}/list/get`,
    ADD_ROOM: `${ROOM_MESSAGE_PREFIX}/add`,
    LEAVE_ROOM: `${ROOM_MESSAGE_PREFIX}/leave`
  },
  CHAT: {
    SEND_MESSAGE: `${CHAT_MESSAGE_PREFIX}/message/send`
  }
};
