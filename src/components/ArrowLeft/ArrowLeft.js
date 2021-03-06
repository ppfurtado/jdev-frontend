import React from "react";
import { Link } from "react-router-dom";

const ArrowLeft = () => {
  return (
    <Link to="/" style={{ position: "fixed", top: "60px", left: "60px" }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35">
        <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
      </svg>
    </Link>
  );
};

export default ArrowLeft;
