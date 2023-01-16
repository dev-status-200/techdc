import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Aos from 'aos';
import {ImLocation2} from 'react-icons/im';
import {BiPhoneCall} from 'react-icons/bi';
import {AiFillMail} from 'react-icons/ai';
import Button from '../../Shared/Button';

const Mobile = () => {
  const [width, setWidth] = useState(0);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    Aos.init({duration:500});
    setTimeout(() => {
      setLoad(false)
    }, 2000);
  }, [])
  return (
    <div>
      {!load &&
        <>
        <div className="shared-styles">
          <div className='hero-bg text-center py-5'>
            <h1 className='blue py-5 my-5'><strong>Contact Us</strong></h1>
          </div>
        </div>
        <div>
        <Container className='my-5'>
          <Row className='shadow'>
            <Col md={6} className="white-bg p-5">
              <Row className=''>
                <Col md={2} className='text-center'>
                  <ImLocation2 className='blue f-70' />
                </Col>
                <Col className='text-center'>
                  <h3>Technology Development Council</h3>
                  <p className='grey'>Office # C-02, New AD Mart Complex, Near Check Post # 6, Malir Cantt, Karachi.</p>
                </Col>
                <Col md={6} className="mt-5">
                  <div>
                    <div className='text-center blue f-15 f-700'>CONTACT</div>
                    <p className='text-center f-25 f-700'><BiPhoneCall className='pb-1 blue'/> 923132690927</p>
                  </div>
                </Col>
                <Col md={6} className="mt-5">
                  <div>
                    <div className='text-center blue f-15 f-700'>CONTACT</div>
                    <p className='text-center f-25 f-700'><BiPhoneCall className='pb-1 blue'/> 0213462573031</p>
                  </div>
                </Col>
                <Col md={12} className="mt-5">
                  <div>
                    <div className='text-center blue f-15 f-700'>SEND AN EMAIL</div>
                    <p className='text-center f-25 f-700'><AiFillMail className='pb-1 blue'/> info@techdc.org</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={6} className="black-bg p-5">
              <h2 className='white'>Send Us a Message and Learn More About Our Services</h2>
              <form className='mt-5'>
                <input type="text" className='custom-form my-3' placeholder='*Full Name' required style={{width:"100%"}}  />
                <input type="text" className='custom-form my-3' placeholder='*Email Address' required style={{width:"100%"}}  />
                <input type="text" className='custom-form my-3' placeholder='*Phone Number' required style={{width:"100%"}}  />
                <textarea type="textarea" rows="4" className='custom-form my-3' placeholder='*Message' required style={{width:"100%"}}  />
                <Button title={'Submit'} width={150} type={"submit"} />
              </form>
            </Col>
          </Row>
        </Container>
        </div>
        <iframe src="https://www.google.com/maps/d/embed?mid=1iYm8UerviIdMepVam0SeLSLW95q_m8Mq&hl=en" width="100%" height="480"></iframe>
        </>
      }
      {
      load && 
      <div style={{ overflowX:'hidden', overflowY:'hidden', textAlign:'center', padding:'20%'}} data-aos="fade-up">
          <img src='/loader.svg' height={100}  />
      </div>
      }
    </div>
  )
}

export default Mobile