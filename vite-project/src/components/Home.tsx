import Link from "./Link";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <button>
        <Link to="/about">Go About</Link>
      </button>
    </>
  );
};

export default Home;
