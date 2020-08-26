import React, { useState, useContext, useEffect } from "react";
import { HocAdaptiveRender } from "global/hoc/HocAdaptiveRender";
import { DeviceContextProvider, DeviceContext } from "global/context";
import io from "socket.io-client";
import SockJS from "sockjs-client";
import { Client, Stomp, CompatClient } from "@stomp/stompjs";
import { BrowserRouter } from "react-router-dom";
import { RouteContainer } from "global/route";
import styled from "styled-components";
import { GlobalStyle } from "global/layout";

const Desktop: React.FC = () => <h1>Desktop</h1>;
const Mobile: React.FC = () => <h1>Mobile</h1>;

const Layout = HocAdaptiveRender({
  desktop: Desktop,
  mobile: Mobile
});

export const App: React.FC = () => {
  const deviceContext = useContext(DeviceContext);
  const [device, setDevice] = useState<string>(deviceContext.device);

  const socket = new SockJS("http://localhost:5000/test");
  const stompClient: CompatClient = Stomp.over(socket);

  const subscribedTopic = "/topic/roomLists";

  stompClient.debug = (log) => {
    console.log("로그", log);
  };

  stompClient.connect(
    "guest",
    "guest",
    (frame) => {
      console.log("stomp connected");
      stompClient.subscribe(
        subscribedTopic,
        (message) => {
          console.log("subscribe_message", message);
        },
        {}
      );

      const data = {
        name: "chatRoomAll",
        message: "semi"
      };

      stompClient.send("/app/roomLists", { payload: { name: "111" } }, JSON.stringify(data));
    },
    (error) => {
      console.log("error", error);
    }
  );

  useEffect(() => {}, []);

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
