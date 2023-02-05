import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './SectionFive.css'

function SectionFive() {
    return (
        <Row className='my-3'>
            <Col lg='8' className='rounded-3 position-relative mb-lg-0 mb-3'>
                <Row>
                    <Col lg={12} className="">
                        <Card>
                            <Card.Img variant="top" src="https://ychef.files.bbci.co.uk/width/790/p0dzx611.jpg" />
                            <div className='position-relative ms-lg-3'>
                                <div className='position-absolute bottom-0 start-0'>
                                    <h3 className='text-white fw-bold'>What is the New Arctic diet?</h3>
                                    <p className='text-white'>
                                        It brings together the communities at the top of the world
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={4} className='mt-lg-3'>
                        <Card className='picksCard'>
                            <Card.Img variant="top" src="https://ychef.files.bbci.co.uk/width/790/p0f0bycc.jpg" />
                            <Card.Body>
                                <Card.Title>The 90s star who's become a Gen Z icon</Card.Title>
                                <Card.Text>
                                    Why country-pop superstar Shania Twain is riding higher than ever
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className='mt-lg-3'>
                        <Card className='picksCard'>
                            <Card.Img variant="top" src="https://ychef.files.bbci.co.uk/width/790/p0f09zgb.jpg" />
                            <Card.Body>
                                <Card.Title>Do undersea cables affect marine life?</Card.Title>
                                <Card.Text>
                                    The invisible effects on sensitive creatures
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className='mt-lg-3'>
                        <Card className='picksCard'>
                            <Card.Img variant="top" src="https://ychef.files.bbci.co.uk/width/790/p0f0dl6r.jpg" />
                            <Card.Body>
                                <Card.Title>The Gen Z friendship problem</Card.Title>
                                <Card.Text>
                                    Why young adults are struggling to make friends - and needing to get creative
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className='mt-lg-3'>
                        <Card className='picksCard'>
                            <Card.Img variant="top" src="https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/2392/production/_128460190_vandenbrand_getty.jpg" />
                            <Card.Body>
                                <Card.Title>The story of a cyclocross landmark</Card.Title>
                                <Card.Text>
                                    Mud, sweat and beers - how a small band of women broke new ground
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className='mt-lg-3'>
                        <Card className='picksCard'>
                            <Card.Img variant="top" src="https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/B5E0/production/_128506564_bobi1.jpg" />
                            <Card.Body>
                                <Card.Title>Bobi breaks world record for oldest dog ever</Card.Title>
                                <Card.Text>
                                    The almost 31-year-old Portuguese pooch narrowly escaped death as a puppy
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className='mt-lg-3'>
                        <Card className='picksCard'>
                            <Card.Img variant="top" src="https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/564A/production/_128509022_capture.jpg" />
                            <Card.Body>
                                <Card.Title>Why do celebrities sometimes wear offensive outfits?</Card.Title>
                                <Card.Text>
                                    Sometimes, outfits can be remembered for the wrong reasons
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col lg='4' className=''>
                <Card>
                    <Card.Header className='bg-danger text-white fw-bold fs-6'>LATEST BUSINESS NEWS</Card.Header>
                    <div className='fw-bold fs-5'>
                        <div className='p-lg-4 choiceOne'>FTSE 100 closes at record high</div>
                        <div className='p-lg-4 choiceTwo'>Jobs growth surges in US despite slowdown fears</div>
                        <div className='p-lg-4 choiceThree'>Apple sales in biggest fall since 2019</div>
                        <div className='p-lg-4 choiceFour'>Inflation-hit Argentina unveils higher-value note</div>
                    </div>
                </Card>
            </Col>
        </Row>
    );
}

export default SectionFive;