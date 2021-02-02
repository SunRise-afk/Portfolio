import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { WorkItem } from "./WorkItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import styles from "./Works.module.css";
import { BigLink } from "../BigLink/BigLink";

const Works = () => {
  const worksItems = useSelector((state) => state.works);
  return (
    <>
      <Navbar></Navbar>
      <section className={styles.works}>
        <div className={styles.container}>
          <div className={styles.jumboContainer}>
            <h1 className={styles.jumboHeading}>Partnerships</h1>
            <p className={styles.jumboParagraph}>Happy Brands</p>
          </div>
          <div className={styles.worksContainer}>
            {worksItems.map((work) => {
              return (
                <Link to={`/Portfolio/works/${work.id}`} key={work.id}>
                  <WorkItem
                    title={work.title}
                    role={work.role}
                    titleImg={work.titleImg}
                  ></WorkItem>
                </Link>
              );
            })}
          </div>
        </div>
        <BigLink
          linkPathes={["/about", "/logos"]}
          linkTitles={["about", "logos"]}
        ></BigLink>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Works;
