import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import './Services.css';

const Services = () => {
    return (
        <>
            <Container className="my-4">
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top"
                                src="https://images.pexels.com/photos/3284167/pexels-photo-3284167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                style={{ height: '24rem' }} />
                            <Card.Body>
                                <Card.Title>Algeria</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top"
                                src="https://images.pexels.com/photos/4215113/pexels-photo-4215113.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                style={{ height: '24rem' }} />
                            <Card.Body>
                                <Card.Title>Parco Naturale Puez Odle</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top"
                                src="https://images.pexels.com/photos/1402850/pexels-photo-1402850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                style={{ height: '24rem' }} />
                            <Card.Body>
                                <Card.Title>Gasadalur</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top"
                                src="https://images.pexels.com/photos/3900437/pexels-photo-3900437.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                style={{ height: '24rem' }} />
                            <Card.Body>
                                <Card.Title>Mesa Arch</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top"
                                src="https://images.pexels.com/photos/4319752/pexels-photo-4319752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                style={{ height: '24rem' }} />
                            <Card.Body>
                                <Card.Title>Surfing</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top"
                                src="https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                style={{ height: '24rem' }} />
                            <Card.Body>
                                <Card.Title>Glen Coe</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Services;
