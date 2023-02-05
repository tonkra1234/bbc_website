import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import './SectionTwo.css'

function SectionTwo() {
    return (
        <Row className='my-3'>
            <Col lg='3' className='d-flex align-items-stretch'>
                <Card className='newsCard'>
                    <Card.Img variant="top" src="https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/9F93/production/_128515804_screenshot2023-02-03at18.39.05.jpg" />
                    <Card.Body>
                        <Card.Title className='fw-bold'>UN envoy: Israel and Palestinians at critical point</Card.Title>
                        <Card.Text>
                            Firm" diplomatic intervention is needed to stem growing bloodshed, Tor Wennesland tells the BBC.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg='3' className='d-flex align-items-stretch'>
                <Card className='newsCard'>
                    <Card.Img variant="top" src="https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/06A5/production/_128510710_e3936bff-5c18-47e9-995f-b8bab0452556.jpg" />
                    <Card.Body>
                        <Card.Title className='fw-bold'>Man admits treason charge over Queen threat</Card.Title>
                        <Card.Text>
                            Jaswant Singh Chail was caught with a loaded crossbow at Windsor Castle on Christmas Day 2021.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg='3' className='d-flex align-items-stretch'>
                <Card className='newsCard'>
                    <Card.Img variant="top" src="https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/2BDE/production/_128503211_olympics2024_getty.jpg" />
                    <Card.Body>
                        <Card.Title className='fw-bold'>40 countries could boycott 2024 - Polish minister</Card.Title>
                        <Card.Text>
                            Poland sports minister Kamil Bortniczuk says up to 40 countries could boycott the 2024 Olympics in Paris, making the Games "pointless".
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg='3' className='d-flex align-items-stretch'>
                <Card className='newsCard'>
                    <Card.Img variant="top" src="https://ichef.bbci.co.uk/news/240/cpsprodpb/20B3/production/_128517380_4f467d9ffee0bf35e10c34fa0354ea2e6db2ffc2.jpg" />
                    <Card.Body>
                        <Card.Title className='fw-bold'>High-altitude spying marks new low for US-China ties</Card.Title>
                        <Card.Text>
                            Relations between the superpowers are in limbo as America's top diplomat postpones his trip to Beijing.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default SectionTwo;