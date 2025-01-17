import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Logo from "../../../Photos/Migrants/Logo/logo.png";
import { Link } from "react-router-dom";
import "@fontsource/roboto";
import "@fontsource/league-spartan";

import { ImUserTie } from "react-icons/im";
import { RiBuilding2Fill } from "react-icons/ri";
import { TbDoorEnter } from "react-icons/tb";
function NavBar() {
  return (
    <Navbar
      
      style={{ backgroundColor: "white", height: "100%" }}
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to='home'
          
          className="display-1"
          style={{
            fontFamily: "League Spartan",
            color: "black",
            textShadow: "-1px 1px 1px rgba(150, 150, 150, 0.87)",
            fontSize: "30px",
          }}
        >
          <img
            style={{ filter: "drop-shadow(-6px 1px 2px gray)" }}
            src={Logo}
            width={58}
            height={58}
          ></img>{" "}
          <strong>HireMigrants</strong>{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="container-fluid d-inline-flex">
              <div className="" style={{ width: "80%" }}></div>

              

              <Nav.Link as={Link} to='migrants' style={{ fontFamily: "Roboto" }}>
                <button
                  type="button"
                  className="btn btn-primary d-inline-flex btn-lg rounded-pill"
                  style={{ backgroundColor: "#0D3878" }}
                >
                  Migrante <ImUserTie size={24} />
                </button>
              </Nav.Link>
              <Nav.Link as={Link} to="company" style={{ fontFamily: "Roboto" }}>
                <button
                  type="button"
                  className="btn btn-warning d-inline-flex btn-lg rounded-pill text-white"
                  style={{ backgroundColor: "#FF5B00" }}
                >
                  Compañia <RiBuilding2Fill size={24} />
                </button>
              </Nav.Link>
              <Nav.Link as={Link} to="login" style={{ fontFamily: "Roboto" }}>
                <button
                  type="button"
                  className="btn btn-outline-primary d-inline-flex btn-lg rounded-pill "
                >
                  LogIn
                  <TbDoorEnter size={24} />
                </button>
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;