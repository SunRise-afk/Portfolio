import React from "react";
import { BigLink } from "../BigLink/BigLink";
import { BorderedButton } from "../BorderedButton/BorderedButton";
import { Footer } from "../Footer/Footer";
import { ProjectCard } from "../HomeProjectCard/ProjectCard";
import { ProjectCardsContainer } from "../HomeProjectCard/ProjectCardsContainer";
import { Jumbotron } from "../Jumbotron/Jumbotron";
import { Navbar } from "../Navbar/Navbar";

export const Home = ({ popUpVisibility, changePopUpVisibility }) => {
  return (
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
  );
};
