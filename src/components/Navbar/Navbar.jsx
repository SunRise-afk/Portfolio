import React from "react";
import { Link } from "react-router-dom";
import { MenuPopup } from "./MenuPopup";
import styles from "./Navbar.module.css";

export const Navbar = ({ popUpVisibility, changePopUpVisibility }) => {
  return (
    <>
      {popUpVisibility ? (
        <MenuPopup visibilityChangeHandler={changePopUpVisibility}></MenuPopup>
      ) : (
        <nav className={styles.nav}>
          <Link to="/">
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
          </Link>
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
