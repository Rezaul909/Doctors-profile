import React from "react";
import "./Header.css";
import { Container, Nav, Navbar} from "react-bootstrap";
import logo from "../../../images/logo/logo.png";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Home">Home</Nav.Link>
              <Nav.Link href="/Services">Services</Nav.Link>
              <Nav.Link href="/Blogs">Blogs</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="/CheckOut">Check-Out</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Navbar className="nav-style" sticky="top" variant="dark">
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
      </Navbar> */}
    </div>
  );
};

export default Header;
