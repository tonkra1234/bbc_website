import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/esm/Row';
import Figure from 'react-bootstrap/Figure';

import './SectionSeven.css'
import React from 'react';


function SectionSeven() {
    return (
        <React.Fragment>
            <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/26PrgjTboVQ" title="YouTube video" allowfullscreen></iframe>
            </div>
            <div className='border rounded-3' style={{ backgroundColor: 'rgb(67, 67, 67)' }}>
                <Tabs
                    defaultActiveKey="Recommendated"
                    id="uncontrolled-tab-example"
                    className="mb-lg-3"
                >
                    <Tab eventKey="Recommendated" title="Recommendated" tabClassName='tabOne border-secondary'>
                        <Row>
                            <Col lg={3}>
                                <div className='d-flex mx-lg-3'>
                                    <Figure className='me-lg-2 mt-lg-1'>
                                        <Figure.Image
                                            width={300}
                                            height={300}
                                            alt="300x300"
                                            src="https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/10B8/production/_128508240_p0f0s62w.jpg"
                                        />
                                    </Figure>
                                    <p className='text-white'>At first I thought it was a star</p>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className='d-flex mx-lg-3'>
                                    <Figure className='me-lg-2 mt-lg-1'>
                                        <Figure.Image
                                            width={400}
                                            height={400}
                                            alt="400x400"
                                            src="https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/7DA9/production/_128496123_de27.jpg"
                                        />
                                    </Figure>
                                    <p className='text-white'>I apologise to the whole Ukrainian nation</p>
                                </div>
                            </Col><Col lg={3}>
                                <div className='d-flex mx-lg-3'>
                                    <Figure className='me-lg-2 mt-lg-1'>
                                        <Figure.Image
                                            width={450}
                                            height={450}
                                            alt="450x450"
                                            src="https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/12907/production/_128493067_p0f0dpmc.jpg"
                                        />
                                    </Figure>
                                    <p className='text-white'>Decade-old footage of Tyre Nichols skating goes viral</p>
                                </div>
                            </Col><Col lg={3}>
                                <div className='d-flex mx-lg-3'>
                                    <Figure className='me-lg-2 mt-lg-1'>
                                        <Figure.Image
                                            width={400}
                                            height={400}
                                            alt="400x400"
                                            src="https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/13929/production/_128496108_p0f0kvww.jpg"
                                        />
                                    </Figure>
                                    <p className='text-white'>Bringing music to the masses... on a tram</p>
                                </div>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="Latest" title="Latest" tabClassName='tabTwo border-secondary'>
                        <Row>
                            <Col lg={3}>
                                <div className='d-flex mx-lg-3'>
                                    <Figure className='me-lg-2 mt-lg-1'>
                                        <Figure.Image
                                            width={400}
                                            height={400}
                                            alt="400x400"
                                            src="https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/1606/production/_128483650_p0f06v5j.jpg"
                                        />
                                    </Figure>
                                    <p className='text-white'>BBC guest's phone keeps going off during interview</p>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <div className='d-flex mx-lg-3'>
                                    <Figure className='me-lg-2 mt-lg-1'>
                                        <Figure.Image
                                            width={400}
                                            height={400}
                                            alt="400x400"
                                            src="https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/7574/production/_128486003_p0f08319.jpg"
                                        />
                                    </Figure>
                                    <p className='text-white'>Viking warriors parade at Up Helly Aa in Shetland</p>
                                </div>
                            </Col><Col lg={3}>
                                <div className='d-flex mx-lg-3'>
                                    <Figure className='me-lg-2 mt-lg-1'>
                                        <Figure.Image
                                            width={400}
                                            height={400}
                                            alt="400x400"
                                            src="https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/655C/production/_128484952_8d896e7420afd5f05ed5a002d55b04581dc386d00_0_5432_36211000x667.jpg"
                                        />
                                    </Figure>
                                    <p className='text-white'>Dancing and huge crowds for Pope's DR Congo visit</p>
                                </div>
                            </Col><Col lg={3}>
                                <div className='d-flex mx-lg-3'>
                                    <Figure className='me-lg-2 mt-lg-1'>
                                        <Figure.Image
                                            width={400}
                                            height={400}
                                            alt="400x400"
                                            src="https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/124C4/production/_128484947_3c2bdffe55ceef02f07e2aad7d0101d36a7b929b.jpg"
                                        />
                                    </Figure>
                                    <p className='text-white'>You know I'm innocent' - Andrew Tate yells to reporters</p>
                                </div>
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
            </div>

        </React.Fragment >
    );
}

export default SectionSeven;