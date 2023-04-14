import React from "react";

import { Link } from "react-router-dom";
import profile from "../../../../static/NavProfile.png";
import styles from "./NavProfile.module.css";

const NavProfile = () => {
  return (
    <Link to="/auth">
      <div className={styles.user}>
        <p>Mario Romario</p>
        <img className={styles.profile} src={profile} alt="profile" />
      </div>
    </Link>
  );
};

export default NavProfile;
