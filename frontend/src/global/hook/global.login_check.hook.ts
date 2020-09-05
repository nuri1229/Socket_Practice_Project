import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectLoginState } from "global/selector";
import { LoginState } from "global/model";

export const IsLoggedIn = (): LoginState => {
  const loginState = useSelector(selectLoginState);
  const history = useHistory();

  useEffect(() => {
    if (!loginState.isLoggedIn) {
      alert("비로그인 상태입니다.");
      history.push("/");
    } else {
      console.log("authToken", loginState.authToken);
    }
  });

  return loginState;
};
