import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const TopNavbar = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link} to="home">
            Products
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="addproduct">
              Add Products
            </Nav.Link>
            <Nav.Link as={Link} to="display">
              Display
            </Nav.Link>
            <Nav.Link as={Link} to="search">
              Search
            </Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavbar;
