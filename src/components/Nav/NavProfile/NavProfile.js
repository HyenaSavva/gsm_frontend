import React from "react";
import profile from "../../../img/NavProfile.png";
import styles from "./NavProfile.module.css";

const NavProfile = () => {
  return (
    <div className={styles.user}>
      <p>Mario Romario</p>
      <img className={styles.profile} src={profile} alt="profile" />
    </div>
  );
};

export default NavProfile;
