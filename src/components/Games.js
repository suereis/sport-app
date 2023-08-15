import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";

const Games = () => {
  const navigate = useNavigate();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      const url = "https://api-nba-v1.p.rapidapi.com/games?season=2021";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "818ba989camsh7589688975ce7ebp156339jsna0795b66c292",
          "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        setGames(data.response || []);;
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
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Season</th>
              <th>Date</th>
              <th>Stage</th>
              <th>Periods</th>
              <th>Arena</th>
              <th>Visitors Team</th>
              <th>Home Team</th>
              <th>Visitors Score</th>
              <th>Home Score</th>
            </tr>
          </thead>
          <tbody>
            {games.map((games) => (
              <tr key={games.id}>
                <td>{games.teamAbv}</td>
                {/* <td>{games.date.start}</td>
                <td>{games.stage.long}</td>
                <td>{games.periods.total}</td>
                <td>{games.arena.name}, {games.arena.city}</td>
                <td>{games.teams.visitors.name}</td>
                <td>{games.teams.home.name}</td>
                <td>{games.scores.visitors.points}</td>
                <td>{games.scores.home.points}</td> */}
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
  );
};

export default Games;




// const Games = () => {
//   const navigate = useNavigate();
//   const [gameData, setGameData] = useState([]);

//   const fetchGames = async () => {
//     setGameData([]);
//     const url = 'https://api-nba-v1.p.rapidapi.com/games?season=2021';
//     console.log(url);

//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': '818ba989camsh7589688975ce7ebp156339jsna0795b66c292',
//         'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
//       }
//     };

//     try {
//       const response = await fetch(url, options);
//       const json = await response.json();
//       setGameData(json.response);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchGames();
//   }, []);

//   return (
//     <div style={{ margin: "100px" }}>
//       <div><strong><h1>Games</h1></strong></div>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Season</th>
//             <th>Date</th>
//             <th>Stage</th>
//             <th>Periods</th>
//             <th>Arena</th>
//             <th>Visitors Team</th>
//             <th>Home Team</th>
//             <th>Visitors Score</th>
//             <th>Home Score</th>
//           </tr>
//         </thead>
//         <tbody>
//           {gameData.map((game) => (
//             <tr key={game.id}>
//               <td>{game.season}</td>
//               <td>{game.date.start}</td>
//               <td>{game.stage.long}</td>
//               <td>{game.periods.total}</td>
//               <td>{game.arena.name}, {game.arena.city}</td>
//               <td>{game.teams.visitors.name}</td>
//               <td>{game.teams.home.name}</td>
//               <td>{game.scores.visitors.points}</td>
//               <td>{game.scores.home.points}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//       <button
//         className="primaryBtn"
//         style={{ marginBottom: "10px", marginTop: "15px" }}
//         onClick={() => {
//           navigate("/");
//         }}
//       >
//         Go to Home
//       </button>
//     </div>
//   );
// };

// export default Games;
