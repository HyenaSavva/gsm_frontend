import Avatar from "antd/es/avatar/avatar";
import Loader from "components/UI/loader/Loader";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import styles from "./ProfilePage.module.css";

const ProfilePage = () => {
  const { user } = useSelector((state) => state.user);
  const [imageSRC, setImageSRC] = useState(false);
  console.log(user);

  useEffect(() => {
    setImageSRC(() => user.userData && user.userData.photoURL);
  }, [user]);

  return user.token ? (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.profilePageContainer}
      >
        <div className={styles.profilePage}>
          <div className={styles.sideProfile}>
            <Avatar
              src={imageSRC}
              draggable={false}
              shape="square"
              size={140}
              className={styles.avatar}
            />
            <div className={styles.mainInfo}>
              <section>
                <h2>{user.userData.displayName || <>no username</>}</h2>
                <p>
                  Roles: {user.token.claims.roles?.toString() || <>no roles</>}.
                </p>
              </section>

              <section>
                <h2>Contacts:</h2>
                <p>Email: {user.userData.email}</p>
                <p>Phone: {user.userData?.phoneNumber || <>omitted</>}</p>
              </section>

              <section>
                <h2>Aditional information:</h2>
                <ul className={styles.additionalInfo}>
                  <li></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  ) : (
    <Loader />
  );
};

export default ProfilePage;
