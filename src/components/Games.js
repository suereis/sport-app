import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";

const Games = () => {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      const url = "https://free-nba.p.rapidapi.com/games?page=0&per_page=25";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "1f7896f7e8msh9824baff5cae594p168600jsnfa31657bb517",
          "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setGames(result.data || []);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  return (
    <div style={{ margin: "100px" }}>
      <div>
        <strong>
          <h1>Games</h1>
        </strong>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Season</th>
                <th>Date</th>
                <th>Home Team</th>
                <th>Visitors Team</th>
                <th>Home Team Score</th>
                <th>Visitors Team Score</th>
              </tr>
            </thead>
            <tbody>
              {games.map((game) => (
                <tr key={game.id}>
                  <td>{game.id}</td>
                  <td>{game.season}</td>
                  <td>{new Date(game.date).toLocaleDateString()}</td>
                  <td>{game.home_team.name}</td>
                  <td>{game.visitor_team.name}</td>
                  <td>{game.home_team_score}</td>
                  <td>{game.visitor_team_score}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        <button
          className="primaryBtn"
          style={{ marginBottom: "10px", marginTop: "15px" }}
          onClick={() => {
            navigate("/");
          }}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Games;