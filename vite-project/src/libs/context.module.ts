import { createContext } from "react";

interface ContextProps {
  path: string;
  changePath: React.Dispatch<React.SetStateAction<string>>;
}

export const routerContext = createContext<ContextProps>({
  path: "",
  changePath: () => undefined,
});
