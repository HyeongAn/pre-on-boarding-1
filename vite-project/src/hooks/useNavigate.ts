import { useCallback, useContext } from "react";
import { RouterContext } from "../libs/context.module";

export const useNavigate = () => {
  const { locationPath, changePath } = useContext(RouterContext);

  const navigate = useCallback(
    (nextPath: string) => {
      if (locationPath === nextPath) return;
      changePath(nextPath);
      window.history.pushState({ path: nextPath }, "", nextPath);
      /**  page refresh when use window.location.pathname = to;
       */
    },
    [locationPath, changePath]
  );

  return navigate;
};
