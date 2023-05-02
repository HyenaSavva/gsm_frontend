import ServiciesForm from "../../components/ServiciesForm/ServicesForm";
import ServiciesContent from "./ServicesContent/ServiciesContent";
import { useState, useEffect } from "react";
import { getItems } from "./ServicesContent/utils";

import { Button } from "antd";
import styles from "./Services.module.css";

const Servicies = () => {
  const itemsData = JSON.parse(localStorage.getItem("itemsData")) || [];
  const [cardsSearch, setCardsSearch] = useState(itemsData);
  const [cards, setCards] = useState(itemsData);
  const [isSure, setIsSure] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const items = await getItems();
      localStorage.setItem("itemsData", JSON.stringify(items));
      setCards(items);
    };

    if (cards.length === 0) {
      fetchData();
      console.log("Data was fetched");
    }
  }, [cards.length]);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        {!isSure ? (
          <>
            <p>Want to create your own project ?</p>
            <div className={styles.projectSureContainer}>
              <Button type="primary" onClick={() => setIsSure((prev) => !prev)}>
                Yes
              </Button>
            </div>
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
