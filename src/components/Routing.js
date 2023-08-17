import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import League from "./League";
import Teams from "./Teams";
import Games from "./Games";
import Footer from "./Footer";
import Error from "./Error";
import Login from "./Login";
import Register from "./Register";
import Team from "./Team";
import SearchBar from "./SearchBar";
import Leaderboard from "./leaderboard/Leaderboard";

const Routing = (props) => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Container>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/league" element={<League />} />
            <Route
              path="/teams"
              element={<Teams teamsData={props.teamsData} />}
            />
            <Route
              path="/team/:teamId"
              element={<Team teamsData={props.teamsData} />}
            />
            <Route path="/games" element={<Games />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/searchBar" element={<SearchBar />} />
            <Route path="/leaderboard" element={<Leaderboard />} />

            <Route path="*" element={<Error />} />
          </Routes>
        </Container>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
};

export default Routing;
