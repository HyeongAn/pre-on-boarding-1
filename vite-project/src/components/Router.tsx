import { useState } from "react";
import { routerContext } from "../libs/context.module";

interface RouterProps {
  children: React.ReactNode;
}

const Router = ({ children }: RouterProps) => {
  const [path, setPath] = useState(window.location.pathname);

  const contextValue = {
    path,
    changePath: setPath,
  };

  return (
    <routerContext.Provider value={contextValue}>
      {children}
    </routerContext.Provider>
  );
};

export default Router;
