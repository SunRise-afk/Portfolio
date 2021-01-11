import React from "react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

const About = ({ popUpVisibility, changePopUpVisibility }) => {
  return (
    <>
      <Navbar
        changePopUpVisibility={changePopUpVisibility}
        popUpVisibility={popUpVisibility}
      ></Navbar>
      <h1>About Page</h1>
      <Footer></Footer>
    </>
  );
};

export default About;
