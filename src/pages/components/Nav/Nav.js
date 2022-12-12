import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.navigation}>
      <section className={styles.section}>
        <text>G&M Surveillance</text>
        <ul className={styles.options}>
          <li>Servicies</li>
          <li>Contact</li>
          <li>Portfolio</li>
        </ul>
        <Logo />
      </section>
    </nav>
  );
};

export default Nav;
