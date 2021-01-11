import React from "react";
import styles from "./Jumbotron.module.css";

export const Jumbotron = () => {
  return (
    <div className={styles.jumboContainer}>
      <h1
        className={styles.jumboHeader}
        data-text="Only FrontEnd Development, Only Softcore"
      >
        Only FrontEnd Development, Only Softcore
      </h1>
      <h3 className={styles.jumboSubHeader}>Keep it simple</h3>
    </div>
  );
};
