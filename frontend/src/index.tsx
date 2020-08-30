import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "global/store";
import { App } from "./App";
import "core-js/stable";
import "regenerator-runtime/runtime";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
