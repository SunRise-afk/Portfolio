import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setTGModalVisibilityAC } from "../../redux/appStateReducer";
import { TGModal } from "../TGModal/TGModal";
import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  const isTelegramModalVisible = useSelector(
    (state) => state.appState.isTelegramModalVisible
  );
  const dispatch = useDispatch();
  return (
    <footer className={styles.footer}>
      <div className={styles.contacts}>
        <h3>Get in Touch</h3>
        <p>ilin.i.1337@gmail.com</p>
      </div>
      <div className={styles.links}>
        <a
          href="https://github.com/SunRise-afk"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <p
          onClick={() => {
            dispatch(setTGModalVisibilityAC());
          }}
        >
          Telegram
        </p>
        <TGModal isTelegramModalVisible={isTelegramModalVisible}></TGModal>
        <a
          href="https://www.codecademy.com/profiles/SunRise1337"
          target="_blank"
          rel="noreferrer"
        >
          Codecademy
        </a>
        <a
          href="https://www.linkedin.com/in/илья-ильин-902a471b5/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </div>
      <div className={styles.innerLinks}>
        <ul>
          <li>
            <Link to="/Portfolio/" className={styles.innerLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Portfolio/works" className={styles.innerLink}>
              Works
            </Link>
          </li>
          <li>
            <Link to="/Portfolio/logos" className={styles.innerLink}>
              Logo Collection
            </Link>
          </li>
          <li>
            <Link to="/Portfolio/about" className={styles.innerLink}>
              About & Contacts
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
