import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Video.css';

const Video = ({ id }) => {
    return (
        <Container className='d-flex flex-column min-vh-100'>
            <Row className="mt-5">
                <Col sm={8}>
                    <div className="video-responsive my-5">
                        <iframe
                            width="853"
                            height="480"
                            src={`https://www.youtube.com/embed/0GZSfBuhf6Y`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    </div>
                </Col>
                <Col sm={4}>
                    <h2 className='my-5'>Best places to Visit</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Video;
