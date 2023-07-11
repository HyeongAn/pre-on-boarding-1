import React, { isValidElement, useContext } from "react";
import { RouteProps, RoutesProps } from "../types/props";
import { routerContext } from "../libs/context.module";

const Routes = ({ children }: RoutesProps) => {
  const { locationPath } = useContext(routerContext);
  const childrenComponents = Array.isArray(children) ? children : [children];
  let returnComponent: React.ReactNode = null;

  childrenComponents.forEach((child) => {
    if (!isValidElement<RouteProps>(child)) return;
    if (!child.props.element) return;
    if (child.type === React.Fragment) return;
    if (locationPath === child.props.path)
      returnComponent = child.props.element;
  });
  return returnComponent;
};

export default Routes;
