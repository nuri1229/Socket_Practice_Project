import { asyncActionCreator } from "global/util";
import { ActionType } from "typesafe-actions";
import { LoginRequestPayload, LoginSuccessPayload } from "global/model";

export const loginActions = asyncActionCreator<LoginRequestPayload, LoginSuccessPayload, Error>("GLOBAL_LOGIN");
export type LoginActions = ActionType<typeof loginActions>;

console.log("1");
