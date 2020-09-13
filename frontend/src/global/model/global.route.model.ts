import React from "react";

export type RouteType = {
  name: string;
  exact: boolean;
  path: string;
  component: React.ComponentClass | React.FC;
};
