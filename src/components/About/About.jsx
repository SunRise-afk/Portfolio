import React from "react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { Slider } from "../Slider/Slider";
import frontImg from "../../assets/front.png";
import fullStackImg from "../../assets/full_stack.png";
import { AboutDescription } from "./AboutDescription";
import { BigLink } from "../BigLink/BigLink";

const About = ({ popUpVisibility, changePopUpVisibility }) => {
  return (
    <>
      <Navbar
        changePopUpVisibility={changePopUpVisibility}
        popUpVisibility={popUpVisibility}
      ></Navbar>
      <Slider images={[frontImg, fullStackImg]}></Slider>
      <AboutDescription></AboutDescription>
      <BigLink
        linkPathes={["/works", "/logos"]}
        linkTitles={["works", "logos"]}
      ></BigLink>
      <Footer></Footer>
    </>
  );
};

export default About;
