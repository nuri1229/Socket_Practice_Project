import { all, fork, call } from "redux-saga/effects";
import { loginActionSaga } from "./global.login.saga";

export function* globalSaga() {
  const allSagas = [loginActionSaga];

  yield all(
    allSagas.map((saga) =>
      fork(function* () {
        while (true) {
          try {
            yield call(saga);
          } catch (error) {
            console.log("error");
          }
        }
      })
    )
  );
}
