import { useRouter } from "../hooks/useRouter";
import Link from "./Link";

const About = () => {
  const { push } = useRouter();
  const handleClick = () => {
    push("/");
  };
  return (
    <>
      <h1>About</h1>
      <button onClick={() => handleClick()}>
        <Link to="/">Go Home</Link>
      </button>
    </>
  );
};

export default About;
