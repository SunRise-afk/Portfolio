import { Link } from "react-router-dom";
import React from "react";
import styles from "./BigLink.module.css";
export const BigLink = ({ linkPathes, linkTitles }) => {
  return (
    <div className={styles.container}>
      <div className={styles.linkContainer}>
        <Link to={`/Portfolio${linkPathes[0]}`} className={styles.linkHeader}>
          {linkTitles[0]}
        </Link>
      </div>
      <div className={styles.linkContainer}>
        <Link to={`/Portfolio${linkPathes[1]}`} className={styles.linkHeader}>
          {linkTitles[1]}
        </Link>
      </div>
    </div>
  );
};
