import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export const MenuPopup = ({ visibilityChangeHandler }) => {
  return (
    <nav className={styles.menu}>
      <h2 className={styles.menuLogo}>SunRise Portfolio</h2>
      <ul className={styles.menuList}>
        <li onClick={() => visibilityChangeHandler(false)}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => visibilityChangeHandler(false)}>
          <Link to="/works">Works</Link>
        </li>
        <li onClick={() => visibilityChangeHandler(false)}>
          <Link to="/logos">Logo Collection</Link>
        </li>
        <li onClick={() => visibilityChangeHandler(false)}>
          <Link to="/about">About & Contacts</Link>
        </li>
        <li
          className={styles.closeButton}
          onClick={() => visibilityChangeHandler(false)}
        ></li>
      </ul>
    </nav>
  );
};
