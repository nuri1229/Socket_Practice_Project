import React, { useState, useContext, useEffect } from "react";
import { HocAdaptiveRender } from "global/hoc/HocAdaptiveRender";
import { DeviceContextProvider, DeviceContext, SocketContext, socketContextDefaultValue } from "global/context";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { RouteContainer } from "global/route";
import styled from "styled-components";
import { GlobalStyle } from "global/layout";
import { selectLoginState } from "global/selector";
import { SocketContextObjects } from "global/model";

const Desktop: React.FC = () => <h1>Desktop</h1>;
const Mobile: React.FC = () => <h1>Mobile</h1>;

const Layout = HocAdaptiveRender({
  desktop: Desktop,
  mobile: Mobile
});

export const App: React.FC = () => {
  const deviceContext = useContext(DeviceContext);
  const [device, setDevice] = useState<string>(deviceContext.device);
  const [socketObjects, setSocketObjects] = useState<SocketContextObjects>(socketContextDefaultValue.socketObjects);

  return (
    <DeviceContextProvider device={device} setDevice={setDevice}>
      <SocketContext.Provider value={{ socketObjects, setSocketObjects }}>
        <GlobalStyle />
        <MainContainer>
          <BrowserRouter>
            <RouteContainer />
          </BrowserRouter>
        </MainContainer>
      </SocketContext.Provider>
    </DeviceContextProvider>
  );
};

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;
