import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import LogoSVG from "../static/jackmoody_logo.svg";

export default () => (
  <Navbar variant="light" bg="light" expand="md">
    <Container>
      <Navbar.Brand href="/">
        <img
          src={LogoSVG}
          width="50"
          height="50"
          alt="Jack Signature Logo"
          id="jackmoody_logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="/euler">Project Euler</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
