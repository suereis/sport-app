import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";

const About = () => {
  const navigate = useNavigate();

  return (
    <div style={{ margin: "100px" }}>
      <div>
        <Card>
          <Card.Img
            variant="top"
            src="https://t3.ftcdn.net/jpg/05/43/09/94/360_F_543099455_t7u3dj6pu4PItiS5BBVrbuj19vpyp9tb.jpg"
            width={800}
            height={400}
          />
          <Card.Body>
            <Card.Text>
              Basketball is a team sport of 2 teams of 5 players thatto score by
              throwing the ball at high hoops under certain rules. Played by
              indoors or outdoors and can be done by anyone.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
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

export default About;
