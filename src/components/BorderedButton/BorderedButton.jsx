import { Link } from "react-router-dom";
import React from "react";
import styles from "./BorderedButton.module.css";

export const BorderedButton = ({ title, link }) => {
  return (
    <Link to={`/${link}`}>
      <div className={styles.buttonContainer}>
        <span>{title}</span>
      </div>
    </Link>
  );
};
