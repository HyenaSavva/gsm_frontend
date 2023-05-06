import { motion } from "framer-motion";

import Background from "./Background/Background";

const HomePage = ({ children, logged }) => {
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
