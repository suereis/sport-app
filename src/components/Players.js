import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Players = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div style={{ margin: "100px" }}>
      <div>
        Players from Team
        {id}
      </div>
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

export default Players;
