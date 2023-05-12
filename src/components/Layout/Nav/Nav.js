import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import { menuItems } from "./utils";
import { useMemo } from "react";

import styles from "./Nav.module.css";

const Nav = () => {
  const { Header } = Layout;
  const navigate = useNavigate();
  const items = useMemo(() => menuItems, [menuItems]);

  const handleNavigation = ({ key }) => {
    if (key !== "/profile") navigate(key);
  };

  return (
    <Header className={styles.navigation}>
      <Menu
        theme="light"
        mode="horizontal"
        onClick={handleNavigation}
        items={items}
      />
    </Header>
  );
};

export default Nav;
