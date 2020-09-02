import React, { useState, useContext } from "react";
import styled from "styled-components";
import { loginActions } from "global/action";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { SocketContext } from "global/context";

export const LoginPage: React.FC = () => {
  const [userId, setUserId] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const dispatch = useDispatch();
  const history = useHistory();
  const socketContext = useContext(SocketContext);

  const login = () => {
    const payload = {
      userId,
      pw,
      successCallback: () => {
        history.push("/user_list");
      },
      setSocketObjects: socketContext.setSocketObjects
    };

    dispatch(loginActions.request(payload));
  };

  return (
    <LoginPageWrapper>
      <LoginFormWrapper>
        <form>
          <input type="text" placeholder="ID" value={userId} onChange={(e) => setUserId(e.currentTarget.value)} />
          <input type="password" placeholder="ID" value={pw} onChange={(e) => setPw(e.currentTarget.value)} autoComplete="off" />
          <input type="button" value="LOGIN" onClick={login}></input>
        </form>
      </LoginFormWrapper>
    </LoginPageWrapper>
  );
};

const LoginPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginFormWrapper = styled.div`
  width: 300px;

  input {
    width: 80%;
    height: 15px;
    margin: 5px auto;
    display: block;
    border: 1px solid black;
  }

  button {
    width: 80%;
    margin: 5px auto;
    display: block;
  }
`;
