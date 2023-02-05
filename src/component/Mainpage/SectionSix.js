import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import './SectionSix.css'

function SectionSix() {
    return (
        <Row className='my-lg-5'>
            <Col lg='6' className='d-flex flex-column align-items-stretch'>
                <h4 className='text-muted fw-bold'>TECHNOLOGY OF BUSINESS</h4>
                <Card className='techCard'>
                    <Card.Img variant="top" src="https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/5FDA/production/_128383542_gettyimages-1271344496.jpg" />
                    <Card.Body>
                        <Card.Text className='text-black fw-bold'>
                            How we fell out of love with voice assistants
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg='6' className='d-flex flex-column align-items-stretch'>
                <h4 className='text-muted fw-bold'>GLOBAL TRADE</h4>
                <Card className='techCard'>
                    <Card.Img variant="top" src="https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/63A3/production/_128470552_teapickersms.jpg" />
                    <Card.Body>
                        <Card.Text className='text-black fw-bold'>
                            Can Sri Lanka trade its way back to prosperity?
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default SectionSix;