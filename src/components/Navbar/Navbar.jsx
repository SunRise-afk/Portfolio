import React from "react";
import { MenuPopup } from "./MenuPopup";
import styles from "./Navbar.module.css";

export const Navbar = ({ popUpVisibility, changePopUpVisibility }) => {
  return (
    <>
      {popUpVisibility ? (
        <MenuPopup visibilityChangeHandler={changePopUpVisibility}></MenuPopup>
      ) : (
        <nav className={styles.nav}>
          <h2
            data-text="SunRise Portfolio"
            className={`${styles.navHeader}`}
            onMouseEnter={(e) => {
              e.target.classList.add(styles.active);
            }}
            onMouseLeave={(e) => {
              e.target.classList.remove(styles.active);
            }}
          >
            SunRise Portfolio
          </h2>
          <h2
            className={styles.navMenuHeader}
            onClick={() => changePopUpVisibility(true)}
          >
            Menu
          </h2>
        </nav>
      )}
    </>
  );
};
