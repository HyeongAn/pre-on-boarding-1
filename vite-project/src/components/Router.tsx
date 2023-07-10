import { useEffect, useState } from "react";
import { RouterContext } from "../libs/context.module";
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
    <RouterContext.Provider value={contextValue}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;
