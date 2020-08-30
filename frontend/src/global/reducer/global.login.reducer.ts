import { createReducer } from "typesafe-actions";
import { loginActions, LoginActions } from "global/action";
import { LoginState } from "global/model";

const initState: LoginState = {
  isLoggedIn: false,
  authToken: ""
};

export const loginState = createReducer<LoginState, LoginActions>(initState).handleAction(loginActions.success, (_, action) => {
  return { ...action.payload };
});

console.log("@");
console.log("@");
// console.log
