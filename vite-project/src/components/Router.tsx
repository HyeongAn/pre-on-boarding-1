import { useEffect, useState } from "react";
import { RouterContext } from "../libs/context.module";
import { RouterProps } from "../types/props";

const Router = ({ children }: RouterProps) => {
  const [locationPath, setPath] = useState(window.location.pathname);

  const contextValue = {
    locationPath,
    changePath: setPath,
  };

  useEffect(() => {
    const changePath = (e: PopStateEvent) => {
      console.log(e);
      setPath(e.state.path);
    };
    window.addEventListener("popstate", changePath);
    return () => window.removeEventListener("popstate", changePath);
  }, []);

  return (
    <RouterContext.Provider value={contextValue}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;
