import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import { menuItems } from "./navButtons";
import { memo } from "react";

import styles from "./Nav.module.css";

const Nav = memo(() => {
  const { Header } = Layout;
  const navigate = useNavigate();

  const handleNavigation = ({ key }) => {
    navigate(key);
  };

  return (
    <Header className={styles.navigation}>
      <Menu
        theme="light"
        mode="horizontal"
        onClick={handleNavigation}
        items={menuItems}
      />
    </Header>
  );
});

export default Nav;
