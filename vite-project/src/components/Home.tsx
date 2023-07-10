import { useNavigate } from "../hooks/useNavigate";
import Link from "./Link";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => handleClick()}>
        <Link to="/about">Go About</Link>
      </button>
    </>
  );
};

export default Home;
