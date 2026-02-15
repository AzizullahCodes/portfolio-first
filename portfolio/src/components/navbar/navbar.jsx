// Navbar.jsx
import Container from 'react-bootstrap/Container';
import './navbar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function MyNavbar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg"  id='navbar'>
      <Container> {/* Full width */}
        <Navbar.Brand as={NavLink} to="/">
          Portfolio
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
            <Nav.Link as={NavLink} to="/cssProjects">Css-Projects</Nav.Link>
            <Nav.Link as={NavLink} to="/jsProjects">JsProjects</Nav.Link>
            <Nav.Link as={NavLink} to="/codingExercises">Coding-Exercises</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link> */}
            <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/about">About</NavLink>
          <NavLink className="nav-link" to="/services">Services</NavLink>
          <NavLink className="nav-link" to="/cssProjects">Css-Projects</NavLink>
          <NavLink className="nav-link" to="/jsProjects">JsProjects</NavLink>
          <NavLink className="nav-link" to="/codingExercises">Coding-Practice</NavLink>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
