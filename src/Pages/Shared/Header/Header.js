import React from "react";
import './Header.css'
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../../images/logo/logo.png';

const Header = () => {
  return (
    <div>
      <Navbar className="nav-style" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
              <img src={logo} alt="" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="text-dark fs-5 " href="#home">Home</Nav.Link>
            <Nav.Link className="text-dark fs-5 " href="#features">Features</Nav.Link>
            <Nav.Link className="text-dark fs-5 " href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
