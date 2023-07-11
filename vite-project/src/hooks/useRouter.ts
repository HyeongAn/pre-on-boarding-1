import { useContext } from "react";
import { routerContext } from "../libs/context.module";

export const useRouter = () => {
  const { locationPath, setPath } = useContext(routerContext);

  const push = (path: string) => {
    if (locationPath === path) return;
    setPath(path);
    window.history.pushState({ path }, "", path);
  };

  return { push };
};
