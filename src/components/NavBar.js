import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand href="#home">Travel</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Video</Nav.Link>
                        <Nav.Link href="#pricing">Services</Nav.Link>
                        <Nav.Link href="#deets">Blog</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">About Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;

