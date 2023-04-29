import styles from "./ServiciesContent.module.css";
import CustomCard from "./CustomCard/CustomCard";

import { getItems } from "./utils";
import { useEffect, useState, useMemo } from "react";

const ServiciesContent = ({ cardsSearch, itemsData }) => {
  const [cards, setCards] = useState(itemsData);

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

  const cardsList = useMemo(
    () =>
      cardsSearch
        .map((card) => <CustomCard card={card} key={card.itemId} />)
        .slice(0, 30),
    [cardsSearch]
  );

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardsWrapper}>{cardsList}</div>
    </div>
  );
};

export default ServiciesContent;
