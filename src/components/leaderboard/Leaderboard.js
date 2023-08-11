import React from "react";
import Players from "./Players";
import Standings from "./Standings";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { useState } from "react";


function Leaderboard() {
    const [leaderboardType, setLeaderboardType] = useState("topPlayers");

    const handleLeaderboardChange = (option) => {
        setLeaderboardType(option);
    };

    const renderLeaderboardType = () => {
        if (leaderboardType === "topPlayers") {
            return <Players />;
        } else if (leaderboardType === "standings") {
            return <Standings />;
        }
    }

    return (
        <div style={{ margin: "80px 0" }}>
            <ButtonGroup style={{ marginBottom: "10px" }}>
                <ToggleButton
                    variant={leaderboardType === "topPlayers" ? "success" : "outline-success"}
                    onClick={() => handleLeaderboardChange("topPlayers")}
                >
                    Top Players
                </ToggleButton>
                <ToggleButton
                    variant={leaderboardType === "standings" ? "success" : "outline-success"}
                    onClick={() => handleLeaderboardChange("standings")}
                >
                    Standings
                </ToggleButton>
            </ButtonGroup>

            {renderLeaderboardType()}
        </div>
    );
}
export default Leaderboard;