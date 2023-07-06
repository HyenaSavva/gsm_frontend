import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Layout from "components/Layout/Layout";
import AuthPage from "pages/AuthPage/AuthPage";
import Main from "components/Layout/Main/Main";
import Servicies from "pages/ServiciesPage/Servicies";
import HomePage from "pages/HomePage/HomePage";
import Contact from "pages/ContactPage/Contact";
import Portofolio from "pages/PortofolioPage/Portofolio";
import PortofolioDetail from "pages/PortofolioDetailPage/PortofolioDetail";
import ProfilePage from "pages/ProfilePage";

import "./styles/App.css";
import ServiciesInfo from "components/ServiciesInfo";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Routes>
        <Route
          path="*"
          element={
            <Layout>
              <Main>
                <AnimatePresence mode="wait">
                  <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<HomePage />} />
                    <Route
                      path="/servicies"
                      element={
                        <>
                          <ServiciesInfo>
                            <Servicies />
                          </ServiciesInfo>
                        </>
                      }
                    />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/portfolio" element={<Portofolio />} />
                    <Route
                      path="/project/:projectId"
                      element={<PortofolioDetail />}
                    />
                    <Route path="/profile" element={<ProfilePage />} />
                  </Routes>
                </AnimatePresence>
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
