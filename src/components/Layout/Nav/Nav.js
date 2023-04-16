import { Link } from "react-router-dom";

import NavProfile from "./NavProfile/NavProfile";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.navigation}>
      <section className={styles.section}>
        <ul className={styles.options}>
          <li>
            <Link to="/servicies">Servicies</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
        <Link to="/" className={styles.logo}>
          G&M Surveillance
        </Link>
        {/* <Link to="/logo"> */}
        <NavProfile />
        {/* </Link> */}
      </section>
    </nav>
  );
};

export default Nav;
