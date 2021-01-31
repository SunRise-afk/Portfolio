import React from "react";
import { useSelector } from "react-redux";
import { BigLink } from "../BigLink/BigLink";
import { BorderedButton } from "../BorderedButton/BorderedButton";
import { Footer } from "../Footer/Footer";
import { ProjectCard } from "../HomeProjectCard/ProjectCard";
import { ProjectCardsContainer } from "../HomeProjectCard/ProjectCardsContainer";
import { Jumbotron } from "../Jumbotron/Jumbotron";
import { Navbar } from "../Navbar/Navbar";

export const Home = ({
  popUpVisibility,
  changePopUpVisibility,
  isTelegramModalVisible,
  setIsTelegramModalVisible,
}) => {
  const projects = useSelector((state) => state.works);
  return (
    <>
      <Navbar
        changePopUpVisibility={changePopUpVisibility}
        popUpVisibility={popUpVisibility}
      ></Navbar>
      <Jumbotron></Jumbotron>
      <ProjectCardsContainer>
        <ProjectCard
          alignRight={true}
          projTitle={projects[0].title}
          projImg={projects[0].jumboImg}
          projId={projects[0].id}
        ></ProjectCard>
        <ProjectCard
          alignRight={false}
          projTitle={projects[2].title}
          projImg={projects[2].jumboImg}
          projId={projects[2].id}
        ></ProjectCard>
      </ProjectCardsContainer>
      <BorderedButton title="all works" link="works"></BorderedButton>
      <BigLink
        linkPathes={["/about", "/logos"]}
        linkTitles={["about", "logos"]}
      ></BigLink>
      <Footer
        isTelegramModalVisible={isTelegramModalVisible}
        setIsTelegramModalVisible={setIsTelegramModalVisible}
      ></Footer>
    </>
  );
};
