import React from "react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

const Works = ({ popUpVisibility, changePopUpVisibility }) => {
  return (
    <>
      <Navbar
        changePopUpVisibility={changePopUpVisibility}
        popUpVisibility={popUpVisibility}
      ></Navbar>
      <h1>Works Page</h1>
      <Footer></Footer>
    </>
  );
};

export default Works;
