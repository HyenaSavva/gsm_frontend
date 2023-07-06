import { logout } from "api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, memo } from "react";
import { useSelector } from "react-redux";
import { Avatar, Dropdown } from "antd";
import { LogoutOutlined, SettingOutlined } from "@ant-design/icons";

import styles from "./NavProfile.module.css";

const NavProfile = memo(() => {
  const red = useSelector((state) => state.user);
  const authState = red.user;

  const [user, setUser] = useState(false);
  const [imageSRC, setImageSRC] = useState(false);

  const navigate = useNavigate();
  const handleNavigation = (key) => {
    navigate(key);
  };

  useEffect(() => {
    setUser(() => (authState.userData ? authState : false));
    setImageSRC(() =>
      authState.userData ? authState.userData.photoURL : false
    );
  }, [authState]);

  return (
    <div className={styles.user}>
      <Dropdown
        menu={{
          items: [
            {
              key: "/profile",
              label: (
                <div className={styles.dropDownProfile}>
                  <Avatar
                    size={38}
                    src={imageSRC}
                    style={{ margin: "0 0.5rem 0 0" }}
                  />
                  <div>
                    <span>
                      {user ? user.userData.displayName : <>Log In</>}
                    </span>
                    <p>{user ? user.userData.email : <></>}</p>
                  </div>
                </div>
              ),
              onClick: (item) => handleNavigation(item.key),
            },
            { type: "divider" },
            {
              key: "/settings",
              label: (
                <div>
                  <SettingOutlined /> Settings
                </div>
              ),
              onClick: (item) => handleNavigation(item.key),
            },
            { type: "divider" },
            {
              key: "/auth",
              label: (
                <>
                  {!user ? (
                    <>
                      <LogoutOutlined /> Log In
                    </>
                  ) : (
                    <>
                      <LogoutOutlined /> Log Out
                    </>
                  )}
                </>
              ),
              onClick: async (item) => {
                await logout();
                handleNavigation(item.key);
              },
            },
          ],
        }}
        trigger={["click"]}
        arrow
      >
        <Avatar size={42} src={imageSRC} />
      </Dropdown>
    </div>
  );
});

export default NavProfile;
