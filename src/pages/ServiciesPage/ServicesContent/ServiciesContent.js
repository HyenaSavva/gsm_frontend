import CustomCard from "../../../components/CustomCard/CustomCard";
import ServiceSearch from "../../../components/ServiceSearch/ServiceSearch";
import { useMemo } from "react";
import { Droppable } from "react-beautiful-dnd";

import styles from "./ServiciesContent.module.css";

const ServiciesContent = ({ cardsSearch, itemsData, setCardsSearch }) => {
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
      <ServiceSearch
        itemsData={itemsData}
        setCardsSearch={setCardsSearch}
        cardsSearch={cardsSearch}
      />
      
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
