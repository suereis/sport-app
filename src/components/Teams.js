import React from "react";
import { useNavigate } from "react-router-dom";

const Teams = (props) => {
  const navigate = useNavigate();
  const handleTeamClick = (teamID) => {
    navigate("/team/" + teamID);
  };

  return (
    <div id="teamDiv">
      <h3>Teams</h3>
      <div className="card">
        <div></div>
        {/* <div>{JSON.stringify(props.teamsData)}</div> */}

        <ul className="list-group list-group-flush">
          {props.teamsData.map((team) => (
            <li
              key={team.teamID}
              className="list-group-item btn-link"
              onClick={() => {
                handleTeamClick(team.teamID);
              }}
            >
              <button type="button" className="btn btn-link">
                {team.teamName}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button
        id="primaryBtn"
        style={{ marginBottom: "10px" }}
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
