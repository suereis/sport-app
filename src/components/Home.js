import React from "react";
import { useState } from "react";
import { Carousel, Card, Table, Button } from "react-bootstrap";

const Home = () => {
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
          <Card.Header>Sports Featured</Card.Header>
          <Card.Body>
            <Card.Title>A quick treatment of any sports fans</Card.Title>
            <Card.Text>Additional content for the sports teams</Card.Text>
            <Button variant="primary">Here it is!</Button>
          </Card.Body>
        </Card>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Games: </th>
              <th>Team 1:</th>
              <th>Team 2: </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Team A</td>
              <td>Team B</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Team C</td>
              <td>Team D</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Team E</td>
              <td>Team F</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Home;
