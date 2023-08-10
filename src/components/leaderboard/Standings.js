import React, { useState, useEffect } from "react";
import { Dropdown, Table, Spinner, ButtonGroup, ToggleButton } from "react-bootstrap";

export default function Standings() {
    const currentYear = new Date().getFullYear();
    const startYear = 2010;
    const [standingsData, setStandingsData] = useState([]);
    const [league, setLeague] = useState('africa');
    const [division, setDivision] = useState('central');
    const [season, setSeason] = useState(2020);
    
    const leaguesMap = ["africa", "orlando", "sacramento", "standard", "utah", "vegas"]
    const divisionsMap = ["no", "atlantic", "central", "northwest", "pacific", "southeast", "southwest"]
    const seasons = [];
    for (let year = startYear; year <= currentYear; year++) {
        seasons.push({ year, label: `${year}` });
    }

    useEffect(() => {
        const fetchStandingsData = async () => {
            setStandingsData([]);
            const url = `https://api-nba-v1.p.rapidapi.com/standings?league=${league}&season=${season}&division=${division}`;
            console.log(url);
    
            const options = {
                method: "GET",
                headers: {
                    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
                    'X-RapidAPI-Key': '112dbd5ef6mshf304b91d17f3948p1b2dc4jsnab361f5b1275'
                }
            };

            const response = await fetch(url, options);
            const json = await response.json();
            setStandingsData(json);
        };
        fetchStandingsData();
    }, [season, league, division]);

    const StandingsTable = () => {
        <div id="standingsTable">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>Win</th>
                        <th>Loss</th>
                        <th>Win%</th>
                        <th>Games Behind</th>
                        <th>Points For</th>
                        <th>Points Against</th>
                        <th>Points Diff</th>
                        <th>Streak</th>
                        <th>Last 10</th>
                    </tr>
                </thead>
                <tbody>
                    {standingsData.map((team) => (
                        <tr>
                            <td>{team.teamName}</td>
                            <td>{team.win}</td>
                            <td>{team.loss}</td>
                            <td>{team.winPct}</td>
                            <td>{team.gamesBehind}</td>
                            <td>{team.pointsFor}</td>
                            <td>{team.pointsAgainst}</td>
                            <td>{team.pointsDiff}</td>
                            <td>{team.streak}</td>
                            <td>{team.lastTen}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    }


    return (
        <div>
            <div id="options" >
                <h4>Options</h4>
                <div id="leagues" style={{ display: "inline-block", marginRight: "10px" }}>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {league.charAt(0).toUpperCase() + league.slice(1)} League
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {leaguesMap.map((league) => (
                                <Dropdown.Item onClick={() => setLeague(league)} >
                                    {league.charAt(0).toUpperCase() + league.slice(1)}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div id="divisions" style={{ display: "inline-block", marginRight: "10px" }}>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {division.charAt(0).toUpperCase() + division.slice(1)} Division
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {divisionsMap.map((division) => (
                                <Dropdown.Item onClick={() => setDivision(division)} >
                                    {division.charAt(0).toUpperCase() + division.slice(1)}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div id="seasonSelect" style={{ display: "inline-block" }}>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Season {season}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {seasons.map((season) => (
                                <Dropdown.Item onClick={() => setSeason(season.year)} >{season.label}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <hr />
            <div id="data">
                <h2>{division.charAt(0).toUpperCase() + division.slice(1)} Standings for Season {season}</h2>
                <hr />
                {standingsData.length > 0 ? (
                    <StandingsTable />
                ) : (
                    <Spinner animation="border" role="status" style={{marginBottom: "100%"}}>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )}
            </div>
        </div>
    );
}