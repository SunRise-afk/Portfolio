import React from "react";
import styles from "./BorderedButton.module.css";

export const BorderedButton = ({ title }) => {
  return (
    <div className={styles.buttonContainer}>
      <span>{title}</span>
    </div>
  );
};
