import { getAsyncCards } from "./utils";

import styles from "./ServiciesContent.module.css";
import CustomCard from "./CustomCard/CustomCard";
import { useEffect, useState } from "react";

const ServiciesContent = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      setCards(await getAsyncCards());
    })();
  }, []);

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardsWrapper}>
        {cards.map((card) => (
          <CustomCard card={card} key={card.src} />
        ))}
      </div>
    </div>
  );
};

export default ServiciesContent;
