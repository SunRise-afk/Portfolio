import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { useState } from "react";
import { Jumbotron } from "./components/Jumbotron/Jumbotron";
import { ProjectCardsContainer } from "./components/HomeProjectCard/ProjectCardsContainer";
import { ProjectCard } from "./components/HomeProjectCard/ProjectCard";
import { BorderedButton } from "./components/BorderedButton/BorderedButton";
import { BigLink } from "./components/BigLink/BigLink";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [popUpVisibility, setPopUpVisibility] = useState(false);
  const changePopUpVisibility = (value) => {
    setPopUpVisibility(value);
  };
  return (
    <Router>
      {popUpVisibility ? (
        <Navbar
          changePopUpVisibility={changePopUpVisibility}
          popUpVisibility={popUpVisibility}
        ></Navbar>
      ) : (
        <>
          <Navbar
            changePopUpVisibility={changePopUpVisibility}
            popUpVisibility={popUpVisibility}
          ></Navbar>
          <Jumbotron></Jumbotron>
          <ProjectCardsContainer>
            <ProjectCard alignSelf={"flex-end"}></ProjectCard>
            <ProjectCard alignSelf={"flex-start"}></ProjectCard>
          </ProjectCardsContainer>
          <BorderedButton title="all works"></BorderedButton>
          <BigLink></BigLink>
          <Footer></Footer>
        </>
      )}
    </Router>
  );
}

export default App;
