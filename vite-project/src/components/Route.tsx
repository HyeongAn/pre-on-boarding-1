import { useContext } from "react";
import { RouterContext } from "../libs/context.module";
import { RouteProps } from "../types/props";

const Route = ({ path, element }: RouteProps) => {
  const { locationPath } = useContext(RouterContext);
  return <>{path === locationPath && element}</>;
};

export default Route;
