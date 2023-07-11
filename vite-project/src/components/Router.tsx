import { useEffect, useState } from "react";
import { routerContext } from "../libs/context.module";
import { RouterProps } from "../types/props";

const Router = ({ children }: RouterProps) => {
  const [locationPath, setPath] = useState(window.location.pathname);

  const contextValue = {
    locationPath,
    setPath,
  };

  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      setPath(e.state.path);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <routerContext.Provider value={contextValue}>
      {children}
    </routerContext.Provider>
  );
};

export default Router;
