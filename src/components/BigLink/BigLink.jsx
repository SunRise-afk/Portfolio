import React from "react";
import styles from "./BigLink.module.css";
export const BigLink = () => {
  return (
    <div className={styles.container}>
      <div className={styles.linkContainer}>
        <h2 className={styles.linkHeader}>about</h2>
      </div>
      <div className={styles.linkContainer}>
        <h2 className={styles.linkHeader}>logos</h2>
      </div>
    </div>
  );
};
