import { combineReducers } from "redux";

import { loginState } from "./global.login.reducer";

export const globalState = combineReducers({
  loginState
});
