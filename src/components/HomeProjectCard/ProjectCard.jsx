import React from "react";
import styles from "./ProjectCard.module.css";
export const ProjectCard = ({ alignSelf }) => {
  const alignTitle = alignSelf === "flex-start" ? "left" : "right";
  return (
    <div className={styles.cardContainer} style={{ alignSelf }}>
      <h3 className={styles.cardTitle} style={{ textAlign: alignTitle }}>
        Project Title
      </h3>
    </div>
  );
};
