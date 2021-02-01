import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setPopUpVisibilityAC } from "../../redux/appStateReducer";
import React from "react";
import styles from "./Navbar.module.css";

export const MenuPopup = () => {
  const dispatch = useDispatch();
  const closePopUpHandler = () => {
    dispatch(setPopUpVisibilityAC());
  };
  return (
    <nav className={styles.menu}>
      <h2 className={styles.menuLogo}>SunRise Portfolio</h2>
      <ul className={styles.menuList}>
        <li onClick={closePopUpHandler}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={closePopUpHandler}>
          <Link to="/works">Works</Link>
        </li>
        <li onClick={closePopUpHandler}>
          <Link to="/logos">Logo Collection</Link>
        </li>
        <li onClick={closePopUpHandler}>
          <Link to="/about">About & Contacts</Link>
        </li>
        <li className={styles.closeButton} onClick={closePopUpHandler}></li>
      </ul>
    </nav>
  );
};
