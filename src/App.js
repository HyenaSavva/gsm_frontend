// import { useEffect } from "react";
import {
  Route,
  Routes,
  // , useNavigate
} from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../src/utils/authentication";

import "./styles/App.css";

import Layout from "./components/common/Layout";
import Main from "./components/common/Main/Main";
import Servicies from "./pages/ServiciesPage/Servicies";
import HomePage from "./pages/HomePage/HomePage";
import Portofolio from "./pages/PortofolioPage/Portofolio";
import AuthPage from "./pages/AuthPage/AuthPage";

function App() {
  // const { isAuthenticated, login, logout } = useContext(AuthContext);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isAuthenticated) navigate("/auth");
  // }, [isAuthenticated]);

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
                  <Route path="/contact" element={<Servicies />} />
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
