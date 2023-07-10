import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Route from "./components/Route";
import Router from "./components/Router";

function App() {
  return (
    <>
      <Router>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Router>
    </>
  );
}

export default App;
