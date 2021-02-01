import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setPopUpVisibilityAC } from "../../redux/appStateReducer";
import { MenuPopup } from "./MenuPopup";
import React from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const popUpVisibility = useSelector(
    (state) => state.appState.popUpVisibility
  );
  const dispatch = useDispatch();
  return (
    <>
      {popUpVisibility ? (
        <MenuPopup></MenuPopup>
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
            onClick={() => dispatch(setPopUpVisibilityAC())}
          >
            Menu
          </h2>
        </nav>
      )}
    </>
  );
};
