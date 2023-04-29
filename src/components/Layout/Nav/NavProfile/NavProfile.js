import { Link } from "react-router-dom";
import { logout } from "../../../AuthForm/authFunctions/authFunctions";
// import { useContext } from "react";
// import { AuthContext } from "../../../../components/AuthForm/authFunctions/AuthContextProvider";

import profile from "../../../../static/NavProfile.png";
import styles from "./NavProfile.module.css";

const NavProfile = () => {
  return (
    <Link to="/auth">
      <div className={styles.user}>
        <p>Mario Romario</p>
        <img className={styles.profile} src={profile} alt="profile" />
        <div className={styles.dropdownContent}>
          <p onClick={async () => await logout()}>Log out</p>
        </div>
      </div>
    </Link>
  );
};

export default NavProfile;
