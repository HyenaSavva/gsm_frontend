import React from "react";
import Background from "./Background/Background";

const HomePage = ({ children, logged }) => {
  return (
    <>
      {children}
      <Background />
    </>
  );
};

export default HomePage;
