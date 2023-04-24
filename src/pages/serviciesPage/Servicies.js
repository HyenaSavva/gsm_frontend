import ServiciesForm from "../../components/ServiciesForm/ServicesForm";
import ServiciesContent from "./ServicesContent/ServiciesContent";
import { useState } from "react";

import { Button } from "antd";
import styles from "./Services.module.css";

const Servicies = () => {
  const [isSure, setIsSure] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        {!isSure ? (
          <>
            <p>Want to create your own project ?</p>
            <div className={styles.projectSureContainer}></div>
            <Button type="primary" onClick={() => setIsSure((prev) => !prev)}>
              Yes
            </Button>
          </>
        ) : (
          <ServiciesForm />
        )}
      </div>
      <ServiciesContent />
    </div>
  );
};

export default Servicies;
