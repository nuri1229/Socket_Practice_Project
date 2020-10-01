import { createReducer } from "typesafe-actions";
import { userReceiveAction, UserReceiveAction } from "user/action";
import { UserListState } from "user/model";

const initState: UserListState = [];

export const userListState = createReducer<UserListState, UserReceiveAction>(initState)
.handleAction(userReceiveAction, (_, action) => {
  
  return [...action.payload];

});