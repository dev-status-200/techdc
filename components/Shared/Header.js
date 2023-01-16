import React, { useState, useEffect } from 'react';
import { Row, Col, Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import Aos from 'aos'

const Header = () => {
  
    const [width, setWidth] = useState(0);
  
    useEffect(() => {
        window.addEventListener("resize", resize)
        const timer = setTimeout(() => { resize() }, 1000);
        return () => clearTimeout(timer)
      }, [width]);

    const [load, setLoad] = useState(true);
    
    useEffect(() => {
      Aos.init({duration:300});
      setTimeout(() => {
        setLoad(false)
      }, 2000);
    }, [])
      
    function resize(){
        if (typeof window !== "undefined") {
          setWidth(window.innerWidth)
        }
    }

  return (
    <>
    {!load &&
    <div className='header-styles' data-aos="fade-down">

      <div className='desktop'>
      <Row className='mb-4 f-w'>
        <Col md={4} xs={12}>
            <div className='left-bg'>
                <span className='info-left'>info@tech-dc.org</span>
                <span className='info-left'>UAN: +92 313 2690 927</span>
            </div>
        </Col>
        <Col md={6} xs={12}>
            <span className='info-right'>Mon - Sat 10:00am - 10:00pm / Sunday - CLOSED</span>
        </Col>
      </Row>
      </div>

    <Navbar bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" className='mx-4'>
            <img src="/logo.png" style={{height:90}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto"></Nav>
          <Nav>
            <Link href={'/'} className={width>400?'custom-link mx-3':'custom-link-mobile'}>Home</Link>
            <Link href={'/about'} className={width>400?'custom-link mx-3':'custom-link-mobile'}>About Us</Link>
            <Link href={'/service'} className={width>400?'custom-link mx-3':'custom-link-mobile'}>Our Services</Link>
            <Link href={'/trainings'} className={width>400?'custom-link mx-3':'custom-link-mobile'}>Trainings</Link>
            <Link href={'/academicPartners'} className={width>400?'custom-link mx-3':'custom-link-mobile'}>Academic Partners</Link>
            <Link href={'/centerOfExcellence'} className={width>400?'custom-link mx-3':'custom-link-mobile'}>Center Of Excellence</Link>
            <Link href={'/events'} className={width>400?'custom-link mx-3':'custom-link-mobile'}>Events</Link>
            <Link href={'/contact'} className={width>400?'custom-link mx-3':'custom-link-mobile'}>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    }
    </>
  )
}

export default Header