import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoIosPerson } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="xxl" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="error al cargar"
              src="https://img2.freepng.es/20180329/cbw/kisspng-gouache-paintbrush-painting-brushes-5abc9479f06110.3299404315223082179846.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {"  "}
            OnlyArts
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="me-auto"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/artists">Artists</Nav.Link>
              <Nav.Link href="/pictures">Pictures</Nav.Link>
              <Nav.Link href="/about-us">AboutUs</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown
                menuVariant="dark"
                title={<IoIosPerson />}
                id="basic-nav-dropdown"
                drop="start"
              >
                <NavDropdown.Item href="#action/3.1">
                  Config. Cuenta
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Cerrar Sesión
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                menuVariant="dark"
                title={<AiOutlineHeart />}
                id="basic-nav-dropdown"
                drop="start"
              >
                <NavDropdown.Item href="#action/3.1">
                  Me gusta 1
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Me gusta 2
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
