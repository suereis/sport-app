import React, { useState, useEffect } from "react";
import { Dropdown, Table, Spinner, ButtonGroup, ToggleButton } from "react-bootstrap";

export default function Standings() {
    const currentYear = new Date().getFullYear();
    const startYear = 2010;
    const [standingsData, setStandingsData] = useState([]);
    const [season, setSeason] = useState(2020);
    
    const seasons = [];
    for (let year = startYear; year <= currentYear; year++) {
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
                    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com',
                    'X-RapidAPI-Key': '112dbd5ef6mshf304b91d17f3948p1b2dc4jsnab361f5b1275'
                }
            };

            const response = await fetch(url, options);
            const json = await response.json();
            setStandingsData(json);
            console.log(json);
        };
        fetchStandingsData();
    }, [season]);

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
                <h2>Standings for Season {season}</h2>
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