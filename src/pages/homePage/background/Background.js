import React from "react";

import BackgroundImg from "../../../static/Background.svg";
import styles from "./Background.module.css";

const Background = () => {
  return (
    <div className={styles.background}>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${BackgroundImg})` }}
      />
      <div className={styles.hero}>
        <section>
          <span>Solutii pentru</span>
          <span className={styles.arrow} />
          <span>Proiectare sisteme de securizare</span>
        </section>
        <p>Instalarea si mentenanta sistemelor </p>
      </div>
    </div>
  );
};

export default Background;
