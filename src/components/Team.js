import React from "react";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Team = (props) => {
  const { teamId } = useParams();
  const [teamData, setTeamData] = useState({});

  useEffect(() => {
    const team = props.teamsData.find((team) => teamId === team.teamID);
    setTeamData(team);
  }, [props.teamsData, teamId]);

  return (
    <div id="team-card">
      <Card border="secondary">
        <Card.Img
          variant="top"
          src={teamData?.nbaComLogo1}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            borderBlockEnd: "1px solid #212529",
            // backgroundColor: "#020205",
          }}
        ></Card.Img>
        <Card.Body>
          <Card.Title className="h2">
            <strong>Name: </strong> {teamData?.teamName}
          </Card.Title>
          <Card.Text className="lead">
            <strong>Conference: </strong>
            {teamData?.conference}
          </Card.Text>
          <Card.Text className="lead">
            <strong>Division: </strong>
            {teamData?.division}
          </Card.Text>
          <Card.Text className="lead">
            <strong>City: </strong> {teamData?.teamCity}
          </Card.Text>
          <Card.Text className="lead">
            <strong>Games Played: </strong>
            {teamData?.offensiveStats?.gamesPlayed}
          </Card.Text>
          <Card.Text className="lead">
            <strong>Wins: </strong> {teamData?.wins}
          </Card.Text>
          <Card.Text className="lead">
            <strong>Loss: </strong>
            {teamData?.loss}
          </Card.Text>
          <Card.Text className="lead">
            <strong>Home Points: </strong>
            {teamData?.offensiveStats?.ptsHome}
          </Card.Text>
          <Card.Text className="lead">
            <strong>Away Points: </strong>
            {teamData?.offensiveStats?.ptsAway}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Team;
