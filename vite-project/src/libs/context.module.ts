import { createContext } from "react";
import { ContextProps } from "../types/context";

export const routerContext = createContext<ContextProps>({
  locationPath: "",
  setPath: () => undefined,
});
