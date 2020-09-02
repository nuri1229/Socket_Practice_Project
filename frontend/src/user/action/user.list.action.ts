import { createAction, ActionType } from "typesafe-actions";
import { ReceiveUserList } from "user/model";

const USER_LIST_RECEIVED_ACTION = "USER_LIST_RECEIVED";
const userReceiveAction = createAction(USER_LIST_RECEIVED_ACTION)<ReceiveUserList>();
export type userReceiveActionType = ActionType<typeof userReceiveAction>