import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Logo from "../images/logo.png";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div id="navDiv" className="fixed-top">
      <Navbar
        expand="md
      "
      >
        <Container fluid>
          <Navbar.Brand href="/" id="navbrand" style={{ padding: "0" }}>
            <img src={Logo}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100%", margin: "0" }}
              navbarScroll
            >
              <Nav.Link href="/" id="navBarItem">
                Home
              </Nav.Link>
              <Nav.Link href="/about" id="navBarItem">
                About
              </Nav.Link>
              <Nav.Link href="/league" id="navBarItem">
                League
              </Nav.Link>
              <Nav.Link href="/teams" id="navBarItem">
                Teams
              </Nav.Link>
              <Nav.Link href="/players" id="navBarItem">
                Players
              </Nav.Link>
              <Nav.Link href="/games" id="navBarItem">
                Games
              </Nav.Link>
              <Nav.Link href="/login" id="navBarItem">
                Register/Login
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button
                className="primaryBtn"
                onClick={() => {
                  navigate("/searchBar");
                }}
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
