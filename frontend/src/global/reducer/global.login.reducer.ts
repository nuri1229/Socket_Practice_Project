import { createReducer } from "typesafe-actions";
import { loginActions, LoginActions } from "global/action";
import { LoginState } from "global/model";

const initState: LoginState = {
  isLoggedIn: true,
  authToken: process.env.NODE_ENV === "development" ? "SUPER_TOKEN" : ""
};

export const loginState = createReducer<LoginState, LoginActions>(initState).handleAction(loginActions.success, (_, action) => {
  return { ...action.payload };
});
