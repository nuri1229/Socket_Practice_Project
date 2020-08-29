import { AppState } from "global/store";

export const selectAppState = (state: AppState) => state;
export const selectLoginState = (state: AppState) => selectAppState(state).globalState.loginState;
