import { motion } from "framer-motion";
import { useEffect, useState, useContext, useMemo } from "react";
import { getAllProjects } from "api";
import PortfolioCard from "components/PortfolioCard/PortfolioCard";
import { AuthContext } from "auth/AuthContextProvider";

import styles from "./Portofolio.module.css";
import Loader from "components/UI/loader/Loader";

const Portofolio = () => {
  const loadedProjects = JSON.parse(localStorage.getItem("projects")) || [];
  const [projects, setProjects] = useState(loadedProjects);
  const [user, setUser] = useState(false);

  const { authState } = useContext(AuthContext);
  const userRoles = useMemo(
    () => authState.token?.claims.roles ?? ["viewer"],
    [authState]
  );

  useEffect(() => {
    const fetchData = async () => {
      const projects = await getAllProjects(userRoles.includes("admin"));
      localStorage.setItem("projects", JSON.stringify(projects));
      setProjects(projects);
    };

    if (authState.loggedIn) {
      setUser(authState);
      fetchData();
      console.log("Portfolio was fetched");
    }
  }, [authState, userRoles]);

  return (
    <motion.div
      className={styles.portfolioContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.portfolioCardsWrapper}>
        {projects && authState.token ? (
          projects.map((card) => {
            return (
              <div key={card.projectId} className={styles.portfolioCard}>
                <PortfolioCard card={card} />
              </div>
            );
          })
        ) : (
          <Loader />
        )}
      </div>
    </motion.div>
  );
};

export default Portofolio;
