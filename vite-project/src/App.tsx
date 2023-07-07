import "./App.css";
import Router from "./components/Router";
import Routes from "./components/Routes";

function App() {
  const path = window.location.pathname;
  console.log(path);
  return (
    <>
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
