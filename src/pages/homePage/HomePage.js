import React from "react";

import Background from "./background/Background";

const HomePage = ({ children }) => {
  return (
    <>
      {children}
      <Background />
    </>
  );
};

export default HomePage;
