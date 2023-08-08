import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.scss";
import { useEffect, useState } from "react";
import Routing from "./components/Routing";
import teamsDataJson from "./data/teamsData.json";

function App() {
  const [teamsData, setTeamsData] = useState([]);
  const fetchTeam = async () => {
    const url =
      "https://tank01-fantasy-stats.p.rapidapi.com/getNBATeams?schedules=true&rosters=true&topPerformers=true&teamStats=true&statsToGet=averages";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
        "X-RapidAPI-Host": "tank01-fantasy-stats.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result.body);
      setTeamsData(result.body);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // fetchTeam();
    console.log(teamsDataJson.body);

    setTeamsData(
      teamsDataJson.body.sort((a, b) => {
        if (a.teamName < b.teamName) {
          return -1;
        }
        if (a.teamName > b.teamName) {
          return 1;
        }
        return 0;
      })
    );
  }, []);
  return (
    <div className="App">
      <Routing teamsData={teamsData}></Routing>
    </div>
  );
}

export default App;
