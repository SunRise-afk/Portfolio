import React from "react";
import styles from "./Navbar.module.css";

export const MenuPopup = ({ visibilityChangeHandler }) => {
  return (
    <nav className={styles.menu}>
      <h2 className={styles.menuLogo}>SunRise Portfolio</h2>
      <ul className={styles.menuList}>
        <li>Home</li>
        <li>Works</li>
        <li>Logo Collection</li>
        <li>About & Contacts</li>
        <li
          className={styles.closeButton}
          onClick={() => visibilityChangeHandler(false)}
        ></li>
      </ul>
    </nav>
  );
};
