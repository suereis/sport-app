import React from "react";
import { useNavigate } from "react-router-dom";

const Teams = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Teams</h3>
      {/* <div>{JSON.stringify(props.teamsData)}</div> */}

      <ul>
        {props.teamsData.map((team) => (
          <li>{team.teamName}</li>
        ))}
      </ul>

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

export default Teams;
