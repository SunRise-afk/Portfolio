import React from "react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

const Logos = ({
  popUpVisibility,
  changePopUpVisibility,
  isTelegramModalVisible,
  setIsTelegramModalVisible,
}) => {
  return (
    <>
      <Navbar
        changePopUpVisibility={changePopUpVisibility}
        popUpVisibility={popUpVisibility}
      ></Navbar>
      <h1>Logos Page</h1>
      <Footer
        isTelegramModalVisible={isTelegramModalVisible}
        setIsTelegramModalVisible={setIsTelegramModalVisible}
      ></Footer>
    </>
  );
};

export default Logos;
