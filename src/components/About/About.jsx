import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { Slider } from "../Slider/Slider";
import { AboutDescription } from "./AboutDescription";
import { BigLink } from "../BigLink/BigLink";
import React from "react";
import fullStackImg from "../../assets/full_stack.png";
import frontImg from "../../assets/front.png";

const About = () => {
  return (
    <>
      <Navbar></Navbar>
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
