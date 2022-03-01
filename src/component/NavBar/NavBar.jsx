import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import Imagen from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <div>
             <Navbar bg="light" variant="light">
                <Container className='Nav'>
                    <Navbar.Brand href="#home">
                        <img
                            src="/image/logo/logo.png"
                            width="80"
                            height="80"
                            alt="React Bootstrap logo"
                        /></Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link><Imagen /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>

    )
}

export default NavBar