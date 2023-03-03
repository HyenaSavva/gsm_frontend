import React from "react";
import { Route, Routes } from "react-router-dom";

import "./styles/App.css";

import Layout from "./components/Layout";
import Main from "./components/Main/Main";
import Servicies from "./pages/serviciesPage/Servicies";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <div className="App">
      <Layout>
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicies" element={<Servicies />} />
            <Route path="/contact" element={<HomePage />} />
            <Route path="/portfolio" element={<HomePage />} />
          </Routes>
        </Main>
      </Layout>
    </div>
  );
}

export default App;
