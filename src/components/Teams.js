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
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.teamsData.map((team) => (
          <div className="col">
            <div className="card h-100">
              <img
                src={team.nbaComLogo1}
                class="card-img-top"
                alt="..."
                style={{
                  width: "200px",
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
              ></img>
              <div class="card-body">
                <h5 class="card-title">{team.teamName}</h5>
              </div>
              <div class="card-footer">
                <button
                  className="primaryBtn"
                  onClick={() => {
                    handleTeamClick(team.teamID);
                  }}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="primaryBtn"
        style={{ marginBottom: "10px", marginTop: "30px" }}
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
