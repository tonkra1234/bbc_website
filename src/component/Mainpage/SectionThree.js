import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import './SectionThree.css'

function SectionThree() {
    return (
        <Row className='my-3'>
            <Col lg='3' className='d-flex align-items-stretch'>
                <Card className='sportsCard'>
                    <Card.Img variant="top" src="https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/1068B/production/_128511276_bbc-sport-index-imagery-3-split-images-gradient-004472ba-3030-41a3-84f2-0362d23a65a2.png" />
                    <Card.Body>
                        <Card.Title className='fw-bold'>More ex-Yorkshire players pull out of racism hearing</Card.Title>
                        <Card.Text>
                            Three more ex-Yorkshire players withdraw from the ECB disciplinary process into historical racism allegations at the club made by Azeem Rafiq.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg='3' className='d-flex align-items-stretch'>
                <Card className='sportsCard'>
                    <Card.Img variant="top" src="https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/BCBC/production/_128461384_haalanddixiedeanfinal.png" />
                    <Card.Body>
                        <Card.Title className='fw-bold'>Haaland eyes 95-year record - can he 'walk on water'?</Card.Title>
                        <Card.Text>
                            Erling Haaland looks certain to break Premier League scoring records - but can he challenge Dixie Dean's all-time tally?
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg='3' className='d-flex align-items-stretch'>
                <Card className='sportsCard'>
                    <Card.Img variant="top" src="https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/DFA0/production/_128484275_roberts_getty.jpg" />
                    <Card.Body>
                        <Card.Title className='fw-bold'>'I felt a fraud' - the double life of a rugby league legend</Card.Title>
                        <Card.Text>
                            Ian Roberts was the best-paid player in the brutal world of Australian rugby league - but it took years for him to make the biggest and bravest play of his life.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg='3' className='d-flex align-items-stretch'>
                <Card className='sportsCard'>
                    <Card.Img variant="top" src="https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/108EE/production/_128522876_tark-main.jpg" />
                    <Card.Body>
                        <Card.Title className='fw-bold'>Premier League: Five games after Everton stun leaders Arsenal</Card.Title>
                        <Card.Text>
                            Follow live text commentary and listen to BBC Radio 5 Live coverage from seven weekend Premier League games including Everton v Arsenal & Newcastle v West Ham.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default SectionThree;