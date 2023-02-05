import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import './SectionFour.css'

function SectionFour() {
    return (
        <Row className='my-3'>
            <Col lg='3' className='d-flex align-items-stretch'>
                <Card className='asianCard'>
                    <Card.Img variant="top" src="https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/4CCC/production/_128506691_b03b473bf844459e894e065fbe19db642b30afe30_0_1036_9971000x962.jpg" />
                    <Card.Body>
                        <Card.Title className='fw-bold'>Alleged spy balloon over US is weather device - China</Card.Title>
                        <Card.Text>
                            China says a suspected spy balloon is actually a wayward "civilian airship" used for weather monitoring.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg='3' className='d-flex align-items-stretch'>
                <Card className='asianCard'>
                    <Card.Img variant="top" src="https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/0B90/production/_128506920_6dc4b384dabc6b9ecaed9b6bce07ad4d5b215b900_0_7888_52761000x669.jpg" />
                    <Card.Body>
                        <Card.Title className='fw-bold'>Tennis star Kyrgios admits assaulting ex-girlfriend</Card.Title>
                        <Card.Text>
                            The Australian tennis star avoids a criminal conviction over the incident in Canberra in 2021.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg='3' className='d-flex align-items-stretch'>
                <Card className='asianCard'>
                    <Card.Img variant="top" src="https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/1391F/production/_128495108_ce10225f8b34296dda0592707884bd9dbdab13010_0_7087_49881000x704.jpg" />
                    <Card.Body>
                        <Card.Title className='fw-bold'>'What's behind the surge of Covid-19 deaths in Japan?</Card.Title>
                        <Card.Text>
                            Deaths in the country, which for long had one of the lowest Covid death rates, peaked earlier this month.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg='3' className='d-flex align-items-stretch'>
                <Card className='asianCard'>
                    <Card.Img variant="top" src="https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/6FF4/production/_128506682_gettyimages-1007389892.jpg" />
                    <Card.Body>
                        <Card.Title className='fw-bold'>Fraud claims against Adani group spark political row</Card.Title>
                        <Card.Text>
                            Indian opposition leaders demand an investigation into the Adani Group amid allegations of financial fraud.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default SectionFour;