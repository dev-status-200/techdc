import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt, FaRegEnvelopeOpen } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Aos from 'aos'

const Footer = () => {

    const [load, setLoad] = useState(true);

    useEffect(() => {
        Aos.init({duration:300});
        setTimeout(() => {
          setLoad(false)
        }, 2000);
    }, [])

  return (
    <>
    {!load &&
    <div className='footer-styles'>
        <div className='bgTop p-5'>
            <Container className='px-5 py-3'>
                <Row>
                    <Col className='px-3'>
                        <h6 className='heading'>CONTACT INFO</h6>
                        <div className='my-4 mt-5 white'>
                        <span className=''><FaPhoneAlt/></span><span className='fs-18 mx-3'>+41-21-634-05-05</span>
                        <div className='mb-4'> 
                            <span className=''><MdEmail/></span><span className='fs-18 mx-3'>info@techdc.org</span>
                        </div>
                        <div>
                            <p className='grey-txt fs-18'>
                            © 2014-2022 Technology Development Council All Rights Reserved.
                            </p>
                        </div>
                        </div>
                    </Col>
                    <Col className='px-3 desktop'>
                        <h6 className='heading'>VISIT US</h6>

                        <p className='mt-5 white'>Office # C-02, New AD Mart Complex, Near Check Post # 6, Malir Cantt, Karachi.</p>
                    </Col>
                    <Col className='px-3 desktop'>
                        <h6 className='heading'>ABOUT US</h6>

                        <p className='mt-5 white' style={{borderBottom:"1px solid grey", paddingBottom:10}}>Our Story</p>
                        <p className='mt-4 white' style={{borderBottom:"1px solid grey", paddingBottom:10}}>Working With Us</p>
                        <p className='mt-4 white'>Be Our Partner</p>
                    </Col>
                    <Col className='text-center'>
                        <img src='logo.png' height={170} />
                    </Col>
                </Row>
            </Container>
        </div>
        <div className='bgBt p-3 text-center grey'>
        COPYRIGHT 2022 TECHNOLOGY DEVELOPMENT COUNCIL, ALL RIGHT RESERVED
        </div>
    </div>
    }
    </>
  )
}

export default Footer