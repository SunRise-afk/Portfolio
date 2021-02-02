import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";
export const ProjectCard = ({ alignRight, projTitle, projImg, projId }) => {
  const isAlignedRight = alignRight ? 0 : "";
  return (
    <div className={styles.cardContainer}>
      <h3 className={styles.cardTitle} style={{ right: `${isAlignedRight}` }}>
        {projTitle}
      </h3>
      <div className={styles.cardImgContainer}>
        <Link to={`/Portfolio/works/${projId}`}>
          <img src={projImg} alt="" />
        </Link>
      </div>
    </div>
  );
};
