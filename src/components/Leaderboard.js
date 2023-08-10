import React from "react";
import { Dropdown, Table, Spinner } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


function Leaderboard() {
    const currentYear = new Date().getFullYear();
    const startYear = 2010;
    const [sortBy, setSortBy] = useState("Playoff Points");
    const [seasonData, setSeasonData] = useState([]);
    const [season, setSeason] = useState(2011);
    const navigate = useNavigate();
    const { id } = useParams();

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
                    {seasonData.map((player, index) => (
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


    const fetchData = async () => {
        const url = urlMap[sortBy];
        console.log(url);

        const options = {
            method: "GET"
        };
        const response = await fetch(url, options);
        const json = await response.json();
        return json.results;
    };

    useEffect(() => {
        const fetchSeasonData = async () => {
            setSeasonData([]);
            const data = await fetchData();
            setSeasonData(data);
        };
        fetchSeasonData();
    }, [season, sortBy]);

    return (
        <div style={{ margin: "100px" }}>
            <div id="sortBy">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Sort By
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
            <div id="seasonSelect">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select a Season
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {seasons.map((season) => (
                            <Dropdown.Item onClick={() => setSeason(season.year)} >{season.label}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div id="data">
                <h2>{sortBy} Leaderboards for Season {season}</h2>
                <hr />
                {seasonData.length > 0 ? (
                    <PlayerTable />
                ) : (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )}
            </div>
        </div>
    );
};

export default Leaderboard;