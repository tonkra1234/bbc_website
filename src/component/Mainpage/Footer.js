import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <Row className='text-white'>
            <h3 className='fw-bold mb-lg-5'>Explore the BBC</h3>
            <Col lg={12}>
                <div className='d-flex gap-3'>
                    <p>Terms of Use</p>
                    <p>About the BBC</p>
                    <p>Cookies</p>
                    <p>Accessibility Help</p>
                    <p>Parental Guidance</p>
                    <p>Contact the BBC</p>
                    <p>BBC emails for you</p>
                    <p>Advertise with us</p>
                    <p>AdChoices / Do Not Sell My Info</p>
                </div>
            </Col>
            <Col lg={12}>
                <p>Copyright © 2023 BBC. The BBC is not responsible for the content of external sites. Read about our approach to external linking.</p>
            </Col>
        </Row>
    );
}

export default Footer;