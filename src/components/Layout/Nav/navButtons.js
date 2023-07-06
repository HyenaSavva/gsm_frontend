import NavProfile from "components/Layout/Nav/NavProfile";

import styles from "./Nav.module.css";

const padding = { padding: "0 16px", borderRadius: 0 };
export const menuItems = [
  {
    key: "/",
    label: <div className={styles.logo}>WatchGuard</div>,
  },
  {
    key: "nav",
    type: "group",
    className: styles.section,
    children: [
      {
        key: "/servicies",
        label: "Servicii",
        style: padding,
      },
      {
        key: "/contact",
        label: "Contact",
        style: padding,
      },
      {
        key: "/portfolio",
        label: "Proiecte",
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
