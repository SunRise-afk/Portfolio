import React from "react";
import styles from "./ProjectCard.module.css";
export const ProjectCardsContainer = (props) => {
  return <div className={styles.cardsContainer}>{props.children}</div>;
};
