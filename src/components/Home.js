import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel, Card, Col, Row, Button } from "react-bootstrap";

const Home = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{ margin: "100px" }}>
      <div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/191736.jpg"
              alt="First slide"
              width={800}
              height={400}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.nba.com/manage/2023/08/nba-canada-1.png"
              alt="Second slide"
              width={800}
              height={400}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://image.api.playstation.com/vulcan/ap/rnd/202306/2609/21f172c0b0cfa1874e75d38c672a2961b0db4d02f6e93c5d.jpg"
              alt="Third slide"
              width={700}
              height={400}
            />
          </Carousel.Item>
        </Carousel>

        <Card>
          <Card.Header>Leagues</Card.Header>
          <Card.Body>
            <Card.Title>NBA Leagues</Card.Title>
            <Card.Text>Check for additional information</Card.Text>
            <Button
              className="secondaryBtn"
              onClick={() => {
                navigate("/leagues");
              }}
            >
              Here it is!
            </Button>
          </Card.Body>
        </Card>

        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Leaderboard</Card.Title>
                <Card.Text>
                  Check team standings and player performances.
                </Card.Text>
                <button
                  className="secondaryBtn"
                  onClick={() => {
                    navigate("/leadboard");
                  }}
                >
                  details
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Teams</Card.Title>
                <Card.Text>Check info from your favorite teams.</Card.Text>
                <button
                  className="secondaryBtn"
                  onClick={() => {
                    navigate("/teams");
                  }}
                >
                  details
                </button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Games</Card.Title>
                <Card.Text>Check your favorite team game score.</Card.Text>
                <button
                  className="secondaryBtn"
                  onClick={() => {
                    navigate("/games");
                  }}
                >
                  details
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
