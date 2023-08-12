import React, { useState, useEffect } from "react";
import { Dropdown, Table, Spinner } from "react-bootstrap";

export default function Standings() {
  const endYear = new Date().getFullYear() - 1;
  const startYear = 2018;
  const [standingsData, setStandingsData] = useState([]);
  const [easternConferenceData, setEasternConferenceData] = useState([]);
  const [westernConferenceData, setWesternConferenceData] = useState([]);
  const [season, setSeason] = useState(2022);

  const seasons = [];
  for (let year = startYear; year <= endYear; year++) {
    seasons.push({ year, label: `${year}` });
  }

  useEffect(() => {
    const fetchStandingsData = async () => {
      setStandingsData([]);
      const url = `https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=${season}`;
      console.log(url);

      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
          "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_K,
        },
      };

      const response = await fetch(url, options);
      const json = await response.json();
      setStandingsData(json.response);
    };
    fetchStandingsData();
  }, [season]);

  useEffect(() => {
    setEasternConferenceData(
      standingsData
        .filter((item) => item.conference.name === "east")
        .sort((a, b) => b.win.total - a.win.total)
    );
    setWesternConferenceData(
      standingsData
        .filter((item) => item.conference.name === "west")
        .sort((a, b) => b.win.total - a.win.total)
    );
  }, [standingsData]);

  const StandingsTable = (props) => {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>TEAM</th>
            <th>W</th>
            <th>L</th>
            <th>WIN%</th>
            <th>CONF | WL</th>
            <th>DIV | WL</th>
            <th>HOME</th>
            <th>AWAY</th>
            <th>STREAK</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((team) => (
            <tr key={`${team.team.code}-${season}`}>
              <td>
                {team.team.name} ({team.team.code})
              </td>
              <td>{team.win.total}</td>
              <td>{team.loss.total}</td>
              <td>
                {(
                  (team.win.total / (team.win.total + team.loss.total)) *
                  100
                ).toFixed(1)}
              </td>
              <td>
                {team.conference.name.charAt(0).toUpperCase() +
                  team.conference.name.slice(1)}{" "}
                | {team.conference.win}-{team.conference.loss}
              </td>
              <td>
                {team.division.name.charAt(0).toUpperCase() +
                  team.division.name.slice(1)}{" "}
                | {team.division.win}-{team.division.loss}
              </td>
              <td>
                {team.win.home}-{team.loss.home}
              </td>
              <td>
                {team.win.away}-{team.loss.away}
              </td>
              <td>
                {team.winStreak ? "W" : "L"} {team.streak}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  return (
    <div>
      <div id="options">
        <h4>Options</h4>
        <div id="seasonSelect" style={{ display: "inline-block" }}>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Season {season}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {seasons.map((season) => (
                <Dropdown.Item onClick={() => setSeason(season.year)}>
                  {season.label}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <hr />
      <div id="data">
        <h2>Standings for Season {season}</h2>
        <hr />
        {standingsData.length > 0 ? (
          <div>
            <h4>Eastern Conference</h4>
            <StandingsTable data={easternConferenceData} />
            <h4>Western Conference</h4>
            <StandingsTable data={westernConferenceData} />
          </div>
        ) : (
          <Spinner
            animation="border"
            role="status"
            style={{ marginBottom: "100%" }}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </div>
    </div>
  );
}
