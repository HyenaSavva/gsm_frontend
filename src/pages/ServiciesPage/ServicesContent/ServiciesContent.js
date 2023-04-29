import styles from "./ServiciesContent.module.css";
import CustomCard from "./CustomCard/CustomCard";

import { useMemo } from "react";

const ServiciesContent = ({ cardsSearch }) => {
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
