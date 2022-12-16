import React from "react";
import logo from "../../../img/logo.png";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.user}>
      <p>Mario Romario</p>
      <img className={styles.logo} src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
