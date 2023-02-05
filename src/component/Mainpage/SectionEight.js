import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './SectionEight.css'

function SectionEight() {
    return (
        <Row className='my-3'>
            <Row>
                <Col lg={6} className="">
                    <Card>
                        <Card.Img variant="top" src="https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/7876/production/_128483803_uphellyaagirlspasmaller.jpg" />
                        <div className='position-relative ms-lg-3'>
                            <div className='position-absolute bottom-0 start-0'>
                                <h3 className='text-white fw-bold'>In pictures: Up Helly Aa</h3>
                                <p className='text-white'>
                                    Scotland
                                </p>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col lg={6} className="">
                    <Card>
                        <Card.Img variant="top" src="https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/C414/production/_128469105_gettyimages-1246249496.jpg" />
                        <div className='position-relative ms-lg-3'>
                            <div className='position-absolute bottom-0 start-0'>
                                <h3 className='text-white fw-bold'>Heavy snow disrupts life in India's Himalayan states</h3>
                                <p className='text-white'>
                                    India
                                </p>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col lg={4} className='mt-lg-3'>
                    <Card className='picksCard'>
                        <Card.Img variant="top" src="https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/16CDF/production/_128370439_miss_fowler-868x658.jpg" />
                        <Card.Body>
                            <Card.Title>The defiant low-lying island 70 years after floods</Card.Title>
                            <Card.Text>
                                Essex
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} className='mt-lg-3'>
                    <Card className='picksCard'>
                        <Card.Img variant="top" src="https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/0689/production/_128437610_8a0856588ced16a765fc7ec8c05e6eecb6c3502c.jpg" />
                        <Card.Body>
                            <Card.Title>Survivors and leaders mark Holocaust Memorial Day</Card.Title>
                            <Card.Text>
                                In Pictures
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} className='mt-lg-3'>
                    <Card className='picksCard'>
                        <Card.Img variant="top" src="https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/01A5/production/_128412400_fen6.png" />
                        <Card.Body>
                            <Card.Title>Fen skating is a great metaphor for life</Card.Title>
                            <Card.Text>
                                Cambridgeshire
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Row>
    );
}

export default SectionEight;