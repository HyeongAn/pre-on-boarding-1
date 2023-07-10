import { useContext } from "react";
import { RouterContext } from "../libs/context.module";

export const useRouter = () => {
  const { locationPath, changePath } = useContext(RouterContext);
  const push = (nextPath: string) => {
    if (locationPath === nextPath) return;
    changePath(nextPath);
    window.history.pushState({ path: nextPath }, "", nextPath);
  };

  return { push };
};
