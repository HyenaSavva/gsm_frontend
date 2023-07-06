import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getItems } from "api";

import Background from "./Background";

const HomePage = ({ children }) => {
  const itemsData = JSON.parse(localStorage.getItem("itemsData")) || [];
  const [cards, setCards] = useState(itemsData);

  useEffect(() => {
    const fetchData = async () => {
      const items = await getItems();
      localStorage.setItem("itemsData", JSON.stringify(items));
      setCards(items);
    };

    if (cards.length === 0) {
      fetchData();
    }
  }, [cards.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
      <Background />
    </motion.div>
  );
};

export default HomePage;
