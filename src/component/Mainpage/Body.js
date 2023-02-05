import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import './Body.css';
import Reel from './Reel';
import Advertise from './Advertise';
import React from 'react';
import SectionFive from './SectionFive';
import SectionSix from './SectionSix';
import SectionSeven from './SectionSeven';
import SectionEight from './SectionEight';
import FuturePlanet from './FuturePlanet';
import LastSection from './LastSection';
import Footer from './Footer';

function Body() {
    return (
        <React.Fragment>
            <Advertise />
            <div className='container mt-3'>
                <div className='d-none d-md-block'>
                    <Row className='fs-5 fw-bolder'>
                        <Col className='text-start'>Welcome to BBC.com</Col>
                        <Col className='text-end text-muted'>Thursday, 2 February</Col>
                    </Row>
                </div>
                <SectionOne />
                <div className='sectiontwo-header border-start border-danger border-5 mt-lg-5 mb-lg-3'>
                    <h4 className='ps-lg-3 fw-bold'>News</h4>
                </div>
                <SectionTwo />
                <div className='sectionthree-header border-start border-warning border-5 mt-lg-5 mb-lg-3'>
                    <h4 className='ps-lg-3 fw-bold'>Sports</h4>
                </div>
                <SectionThree />
            </div>
            <Reel />
            <div className='container mt-3'>
                <div className='sectionfour-header border-start border-danger border-5 mt-lg-5 mb-lg-3'>
                    <h4 className='ps-lg-3 fw-bold'>Asian News</h4>
                </div>
                <SectionFour />
            </div>
            <div className='bg-light py-lg-1'>
                <div className='container mt-3'>
                    <div className='sectionfive-header border-start border-primary border-5 mt-lg-5 mb-lg-3'>
                        <h4 className='ps-lg-3 fw-bold'>Editor's Picks</h4>
                    </div>
                    <SectionFive />
                </div>
            </div>
            <FuturePlanet />
            <div className='container mt-3'>
                <SectionSix />
            </div>
            <div className='bg-light pt-lg-3 pb-lg-5'>
                <div className='container mt-3'>
                    <div className='sectionseven-header border-start border-primary border-5 mt-lg-5 mb-lg-3'>
                        <h4 className='ps-lg-3 fw-bold'>Featured video</h4>
                    </div>
                    <SectionSeven />
                </div>
            </div>
            <div className='py-lg-1'>
                <div className='container mt-3'>
                    <div className='sectionfive-header border-start border-primary border-5 mt-lg-5 mb-lg-3'>
                        <h4 className='ps-lg-3 fw-bold'>World in pictures</h4>
                    </div>
                    <SectionEight />
                </div>
            </div>
            <div className='bg-light pt-lg-3 pb-lg-5'>
                <div className='container mt-3'>
                    <LastSection />
                </div>
            </div>
            <div className='pt-lg-3 pb-lg-5' style={{ backgroundColor: 'rgb(53, 53, 53)' }}>
                <div className='container mt-3'>
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Body;