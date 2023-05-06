import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AuthPage from "./pages/AuthPage/AuthPage";
import AnimatedRoutes from "./AnimatedRoutes";
import Main from "./components/Layout/Main/Main";

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
                <AnimatedRoutes />
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
