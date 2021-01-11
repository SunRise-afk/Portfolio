import React from "react";
import { Link } from "react-router-dom";
import styles from "./BorderedButton.module.css";

export const BorderedButton = ({ title }) => {
  return (
    <div className={styles.buttonContainer}>
      <span>
        <Link to="/works">{title}</Link>
      </span>
    </div>
  );
};
