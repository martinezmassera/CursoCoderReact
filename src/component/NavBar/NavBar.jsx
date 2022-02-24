import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
<<<<<<< HEAD
=======
import Imagen from '../CartWidget/CartWidget';

>>>>>>> c4fc099 (Clase 4)

const NavBar = () => {
    return (
        <div>
<<<<<<< HEAD
             <Navbar bg="light" variant="light">
=======
            <Navbar bg="light" variant="light">
>>>>>>> c4fc099 (Clase 4)
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
<<<<<<< HEAD
                        <Nav.Link><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

=======
                        <Nav.Link><Imagen /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
>>>>>>> c4fc099 (Clase 4)
        </div>

    )
}

export default NavBar