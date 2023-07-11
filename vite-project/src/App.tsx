import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Route from "./components/Route";
import Router from "./components/Router";
import Routes from "./components/Routes";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
