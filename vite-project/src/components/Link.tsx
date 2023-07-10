import { useRouter } from "../hooks/useRouter";
import { LinkProps } from "../types/props";

const Link = ({ to, children }: LinkProps) => {
  const { push } = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    push(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
