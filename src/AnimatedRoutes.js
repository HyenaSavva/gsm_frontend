import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Servicies from "./pages/ServiciesPage/Servicies";
import HomePage from "./pages/HomePage/HomePage";
import Contact from "./pages/ContactPage/Contact";
import Portofolio from "./pages/PortofolioPage/Portofolio";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicies" element={<Servicies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portofolio />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
