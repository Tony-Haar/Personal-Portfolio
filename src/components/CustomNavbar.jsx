import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";

import logo from "../assets/Logo1.png";

function CustomNavbar() {
  return (
    <Navbar expand="lg" bg="light" fixed="top">
      <Container>
        <Navbar.Brand href="#">
          <img
            src={logo}
            alt="Logo"
            height="60"
            style={{ objectFit: "contain" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="hero" smooth duration={500}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="about" smooth duration={500}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="services" smooth duration={500}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="portfolio" smooth duration={500}>
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} to="contact" smooth duration={500}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
