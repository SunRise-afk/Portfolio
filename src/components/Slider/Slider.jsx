import React, { useState } from "react";
import styles from "./Slider.module.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export const Slider = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const slidesLength = images.length;

  const nextSlide = () => {
    setCurrent(current === slidesLength - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? slidesLength - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }
  return (
    <section className={styles.slider}>
      <FaArrowAltCircleLeft
        className={styles.leftArrow}
        onClick={prevSlide}
      ></FaArrowAltCircleLeft>
      <FaArrowAltCircleRight
        className={styles.rightArrow}
        onClick={nextSlide}
      ></FaArrowAltCircleRight>
      {images.map((img, index) => {
        return (
          <div
            className={
              index === current
                ? `${styles.slide} ${styles.active}`
                : styles.slide
            }
            key={index}
          >
            {index === current && (
              <img src={img} className={styles.image} alt="" />
            )}
          </div>
        );
      })}
    </section>
  );
};
