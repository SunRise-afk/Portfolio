import React from "react";
import styles from "./TGModal.module.css";
import { FaTelegram } from "react-icons/fa";

export const TGModal = ({ isTelegramModalVisible }) => {
  return (
    <div
      className={`${styles.modal_container} ${
        isTelegramModalVisible ? styles.visible : ""
      }`}
    >
      <h2>{"Text me :)"}</h2>
      <a href="https://t.me/ilin_i" target="_blank" rel="noreferrer">
        <div className={styles.info_container}>
          <FaTelegram className={styles.icon}></FaTelegram>
          <p>@ilin_i</p>
        </div>
      </a>
    </div>
  );
};
