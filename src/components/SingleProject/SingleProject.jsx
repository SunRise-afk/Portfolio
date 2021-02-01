import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { BorderedButton } from "../BorderedButton/BorderedButton";
import React from "react";
import borderedButtonStyles from "../BorderedButton/BorderedButton.module.css";
import styles from "./SingleProject.module.css";

const SingleProject = () => {
  const { projId } = useParams();
  const project = useSelector((state) => state.works[projId]);
  return (
    <>
      <Navbar></Navbar>
      <section className={styles.singleProject}>
        <div className={styles.container}>
          <div className={styles.jumboImgContainer}>
            <img src={project.jumboImg} alt="" />
          </div>
          <div className={styles.projectDescriptionContainer}>
            <div className={styles.projectDescriptionItem}>
              <a href={project.link} target="_blank" rel="noreferrer">
                <h2 className={styles.projectHeading}>{project.title}</h2>
              </a>
              <p className={styles.projectDescription}>{project.description}</p>
              <p className={styles.projectDescription}>
                {project.usedTechnologies}
              </p>
              <a href={project.link} target="_blank" rel="noreferrer">
                <div
                  className={`${borderedButtonStyles.buttonContainer} ${styles.buttonContainer}`}
                >
                  <span>Go To Project Page</span>
                </div>
              </a>
            </div>
            <div className={styles.projectDescriptionItem}>
              <div className={styles.projectDescriptionImgContainer}>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img src={project.titleImg} alt="" />
                </a>
              </div>
            </div>
            <div className={styles.projectDescriptionItem}>
              <h2 className={styles.projectHeading}>Project Date</h2>
              <p className={styles.projectParagraph}>{project.date}</p>
            </div>
            <div className={styles.projectDescriptionItem}>
              <h2 className={styles.projectHeading}>Project Role</h2>
              <p className={styles.projectParagraph}>{project.role}</p>
            </div>
          </div>
          <div className={styles.projectImagesRow}>
            <div className={styles.rowImageContainer}>
              <img src={project.showcaseImg1} alt="" />
            </div>
            <div className={styles.rowImageContainer}>
              <img src={project.showcaseImg2} alt="" />
            </div>
            <div className={styles.rowImageContainer}>
              <img src={project.showcaseImg3} alt="" />
            </div>
          </div>
          <BorderedButton
            title="Back to All Works"
            link="works"
          ></BorderedButton>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};
export default SingleProject;
