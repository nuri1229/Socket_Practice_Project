import { takeLatest, call } from "redux-saga/effects";
import { loginActions } from "global/action";
import { login } from "global/service";
import { LoginResponseBody } from "global/model";
import { AxiosResponse } from "axios";

function* asyncLoginActionSaga(action: ReturnType<typeof loginActions.request>) {
  try {
    console.log("call_saga", action);
    const loginResponse: AxiosResponse<LoginResponseBody> = yield call(login, action.payload);

    console.log(loginResponse);

    yield call(action.payload.successCallback);
  } catch (error) {
    console.log("ERROR", error);
    throw error.response || error;
  }
}

export function* loginActionSaga() {
  yield takeLatest(loginActions.request, asyncLoginActionSaga);
}

console.log(11);
