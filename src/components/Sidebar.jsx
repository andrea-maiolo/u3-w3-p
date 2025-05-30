import { Navbar, Nav, Container, Button, FormControl, InputGroup, Collapse, Col, NavbarToggle, Form } from "react-bootstrap";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Col md={2} className="col-2">
      <Navbar expand="md" className="fixed-left justify-content-between" id="sidebar">
        <Container className="flex-column align-items-start">
          <Navbar.Brand href="index.html">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </Navbar.Brand>
          <NavbarToggle
            aria-label="toggle navigation"
            aria-expanded="false"
            aria-controls="navbarBavAltMarkup"
            data-target="#navbarNavAltMarkup"
            data-toggle="collapse"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </NavbarToggle>

          <Navbar.Collapse id="#navbarNavAltMarkup">
            <Nav>
              <ul className="list-unstyled w-100">
                <Link to="/" className="d-flex align-items-center nav-item nav-link">
                  <i className="bi bi-house-door-fill fst-normal">&nbsp; Home</i>
                </Link>
                <Link to="/favorites" className="d-flex align-items-center nav-item nav-link">
                  {" "}
                  <i className="bi bi-book-fill fst-normal">&nbsp; Your Library</i>
                </Link>
                <Nav.Link>
                  <InputGroup className="mb-3">
                    <Form.Control placeholder="Search" aria-label="search" aria-describedby="search" />
                    <Button variant="outline-secondary" size="sm">
                      GO
                    </Button>
                  </InputGroup>
                </Nav.Link>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="nav-btn">
          <Button className="signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="login-btn" type="button">
            Login
          </Button>
          <div>
            <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
          </div>
        </div>
      </Navbar>
    </Col>
  );
};
export default Sidebar;
