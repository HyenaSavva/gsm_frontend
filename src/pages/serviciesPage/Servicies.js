import ServiciesForm from "../../components/ServiciesForm/ServicesForm";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ServiciesContent from "./ServicesContent/ServiciesContent";
import { useState, useEffect } from "react";
import { getItems } from "./ServicesContent/utils";
import { motion } from "framer-motion";

import styles from "./Services.module.css";

const Servicies = () => {
  const itemsData = JSON.parse(localStorage.getItem("itemsData")) || [];
  const [cardsSearch, setCardsSearch] = useState(itemsData.slice(0, 20));
  const [cartItems, setCartItems] = useState([]);
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

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    const cardsSearchList = cardsSearch;
    const cartItemsList = cartItems;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (
      destination.droppableId !== source.droppableId &&
      destination.droppableId === "cartDroppable"
    ) {
      const cardsSearchItem = cardsSearch.filter(
        (item) => item.itemId === draggableId
      );
      cardsSearchList.splice(source.index, 1);
      setCardsSearch([...cardsSearchList]);

      cartItemsList.splice(destination.index, 0, ...cardsSearchItem);
      setCartItems(cartItemsList);
    }

    if (
      destination.droppableId !== source.droppableId &&
      destination.droppableId === "searchDroppable"
    ) {
      const cartItem = cartItems.filter((item) => item.itemId === draggableId);

      cartItemsList.splice(source.index, 1);
      setCartItems(cartItemsList);

      cardsSearchList.splice(destination.index, 0, ...cartItem);
      setCardsSearch([...cardsSearchList]);
    }
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={styles.formContainer}>
          <ServiciesForm
            setCardsSearch={setCardsSearch}
            itemsData={itemsData}
            cartItems={cartItems}
          />
        </div>
        <ServiciesContent cardsSearch={cardsSearch} itemsData={itemsData} />
      </DragDropContext>
    </motion.div>
  );
};

export default Servicies;
