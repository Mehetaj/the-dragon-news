import React from 'react';
import logo from '../../../../../assets/logo.png'
import moment from 'moment'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee'


const Header = () => {
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className=' text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd , MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-body-tertiary p-3 text-danger'>
                <Button variant='danger'>Latest</Button>
                <Marquee speed={50}>
                    I can be a React component, multiple React components, or just some text.... 
                    I can be a React component, multiple React components, or just some text.... 
                    I can be a React component, multiple React components, or just some text....
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             <Button variant='dark'>Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </Container>
    );
};

export default Header;