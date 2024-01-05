import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsClockFill, BsFillTelephoneFill, BsEnvelopeFill, BsList  } from "react-icons/bs";

function Header() {
  return (
    <>
        <header>

            {/* Top Header */}
            <div className="bg-green">
                <Container>
                    <Row className='py-2 top_contact_info'>
                        <Col md="auto" className='d-flex align-items-center'>
                            <BsClockFill className='me-2 cont_icon' />
                            <span className='fw-500'>Sun-Thu 08:00AM-05:00PM</span>
                        </Col>
                        <Col md="auto" className='d-flex align-items-center ms-auto justify-content-between'>
                            <div className='me-md-4 me-2'>
                                <BsFillTelephoneFill className='cont_icon me-2' />
                                <a href='tel:917234434543' className='fw-500 text-white'>+91 72344 34543</a>
                            </div>
                            <div>
                                <BsEnvelopeFill className='cont_icon me-2' />
                                <a href='mailto:sample@example.com' className='fw-500 text-white'>sample@example.com</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            
            <div className="bg-white">
                <Navbar expand="md" className="bg-body-tertiary py-0">
                    <Container>
                        <Navbar.Brand href="#home" className='logo_name'>Rishabh Eye Hospital</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav">
                            <BsList />
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto main_menu">
                                <Nav.Link href="#home" className='active'>Home</Nav.Link>
                                <Nav.Link href="#link">About Us</Nav.Link>
                                <Nav.Link href="#link">Doctors</Nav.Link>
                                <Nav.Link href="#link">Services</Nav.Link>
                                <Nav.Link href="#link">Blog</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <a href="#" className='btn btn-theme d-none d-lg-block'>
                            <BsFillTelephoneFill className='me-2' /> 
                            <span>Contact Us</span>
                        </a>
                    </Container>
                </Navbar>
            </div>

        </header>
    </>
  )
}

export default Header