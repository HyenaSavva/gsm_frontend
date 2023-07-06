import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { motion } from "framer-motion";
import { getAllProjects } from "api";
import { useContext } from "react";
import { AuthContext } from "auth/AuthContextProvider";
import PortfolioCard from "components/PortfolioCard/PortfolioCard";

import styles from "./ServiciesInfo.module.css";

const ServiciesInfo = ({ children }) => {
  const [agree, setIsAgree] = useState(true);
  const loadedProjects = JSON.parse(localStorage.getItem("projects")) || [];
  const [projects, setProjects] = useState(loadedProjects);
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const projects = await getAllProjects(false);
      localStorage.setItem("projects", JSON.stringify(projects));
      setProjects(projects);
    };

    fetchData();
  }, []);

  return (
    <motion.div
      className={styles.main}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {agree ? (
        <>
          <div className={styles.dialogueBox}>
            <div className={styles.info}>
              <h1>Implementați propriul proiect!</h1>
              <p>
                Aici veți introduce instrumentele de care aveți nevoie și veți
                descrie mai în detaliu ce caracteristici sunt specifice locului
                în care va fi instalat sistemul.
              </p>
            </div>
            <Button
              type="primary"
              htmlType="button"
              onClick={() => setIsAgree((prev) => !prev)}
            >
              <>Creează proiect</>
            </Button>
          </div>
          <div className={styles.projectsBox}>
            {projects[1] && authState.token ? (
              <PortfolioCard card={projects[1]} />
            ) : null}
          </div>
        </>
      ) : (
        children
      )}
    </motion.div>
  );
};

export default ServiciesInfo;
