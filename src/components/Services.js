import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';

const Services = () => {
    return (
        <>
            <Container className="my-4">
                <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: 6 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://images.pexels.com/photos/3284167/pexels-photo-3284167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Services;
