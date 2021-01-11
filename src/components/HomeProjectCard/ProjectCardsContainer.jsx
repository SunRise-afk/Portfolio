import React from "react";
import styles from "./ProjectCard.module.css";
export const ProjectCardsContainer = (props) => {
  console.log(props.children);
  return <div className={styles.cardsContainer}>{props.children}</div>;
};
