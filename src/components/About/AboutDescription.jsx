import React from "react";
import styles from "./About.module.css";
import aboutImg from "../../assets/aboutImg.jpg";

export const AboutDescription = () => {
  return (
    <section className={styles.descriptionWrapper}>
      <div className={styles.descriptionRow}>
        <div className={styles.descriptionItem}>
          <h2>About me</h2>
          <p>
            My name is Illya and i am a beginner front-end developer. I am 22
            years old and received my higher education at the National Aerospace
            University "Kharkiv Aviation Institute". For now i am looking for a
            job and consider every offer.
          </p>
        </div>
        <div className={styles.descriptionItem}>
          <img src={aboutImg} alt="" className={styles.descriptionImage} />
        </div>
      </div>
      <div className={styles.descriptionRow}>
        <div className={styles.descriptionItem}>
          <h2>My Skills</h2>
          <ul className={styles.skillsList}>
            <li>HTML & CSS</li>
            <li>SCSS</li>
            <li>Native JavaScript</li>
            <li>React JS</li>
            <li>Redux/React-Redux</li>
            <li>For building Native JavaScript projects i use Webpack</li>
            <li>
              A litle bit React Native (with Expo CLI and React Native CLI)
            </li>
            <li>Adobe Photoshop</li>
          </ul>
        </div>
        <div className={styles.descriptionItem}>
          <h2>Why am i doing this</h2>
          <p>Cause i like it</p>
          <p>Cause i need it</p>
          <p>Cause i get it</p>
        </div>
      </div>
      <div className={styles.descriptionRow}>
        <div className={styles.descriptionItem}>
          <h2>What am i doing</h2>
          <ul>
            <li>Layouts</li>
            <li>Frontend Development</li>
          </ul>
        </div>
        <div className={styles.descriptionItem}>
          <h2>Proposals</h2>
          <p>ilin.i.1337@gmail.com</p>
        </div>
      </div>
    </section>
  );
};
