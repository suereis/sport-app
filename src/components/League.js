import React from "react";
import { useNavigate } from "react-router-dom";

const League = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>League</div>
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

export default League;
