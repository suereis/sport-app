import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const sportsImages = ["https://wallpaperaccess.com/full/191736.jpg"];

  const myStyle = {
    width: 300,
    borderColor: "#F15412",
  };
  return (
    <div style={{ margin: "100px" }}>
      <div>
        <div>
          <div
            style={{
              borderStyle: "solid",
              borderColor: "#F15412",
            }}
          >
            <h1>Welcome to About Me Page!</h1>
          </div>
          <div>
            {sportsImages.map((image) => (
              <div key={image}>
                <img style={myStyle} src={image} alt="Sport Image" />
              </div>
            ))}
          </div>
          <p>Description</p>
        </div>
      </div>
      <button
        className="primaryBtn"
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
