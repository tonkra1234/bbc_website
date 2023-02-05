import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faUser } from "@fortawesome/free-solid-svg-icons";
import './Navbar.css';


function NavTab() {
    return (
        <Navbar bg="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/4/49/BBC_logo_white.svg"
                        width="120"
                        height="40"
                        className="d-inline-block align-top"
                        alt=""
                    />{' '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ms-lg-5 ms-2">
                        <Nav.Link href="#home" className='linkText mx-lg-2'>Home</Nav.Link>
                        <Nav.Link href="#link" className='linkText mx-lg-2'>News</Nav.Link>
                        <Nav.Link href="#sport" className='linkText mx-lg-2'>Sport</Nav.Link>
                        <Nav.Link href="#feel" className='linkText mx-lg-2'>Feel</Nav.Link>
                        <Nav.Link href="#worklife" className='linkText mx-lg-2'>Worklife</Nav.Link>
                        <Nav.Link href="#travel" className='linkText mx-lg-2'>Travel</Nav.Link>
                        <Nav.Link href="#future" className='linkText mx-lg-2'>Future</Nav.Link>
                        <Nav.Link href="#culture" className='linkText mx-lg-2'>Culture</Nav.Link>
                        <Nav.Link href="#others" className='linkText mx-lg-2'><FontAwesomeIcon icon={faEllipsis} /></Nav.Link>
                    </Nav>
                    <div className="d-flex d-none d-lg-block">
                        <Button variant="light"><FontAwesomeIcon icon={faUser} size="1.25x" className="login-icon" />Sign-in</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavTab;