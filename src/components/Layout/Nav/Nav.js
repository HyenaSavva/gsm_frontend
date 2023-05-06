import { useNavigate } from "react-router-dom";

import { Layout, Menu } from "antd";
import NavProfile from "./NavProfile/NavProfile";
import styles from "./Nav.module.css";

const Nav = () => {
  const { Header } = Layout;
  const padding = { padding: "0 16px" };
  const navigate = useNavigate();

  const handleNavigation = ({ key }) => {
    if (key !== "/profile") navigate(key);
  };

  return (
    <Header className={styles.navigation}>
      <Menu
        theme="light"
        mode="horizontal"
        onClick={handleNavigation}
        items={[
          {
            key: "/",
            label: <div className={styles.logo}>G&M Surveillance</div>,
          },
          {
            key: "nav",
            type: "group",
            className: styles.section,
            children: [
              {
                key: "/servicies",
                label: "Servicies",
                style: padding,
              },
              {
                key: "/contact",
                label: "Contact",
                style: padding,
              },
              {
                key: "/portfolio",
                label: "Portfolio",
                style: padding,
              },
            ],
          },
          {
            key: "/profile",
            disabled: true,
            label: <NavProfile />,
            style: { cursor: "pointer" },
          },
        ]}
      />
    </Header>
  );
};

export default Nav;
