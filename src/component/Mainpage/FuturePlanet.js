import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Card from 'react-bootstrap/Card';

import './FuturePlanet.css';

function FuturePlanet() {
    return (
        <Row className='futurebackground'>
            <Col>
                <Container className='my-lg-5'>
                    <Row>
                        <Col><span className='text-white fw-bolder fs-2 border border-3 border-success p-lg-2'>Future Planet</span></Col>
                        <Col className='text-end my-lg-auto'><a href='/' className='btn btn-light rounded-pill px-lg-3'>Visit Future Planet<FontAwesomeIcon className='ms-lg-3' icon={faArrowRight} /></a></Col>
                    </Row>
                    <p className='text-white fs-5 mt-lg-2'>Solution for a sustainable world</p>
                    <Row>
                        <Col lg='4' className='d-flex align-items-stretch'>
                            <Card>
                                <Card.Img variant="top" src="https://ychef.files.bbci.co.uk/624x351/p0f047sb.jpg" />
                                <Card.Body>
                                    <Card.Title className='fw-bold'>The next frontier for heat pumps</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg='4' className='d-flex align-items-stretch'>
                            <Card>
                                <Card.Img variant="top" src="https://ychef.files.bbci.co.uk/624x351/p0dyg9zd.jpg" />
                                <Card.Body>
                                    <Card.Title className='fw-bold'>Are ski trips coming to an end?</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg='4' className='d-flex align-items-stretch'>
                            <Card>
                                <Card.Img variant="top" src="https://ychef.files.bbci.co.uk/624x351/p0dwxngh.jpg" />
                                <Card.Body>
                                    <Card.Title className='fw-bold'>Why Italy's olive trees are dying</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    );
}

export default FuturePlanet;