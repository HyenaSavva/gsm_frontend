import ServiciesForm from "../../components/ServiciesForm/ServicesForm";
import { DragDropContext } from "react-beautiful-dnd";
import ServiciesContent from "./ServicesContent/ServiciesContent";
import { useState, useEffect } from "react";
import { getItems } from "./ServicesContent/utils";
import { motion } from "framer-motion";
import { onDragEnd } from "./dragLogic";

import styles from "./Services.module.css";

const Servicies = () => {
  const itemsData = JSON.parse(localStorage.getItem("itemsData")) || [];
  const [cardsSearch, setCardsSearch] = useState(itemsData);
  const [cards, setCards] = useState(itemsData);
  const [cartItems, setCartItems] = useState([]);

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
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <DragDropContext
        onDragEnd={(e) =>
          onDragEnd(e, cardsSearch, cartItems, setCardsSearch, setCartItems)
        }
      >
        <div className={styles.formContainer}>
          <ServiciesForm cartItems={cartItems} />
        </div>
        <ServiciesContent
          setCardsSearch={setCardsSearch}
          itemsData={itemsData}
          cardsSearch={cardsSearch}
        />
      </DragDropContext>
    </motion.div>
  );
};

export default Servicies;
