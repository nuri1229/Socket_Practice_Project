import React from "react";
import { RouteType } from "global/model";
import { UserListPage } from "user/pages";
import { RoomListPage } from "room/pages";
import { ChatPage } from "chat/pages";
import { Switch, Route } from "react-router-dom";

export const RouteContainer: React.FC = () => {
  const routes: RouteType[] = [
    { name: "room_list", exact: true, path: "/", component: RoomListPage },
    { name: "user_list", exact: true, path: "/user_list", component: UserListPage },
    { name: "chat", exact: true, path: "/chat", component: ChatPage }
  ];

  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.name} path={route.path} exact={route.exact} component={route.component} />
      ))}
    </Switch>
  );
};
