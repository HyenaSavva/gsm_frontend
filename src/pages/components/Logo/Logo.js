import React from "react";
import logo from "../../../img/logo.png";
import styles from "./Logo.module.css";

const Logo = () => {
  return <img className={styles.logo} src={logo} alt="logo" />;
};

export default Logo;
