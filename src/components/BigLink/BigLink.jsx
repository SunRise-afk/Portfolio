import React from "react";
import { Link } from "react-router-dom";
import styles from "./BigLink.module.css";
export const BigLink = ({ linkPathes, linkTitles }) => {
  return (
    <div className={styles.container}>
      <div className={styles.linkContainer}>
        <Link to={linkPathes[0]} className={styles.linkHeader}>
          {linkTitles[0]}
        </Link>
      </div>
      <div className={styles.linkContainer}>
        <Link to={linkPathes[1]} className={styles.linkHeader}>
          {linkTitles[1]}
        </Link>
      </div>
    </div>
  );
};
