import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={6} md={12} className='my-5'>
                        <Card style={{ width: '100%' }} className='flip-container'>
                            <Card.Body className='flipper d-flex justify-content-center align-items-center flex-column'>
                                <Card.Title>Dent du Géant</Card.Title>
                                <Card.Text>
                                The Dent du Géant remained unclimbed during the golden age of alpinism, and was a much-coveted peak in the 1870s, repelling many parties who attempted it mostly from the Rochefort ridge. 
                                In 1880 the strong team of Albert F. Mummery and Alexander Burgener tried to force a passage via the south-west face but were repelled by a band of slabs, causing Mummery to exclaim, 'Absolutely inaccessible by fair means!
                                </Card.Text>
                                <Card.Title>Image in other side</Card.Title>
                                <div className="back">
                                    <Image src="https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" rounded fluid />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Blog;
