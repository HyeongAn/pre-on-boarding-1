import { useRouter } from "../hooks/useRouter";
import Link from "./Link";

const Home = () => {
  const { push } = useRouter();
  const handleClick = () => {
    push("/about");
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
