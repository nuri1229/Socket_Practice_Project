import React, { useState, useContext, useEffect } from "react";
import { HocAdaptiveRender } from "global/hoc/HocAdaptiveRender";
import { DeviceContextProvider, DeviceContext } from "global/context";
import io from "socket.io-client";
import SockJS from "sockjs-client";

const Desktop: React.FC = () => <h1>Desktop</h1>;
const Mobile: React.FC = () => <h1>Mobile</h1>;

const Layout = HocAdaptiveRender({
  desktop: Desktop,
  mobile: Mobile
});

export const App: React.FC = () => {
  const deviceContext = useContext(DeviceContext);
  const [device, setDevice] = useState<string>(deviceContext.device);

  const socket = new SockJS("http://localhost:8888/test");
  socket.onopen = function () {
    console.log("connected");
  };

  // const socket = io.connect("ws://localhost:8888", { path: "/test" });
  // socket.on("connect", function () {
  //   console.log("connected");
  // });
  // socket.on("event", function (data) {});
  // socket.on("disconnect", function () {
  //   console.log("disconnect");
  // });

  useEffect(() => {
    // console.log("App_Init", socket.connected);
    //console.log(socket.connected);
    // fetch('')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((res) => {
    //     console.log('res', res);
    //   })
    //   .catch((err) => {
    //     console.log('err', err);
    //   });
  }, []);

  return (
    <DeviceContextProvider device={device} setDevice={setDevice}>
      <Layout />
    </DeviceContextProvider>
  );
};
