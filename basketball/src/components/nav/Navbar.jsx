import { Nav, Navbar, NavLink, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css"

export default function NavigationBar2() {
    return (
      // <Navbar collapseOnSelect expand="lg" className="bg-dark">
      <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
                alt=""
                src="/public/nba-logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            NBAnalysis
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Teams">
                <img
                    alt=""
                    src="/public/white_people.svg"
                    width="30"
                    height="30"
                    className="people"
                />{' '}
                Teams
              </Nav.Link>
              <Nav.Link href="/Players">
                <img
                    alt=""
                    src="/public/white_person.svg"
                    width="20"
                    height="20"
                    className="person"
                />{' '}
                Players
              </Nav.Link>
              <Nav.Link href="/Data" style={{"paddingRight": 0}}>
                <img
                  alt=""
                  src="/public/database.svg"
                  width="20"
                  height="20"
                  className="database"
                />{' '}
                Data
              </Nav.Link>
              <Nav.Link href="/Prediction" style={{"paddingRight": 0}}>
                <img
                    alt=""
                    src="/public/white_predictions.svg"
                    width="25"
                    height="25"
                    className="people"
                />{' '}
              </Nav.Link>
              <NavDropdown style={{"paddingLeft": 0}} title="Prediction" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/About">
                <img
                    alt=""
                    src="/public/white_info.svg"
                    width="20"
                    height="20"
                    className="info"
                />{' '}
                About</Nav.Link>
              <Nav.Link eventKey={2} href="/memes">
                <img
                    alt=""
                    src="/public/potato.svg"
                    width="20"
                    height="20"
                    className="potato"
                />
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }