import NavProfile from "./NavProfile/NavProfile";

import styles from "./Nav.module.css";

const padding = { padding: "0 16px" };
export const menuItems = [
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
];
