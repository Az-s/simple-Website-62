import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky='sticky-top'>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Footer 2021.</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Footer;
