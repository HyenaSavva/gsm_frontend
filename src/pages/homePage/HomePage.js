import React from "react";

import Background from "../../img/Background.svg";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${Background})` }}
      />
    </>
  );
};

export default HomePage;
