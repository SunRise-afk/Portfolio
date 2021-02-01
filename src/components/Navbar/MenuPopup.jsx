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
        <Link to="/" onClick={closePopUpHandler}>
          <li>Home</li>
        </Link>
        <Link to="/works" onClick={closePopUpHandler}>
          <li>Works</li>
        </Link>
        <Link to="/logos" onClick={closePopUpHandler}>
          <li>Logo Collection</li>
        </Link>
        <Link to="/about">
          <li onClick={closePopUpHandler}>About & Contacts</li>
        </Link>
        <li className={styles.closeButton} onClick={closePopUpHandler}></li>
      </ul>
    </nav>
  );
};
