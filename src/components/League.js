import React from "react";
import { useNavigate } from "react-router-dom";

const League = () => {
  const navigate = useNavigate();
  return (
    <div style={{ margin: "100px" }}>
      <div>League</div>
      <button
        className="primaryBtn"
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home
      </button>
    </div>
  );
};

export default League;
