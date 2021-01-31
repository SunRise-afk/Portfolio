import React from "react";
import styles from "./TGModal.module.css";

export const TGModal = ({ isTelegramModalVisible }) => {
  return (
    <div
      className={`${styles.modal_container} ${
        isTelegramModalVisible ? styles.visible : ""
      }`}
    >
      <h2>{"Text me :)"}</h2>
      <div className={styles.info_container}>
        <i className="fab fa-telegram"></i>
        <p>@ilin_i</p>
      </div>
    </div>
  );
};
