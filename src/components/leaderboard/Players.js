import React, { useState, useEffect } from "react";
import { Dropdown, Table, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

export default function Players() {
    const currentYear = new Date().getFullYear();
    const startYear = 2010;
    const [playerData, setPlayerData] = useState([]);
    const [sortBy, setSortBy] = useState("Playoff Points");
    const [season, setSeason] = useState(2011);
    

    const urlMap = {
        "Playoff Points": `https://nba-stats-db.herokuapp.com/api/playerdata/topscorers/playoffs/${season}/`,
        "Playoff Assists": `https://nba-stats-db.herokuapp.com/api/top_assists/playoffs/${season}/`,
        "Total Points": `https://nba-stats-db.herokuapp.com/api/playerdata/topscorers/total/season/${season}/`,
        "Total Assists": `https://nba-stats-db.herokuapp.com/api/top_assists/totals/${season}/`,
        "Total Rebounds": `https://nba-stats-db.herokuapp.com/api/top_rebounds/totals/${season}/`
    };

    const seasons = [];

    for (let year = startYear; year <= currentYear; year++) {
        seasons.push({ year, label: `${year}` });
    }

    useEffect(() => {
        const fetchPlayerData = async () => {
            setPlayerData([]);
            const url = urlMap[sortBy];
            console.log(url);
    
            const options = {
                method: "GET"
            };
            const response = await fetch(url, options);
            const json = await response.json();
            setPlayerData(json);
        };
        fetchPlayerData();
    }, [season, sortBy]);

    const PlayerTable = ({ player, index }) => {
        return (
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th id="rank">Rank</th>
                        <th id="player">Player</th>
                        <th id="team">Team</th>
                        <th id="points">Points</th>
                        <th id="assists">Assists</th>
                        <th id="rebounds">Rebounds</th>
                        <th id="steals">Steals</th>
                        <th id="fgft">FG% | FT%</th>
                    </tr>
                </thead>
                <tbody>
                    {playerData.map((player, index) => (
                        <tr key={player.id - season}>
                            <td>{index + 1}</td>
                            <td>{player.player_name}</td>
                            <td>{player.team}</td>
                            <td>{player.PTS}</td>
                            <td>{player.AST}</td>
                            <td>{player.TRB}</td>
                            <td>{player.STL}</td>
                            <td>
                                {(player.field_percent * 100).toFixed(1)}% |{' '}
                                {(player.ft_percent * 100).toFixed(1)}%
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        )
    };

    return (
        <div>
            <div id="options" >
                <h4>Options</h4>
                <div id="sortBy" style={{ display: "inline-block", marginRight: "10px" }}>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Sort By {sortBy}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setSortBy("Playoff Points")} >Playoff Points</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSortBy("Playoff Assists")} >Playoff Assists</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={() => setSortBy("Total Points")} >Total Points</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSortBy("Total Assists")} >Total Assists</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSortBy("Total Rebounds")} >Total Rebounds</Dropdown.Item>
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
                <h2>{sortBy} Top Players for Season {season}</h2>
                <hr />
                {playerData.length > 0 ? (
                    <PlayerTable />
                ) : (
                    <Spinner animation="border" role="status" style={{marginBottom: "100%"}}>
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )}
            </div>
        </div>
    );
};