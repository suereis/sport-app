import React from "react";
import { useNavigate } from "react-router-dom";

const Games = () => {
  const navigate = useNavigate();
  return (
    <div style={{ margin: "100px" }}>
      <div>Games</div>
      <button
        className="primaryBtn"
        style={{ marginBottom: "10px", marginTop: "15px" }}
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home
      </button>
    </div>
  );
};

export default Games;
