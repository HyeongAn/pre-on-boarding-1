import { useNavigate } from "../hooks/useNavigate";
import Link from "./Link";

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
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
