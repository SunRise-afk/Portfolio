import React from "react";
import { Link } from "react-router-dom";
import styles from "./BigLink.module.css";
export const BigLink = () => {
  return (
    <div className={styles.container}>
      <div className={styles.linkContainer}>
        <Link to="/about" className={styles.linkHeader}>
          about
        </Link>
      </div>
      <div className={styles.linkContainer}>
        <Link to="/logos" className={styles.linkHeader}>
          logos
        </Link>
      </div>
    </div>
  );
};
