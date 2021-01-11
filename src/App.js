import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { lazy, Suspense, useState } from "react";
import { Home } from "./components/Home/Home";

const About = lazy(() => import("./components/About/About"));
const Works = lazy(() => import("./components/Works/Works"));
const Logos = lazy(() => import("./components/Logos/Logos"));

function App() {
  const [popUpVisibility, setPopUpVisibility] = useState(false);
  const changePopUpVisibility = (value) => {
    setPopUpVisibility(value);
  };
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        {popUpVisibility ? (
          <Navbar
            changePopUpVisibility={changePopUpVisibility}
            popUpVisibility={popUpVisibility}
          ></Navbar>
        ) : (
          <Switch>
            <Route
              path="/about"
              component={() => (
                <About
                  changePopUpVisibility={changePopUpVisibility}
                  popUpVisibility={popUpVisibility}
                />
              )}
            ></Route>
            <Route
              path="/works"
              component={() => (
                <Works
                  changePopUpVisibility={changePopUpVisibility}
                  popUpVisibility={popUpVisibility}
                />
              )}
            ></Route>
            <Route
              path="/logos"
              component={() => (
                <Logos
                  changePopUpVisibility={changePopUpVisibility}
                  popUpVisibility={popUpVisibility}
                />
              )}
            ></Route>
            <Route
              path="/"
              component={() => (
                <Home
                  changePopUpVisibility={changePopUpVisibility}
                  popUpVisibility={popUpVisibility}
                />
              )}
            ></Route>
          </Switch>
        )}
      </Suspense>
    </Router>
  );
}

export default App;
