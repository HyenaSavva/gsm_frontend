import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getProjects } from "./utils";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";

import styles from "./Portofolio.module.css";

const Portofolio = () => {
  const loadedProjects = JSON.parse(localStorage.getItem("projects")) || [];
  const [projects, setProjects] = useState(loadedProjects);

  useEffect(() => {
    const fetchData = async () => {
      const projects = await getProjects();
      localStorage.setItem("projects", JSON.stringify(projects));
      setProjects(projects);
    };

    if (projects.length === 0) {
      fetchData();
      console.log("Portfolio was fetched");
    }
  }, []);

  return (
    <motion.div
      className={styles.portfolioContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.portfolioCardsWrapper}>
        {projects.map((card) => (
          <div key={card.projectId} className={styles.portfolioCard}>
            <PortfolioCard card={card} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Portofolio;
