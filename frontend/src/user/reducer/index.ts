import { combineReducers } from "redux";
import { userListState } from "./user.list.reducer";

export const userState = combineReducers({
  userList: userListState
});