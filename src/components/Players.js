import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Players = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div>
      <div>
        Players from Team
        {id}
      </div>
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

export default Players;
