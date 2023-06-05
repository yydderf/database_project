import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavigationBar() {
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink eventKey="1" as={Link} to="/">Home</NavLink>
                    <NavLink eventKey="2" as={Link} to="/Team">Team</NavLink>
                    <NavLink eventKey="3" as={Link} to="/Player">Player</NavLink>
                    <NavLink eventKey="4" as={Link} to="/Predict">Predict</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}