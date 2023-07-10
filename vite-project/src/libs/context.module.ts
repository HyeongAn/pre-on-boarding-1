import { createContext } from "react";
import { ContextProps } from "../types/context";

export const RouterContext = createContext<ContextProps>({
  locationPath: "",
  setPath: () => undefined,
});
