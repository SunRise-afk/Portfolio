import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';
import React from 'react';
import styles from './Logos.module.css';
import { useSelector } from 'react-redux';
import { BorderedButton } from '../BorderedButton/BorderedButton';
import { BigLink } from '../BigLink/BigLink';

const Logos = () => {
  const works = useSelector((state) => state.works);
  return (
    <>
      <Navbar></Navbar>
      <section className={styles.logos}>
        <div className={styles.container}>
          <div className={styles.jumboContainer}>
            <h1 className={styles.jumboHeading}>Logo Collection</h1>
            <p className={styles.jumboParagraph}>Solutions & Design</p>
          </div>
          <div className={styles.logosItemsContainer}>
            {works.map((work) => {
              return (
                <div className={styles.logoItem} key={work.id}>
                  <img src={work.titleImg} alt="" />
                </div>
              );
            })}
          </div>
          <BorderedButton title="all works" link="works"></BorderedButton>
        </div>
        <BigLink
          linkPathes={['/works', '/about']}
          linkTitles={['works', 'about']}
        ></BigLink>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Logos;
