import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SectionOne.css'

function SectionOne() {
    return (
        <Row className='my-3'>
            <Col lg='6' className='img1 rounded-3 position-relative mb-lg-0 mb-3'>
                <a href='/'>
                    <div className='position-absolute bottom-0 start-5'>
                        <h4 className='text-white fw-bold'>US halts Blinken China visit after spy balloon row </h4>
                        <p className='text-white'>
                            The US secretary of state's trip to China is postponed after a spy balloon is tracked across the US.
                        </p>
                    </div>
                </a>
            </Col>
            <Col lg='6' className=''>
                <Row>
                    <Col xs className='img2 rounded-3 mx-lg-2 position-relative'>
                        <a href='/' className=''>
                            <div className='position-absolute bottom-0 start-5'>
                                <h6 className='text-white fw-bold'>
                                    Historic deep freeze hits US north-east
                                </h6>
                            </div>
                        </a>
                    </Col>
                    <Col xs className='img3 rounded-3 position-relative'>
                        <a href='/' className=''>
                            <div className='position-absolute bottom-0 start-5'>
                                <h6 className='text-white fw-bold'>
                                    Why use a spy balloon instead of satellites?
                                </h6>
                            </div>
                        </a>
                    </Col>
                </Row>
                <Row className='pt-lg-2'>
                    <Col xs className='img4 rounded-3 mx-lg-2 position-relative'>
                        <a href='/' className=''>
                            <div className='position-absolute bottom-0 start-5'>
                                <h6 className='text-white fw-bold'>
                                    Secrets of the lost dinosaur continent
                                </h6>
                            </div>
                        </a>
                    </Col>
                    <Col xs className='img5 rounded-3 position-relative'>
                        <a href='/' className=''>
                            <div className='position-absolute bottom-0 start-5'>
                                <h6 className='text-white fw-bold'>
                                    Italy's ancient homes for dodging taxes
                                </h6>
                            </div>
                        </a>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default SectionOne;