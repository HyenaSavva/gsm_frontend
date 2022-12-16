import React from "react";
import styles from "./Main.module.css";
// import wallpaper from "../../img/wallpaper.png";

const Main = () => {
  return (
    <main className={styles.main}>
      <div
        className={styles.slider}
        // style={{ backgroundImage: `url(${wallpaper}` }}
      ></div>
    </main>
  );
};

export default Main;
