import About from "../components/About";
import { routerContext } from "../libs/context.module";
import Home from "../components/Home";
import { useContext } from "react";

const Routes = () => {
  const { path } = useContext(routerContext);
  return (
    <>
      {path === "/about" && <About />}
      {path === "/" && <Home />}
    </>
  );
};

export default Routes;
