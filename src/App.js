import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { lazy, Suspense } from "react";
import { Home } from "./components/Home/Home";
import { useSelector } from "react-redux";
import "./App.css";

const About = lazy(() => import("./components/About/About"));
const WorksContainer = lazy(() => import("./components/Works/WorksContainer"));
const Logos = lazy(() => import("./components/Logos/Logos"));

function App() {
  const popUpVisibility = useSelector(
    (state) => state.appState.popUpVisibility
  );
  return (
    <Router>
      <Suspense
        fallback={
          <>
            <Navbar></Navbar>
            <h1 style={{ textAlign: "center", marginTop: "200px" }}>
              Loading... Please hold on.
            </h1>
          </>
        }
      >
        {popUpVisibility ? (
          <Navbar></Navbar>
        ) : (
          <Switch>
            <Route path="/about" component={() => <About />}></Route>
            <Route path="/works" component={() => <WorksContainer />}></Route>
            <Route path="/logos" component={() => <Logos />}></Route>
            <Route path="/" component={() => <Home />}></Route>
          </Switch>
        )}
      </Suspense>
    </Router>
  );
}

export default App;
