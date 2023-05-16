import React from "react";
import { useParams } from "react-router-dom";

function PortfolioDetail() {
  const params = useParams();

  return <div>{params.projectId}</div>;
}

export default PortfolioDetail;
