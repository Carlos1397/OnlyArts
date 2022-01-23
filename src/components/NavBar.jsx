import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoIosPerson } from 'react-icons/io'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/dashboard">
            <img
              alt="error al cargar"
              src="/resources/img/Recurso32.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {'  '}
            OnlyArts
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="me-auto"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/dashboard">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/dashboard/artists">
                Artists
              </Nav.Link>
              <Nav.Link as={Link} to="/dashboard/pictures">
                Pictures
              </Nav.Link>
              <Nav.Link as={Link} to="/dashboard/about-us">
                AboutUs
              </Nav.Link>
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
  )
}

export default NavBar
