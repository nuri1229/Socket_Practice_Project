import React, { useState, useContext, useEffect } from "react";
import { HocAdaptiveRender } from "global/hoc/HocAdaptiveRender";
import { DeviceContextProvider, DeviceContext } from "global/context";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { RouteContainer } from "global/route";
import styled from "styled-components";
import { GlobalStyle } from "global/layout";
import { selectLoginState } from "global/selector";
import { loginActions } from "global/action";

const Desktop: React.FC = () => <h1>Desktop</h1>;
const Mobile: React.FC = () => <h1>Mobile</h1>;

const Layout = HocAdaptiveRender({
  desktop: Desktop,
  mobile: Mobile
});

export const App: React.FC = () => {
  const deviceContext = useContext(DeviceContext);
  const [device, setDevice] = useState<string>(deviceContext.device);

  const loginState = useSelector(selectLoginState);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("loginState", loginState);
    dispatch(loginActions.request({ userId: "11", password: "22" }));
  }, []);

  return (
    <DeviceContextProvider device={device} setDevice={setDevice}>
      <GlobalStyle />
      <MainContainer>
        <BrowserRouter>
          <RouteContainer />
        </BrowserRouter>
      </MainContainer>
    </DeviceContextProvider>
  );
};

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;
