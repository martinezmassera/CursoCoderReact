import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import Imagen from '../CartWidget/CartWidget';
import { NavDropdown } from 'react-bootstrap';


const NavBar = () => {

    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container className='Nav'>
                    <Navbar.Brand to="/">
                        <NavLink className="nav-link" to="/">  <img
                            src="/image/logo/logo.png"
                            width="80"
                            height="80"
                            alt="Logo"
                        /></NavLink></Navbar.Brand>
                    <Nav>

                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavDropdown title="Comidas" id="navbarScrollingDropdown">
                            <NavLink className="nav-link" to="/categoria/carne">Carne</NavLink >
                            <NavDropdown.Divider />
                            <NavLink className="nav-link" to="/categoria/pastas">Pasta</NavLink>
                            <NavDropdown.Divider />
                            <NavLink className="nav-link" to="/categoria/vegetariano">Vegetariana</NavLink>
                            <NavDropdown.Divider />
                            <NavLink className="nav-link" to="/categoria/vegano">vegana</NavLink>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <NavLink className="nav-link" to="cart"><Imagen /></NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>

    )
}

export default NavBar