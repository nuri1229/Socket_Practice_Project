import { combineReducers, createStore, applyMiddleware } from "redux";
import { globalState } from "global/reducer";
import createSagaMiddleware from "redux-saga";
import { globalSaga } from "global/saga";

export const appState = combineReducers({
  globalState
});

export type AppState = ReturnType<typeof appState>;

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(appState, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(globalSaga);
