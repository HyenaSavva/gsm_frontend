import styles from "./ServiciesContent.module.css";
import CustomCard from "../../../components/CustomCard/CustomCard";

import { useMemo } from "react";
import { Droppable } from "react-beautiful-dnd";

const ServiciesContent = ({ cardsSearch }) => {
  const cardsList = useMemo(
    () =>
      cardsSearch
        .map((card, index) => (
          <CustomCard card={card} key={card.itemId} index={index} />
        ))
        .slice(0, 60),
    [cardsSearch]
  );

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardsWrapper}>
        <Droppable droppableId="searchDroppable" direction="grid">
          {(provided) => {
            return (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                {cardsList}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </div>
    </div>
  );
};

export default ServiciesContent;
