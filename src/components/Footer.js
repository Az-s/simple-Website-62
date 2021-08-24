import React from 'react';
import { Navbar, Container} from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" className='mt-auto' style={{marginTop: 'calc(100% - 260px)'}}>
                <Container style={{height: 'calc(100% - 60px)'}}>
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
