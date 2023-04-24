import { Route, Routes } from "react-router-dom";

import Contact from "./pages/ContactPage/Contact";
import Layout from "./components/Layout/Layout";
import Main from "./components/Layout/Main/Main";
import Servicies from "./pages/ServiciesPage/Servicies";
import HomePage from "./pages/HomePage/HomePage";
import Portofolio from "./pages/PortofolioPage/Portofolio";
import AuthPage from "./pages/AuthPage/AuthPage";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="*"
          element={
            <Layout>
              <Main>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/servicies" element={<Servicies />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/portfolio" element={<Portofolio />} />
                </Routes>
              </Main>
            </Layout>
          }
        />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
