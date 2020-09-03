import { createAction, ActionType } from "typesafe-actions";
import { ReceiveUserList } from "user/model";

export const USER_LIST_RECEIVED_ACTION = "USER_LIST_RECEIVED";
export const userReceiveAction = createAction(USER_LIST_RECEIVED_ACTION)<ReceiveUserList>();

export type UserReceiveAction = ActionType<typeof userReceiveAction>;