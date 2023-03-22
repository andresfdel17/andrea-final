import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import react from "../assets/img/react.png";

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" href="/#home">
          <img
            alt=""
            src={react}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Home
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
