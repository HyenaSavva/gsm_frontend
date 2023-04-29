import ServiciesForm from "../../components/ServiciesForm/ServicesForm";
import ServiciesContent from "./ServicesContent/ServiciesContent";
import { useState } from "react";

import { Button } from "antd";
import styles from "./Services.module.css";

const Servicies = () => {
  const itemsData = JSON.parse(localStorage.getItem("itemsData")) || [];
  const [cardsSearch, setCardsSearch] = useState(itemsData);
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
          <ServiciesForm
            setCardsSearch={setCardsSearch}
            itemsData={itemsData}
          />
        )}
      </div>
      <ServiciesContent cardsSearch={cardsSearch} itemsData={itemsData} />
    </div>
  );
};

export default Servicies;
