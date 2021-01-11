import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export const Footer = () => {
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
        <p>Telegram</p>
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
            <Link to="/" className={styles.innerLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/works" className={styles.innerLink}>
              Works
            </Link>
          </li>
          <li>
            <Link to="/logos" className={styles.innerLink}>
              Logo Collection
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles.innerLink}>
              About & Contacts
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
