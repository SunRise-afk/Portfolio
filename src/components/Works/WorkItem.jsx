import React from "react";
import styles from "./Works.module.css";

export const WorkItem = ({ title, role, titleImg }) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imgContainer}>
        <img src={titleImg} alt="" />
      </div>
      <h2 className={styles.titleHeading}>{title}</h2>
      <p className={styles.roleParagraph}>{role}</p>
    </div>
  );
};
