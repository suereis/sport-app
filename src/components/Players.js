import React from "react";
import { useNavigate } from "react-router-dom";

const Players = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ margin: "100px" }}>Players</div>
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

export default Players;
