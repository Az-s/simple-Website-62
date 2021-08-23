import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky='sticky-top'>
                <Container>
                    <Navbar.Collapse className="justify-content-center">
                        <Navbar.Text>
                            Footer 2021
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Footer;
