import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Card from 'react-bootstrap/Card';

import './Reel.css';

function Reel() {
    return (
        <Row className='reelbackground'>
            <Col>
                <Container className='my-lg-5'>
                    <Row>
                        <Col><p className='text-white fw-bolder fs-2'>Reel</p></Col>
                        <Col className='text-end my-lg-auto'><a href='/' className='btn btn-light rounded-pill px-lg-3'>Visit Reel<FontAwesomeIcon className='ms-lg-3' icon={faArrowRight} /></a></Col>
                    </Row>
                    <p className='text-white fs-5'>The most amazing videos from the BBC</p>
                    <Row>
                        <Col lg='4' className='d-flex align-items-stretch'>
                            <Card>
                                <Card.Img variant="top" src="https://ychef.files.bbci.co.uk/432x243/p0f0q694.jpg" />
                                <Card.Body>
                                    <Card.Title className='fw-bold'>The unspeakable barbarity committed against Niger</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg='4' className='d-flex align-items-stretch'>
                            <Card>
                                <Card.Img variant="top" src="https://ychef.files.bbci.co.uk/432x243/p0f0hkc6.jpg" />
                                <Card.Body>
                                    <Card.Title className='fw-bold'>The truth behind your favourite flavours</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg='4' className='d-flex align-items-stretch'>
                            <Card>
                                <Card.Img variant="top" src="https://ychef.files.bbci.co.uk/432x243/p0f01vvj.jpg" />
                                <Card.Body>
                                    <Card.Title className='fw-bold'>The benefits of a 'weekend marriage'</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    );
}

export default Reel;