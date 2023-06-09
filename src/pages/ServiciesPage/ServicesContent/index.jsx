import CustomCard from "../../../components/CustomCard/CustomCard";
import ServiceSearch from "../../../components/ServiceSearch/ServiceSearch";
import { useMemo, useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { Pagination } from "antd";

import styles from "./ServiciesContent.module.css";

const ServiciesContent = ({ cardsSearch, itemsData, setCardsSearch }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(30);

  const lastIndexPage = currentPage * itemsPerPage;
  const firstIndexPage = lastIndexPage - itemsPerPage;

  const cardsList = useMemo(
    () =>
      cardsSearch
        .map((card, index) => (
          <CustomCard card={card} key={card.itemId} index={index} />
        ))
        .slice(firstIndexPage, lastIndexPage),
    [cardsSearch, firstIndexPage, lastIndexPage]
  );

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.searchContainer}>
        <ServiceSearch itemsData={itemsData} setCardsSearch={setCardsSearch} />
      </div>

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
      <div className={styles.pagination}>
        <Pagination
          total={itemsData.length}
          pageSize={itemsPerPage}
          pageSizeOptions={[30, 60, 90, 120]}
          onChange={(page, pageSize) => setCurrentPage(page)}
          onShowSizeChange={(current, size) => setItemsPerPage(size)}
        />
      </div>
    </div>
  );
};

export default ServiciesContent;
