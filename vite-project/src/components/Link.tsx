import { useContext } from "react";
import { routerContext } from "../libs/context.module";

interface LinkProps {
  to: string;
  children: React.ReactNode;
}

const Link = ({ to, children }: LinkProps) => {
  const { changePath } = useContext(routerContext);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    changePath(to);
  };

  return (
    <a href={to} onClick={(e) => handleClick(e)}>
      {children}
    </a>
  );
};

export default Link;
