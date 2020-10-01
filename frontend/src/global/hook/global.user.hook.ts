import React from "react";
import { useDispatch } from "react-redux";
import { UserReceiveMessage } from "global/model"
import { userReceiveAction } from "user/action";

export function useUserSocket () {
  const dispatch = useDispatch();

  const userSubscribe = (receiveMessage:UserReceiveMessage) =>{
    if (receiveMessage.dataType === "CONNECTED_USER_LIST") dispatch(userReceiveAction(receiveMessage.data));
  }

  return {
    userSubscribe
  }
}
