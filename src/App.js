import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { lazy, Suspense, useState } from "react";
import { Home } from "./components/Home/Home";
import "./App.css";

const About = lazy(() => import("./components/About/About"));
const WorksContainer = lazy(() => import("./components/Works/WorksContainer"));
const Logos = lazy(() => import("./components/Logos/Logos"));

function App() {
  const [popUpVisibility, setPopUpVisibility] = useState(false);
  const [isTelegramModalVisible, setIsTelegramModalVisible] = useState(false);
  const changePopUpVisibility = (value) => {
    setPopUpVisibility(value);
  };
  return (
    <Router>
      <Suspense
        fallback={
          <>
            <Navbar
              changePopUpVisibility={changePopUpVisibility}
              popUpVisibility={popUpVisibility}
            ></Navbar>
            <h1 style={{ textAlign: "center", marginTop: "200px" }}>
              Loading... Please hold on.
            </h1>
          </>
        }
      >
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
                  isTelegramModalVisible={isTelegramModalVisible}
                  setIsTelegramModalVisible={setIsTelegramModalVisible}
                />
              )}
            ></Route>
            <Route
              path="/works"
              component={() => (
                <WorksContainer
                  changePopUpVisibility={changePopUpVisibility}
                  popUpVisibility={popUpVisibility}
                  isTelegramModalVisible={isTelegramModalVisible}
                  setIsTelegramModalVisible={setIsTelegramModalVisible}
                />
              )}
            ></Route>
            <Route
              path="/logos"
              component={() => (
                <Logos
                  changePopUpVisibility={changePopUpVisibility}
                  popUpVisibility={popUpVisibility}
                  isTelegramModalVisible={isTelegramModalVisible}
                  setIsTelegramModalVisible={setIsTelegramModalVisible}
                />
              )}
            ></Route>
            <Route
              path="/"
              component={() => (
                <Home
                  changePopUpVisibility={changePopUpVisibility}
                  popUpVisibility={popUpVisibility}
                  isTelegramModalVisible={isTelegramModalVisible}
                  setIsTelegramModalVisible={setIsTelegramModalVisible}
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
