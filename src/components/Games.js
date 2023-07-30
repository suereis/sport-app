import React from "react";
import { useNavigate } from "react-router-dom";

const Games = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>Games</div>
      <button
        id="primaryBtn"
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
