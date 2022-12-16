import React from "react";
import "./styles/App.css";

import Layout from "./components/Layout";
import Main from "./components/Main/Main";

function App() {
  return (
    <Layout>
      <div className="App">
        <Main />
      </div>
    </Layout>
  );
}

export default App;
