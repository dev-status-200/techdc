import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cursor from "react-cursor-follow";
import Aos from 'aos';
import {AiOutlineCheck} from 'react-icons/ai'

const Desktop = () => {
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
            <h1 className='blue py-5 my-5'><strong>Centers of Excellence</strong></h1>
          </div>
        </div>

        <div>
          <Container> 
            <Row className=''>
              <Col md={12}>
                <h3 style={{fontWeight:300}}>Technology Training Centers</h3>
                <p className="my-4 grey">
                  Through TechDC’s advanced research labs we would help our members to generate innovative ideas for pursuing a solution to technological problems of the modern world. We are committed to establishing a research facility center equipped with modern technologies for development to test emerging technologies under a secure and controlled environment. TechDC also preserves a considerable focus towards instituting multidisciplinary research centers in association with multiple institutions and aims to connect with government and industries for evolving engineering structures for the students of Engineering Technologists, Diploma of Associate Engineers, professional engineering technologists and associate engineers.
                </p>
                <p className="my-4 grey">We at TechDC assure that our students are facilitated at large by our services. For this, we make sure that our centers are at nearby places to the students so that they can easily avail of our all training and development programs by marking their presence there.</p>
                <p className="my-4 grey">Currently, we have our nine development centers virtually operating in pretty much every corner of the town, they are</p>
              
                <p> <AiOutlineCheck className='blue pb-1 mx-1'/> Malir 15</p>
                <p> <AiOutlineCheck className='blue pb-1 mx-1'/> Gulshan-e-Iqbal</p>
                <p> <AiOutlineCheck className='blue pb-1 mx-1'/> P.E.C.H.S</p>
                <p> <AiOutlineCheck className='blue pb-1 mx-1'/> Orangi Town</p>
                <p> <AiOutlineCheck className='blue pb-1 mx-1'/> Nazimabad</p>
                <p> <AiOutlineCheck className='blue pb-1 mx-1'/> Gulshan-e-Hadeed</p>
                <p> <AiOutlineCheck className='blue pb-1 mx-1'/> S.I.T.E Area</p>
                <p> <AiOutlineCheck className='blue pb-1 mx-1'/> Korangi Industrial Area</p>
                <p> <AiOutlineCheck className='blue pb-1 mx-1'/> Sakhi Hassan</p>
                <p> In these development centers, <span className='white dark-blue-bg px-2 f-600'>we have well-equipped labs, professional researchers, and skilled faculty</span> which make us unique in society.</p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='mt-5'>
        <iframe src="https://www.google.com/maps/d/embed?mid=1iYm8UerviIdMepVam0SeLSLW95q_m8Mq&hl=en" width="100%" height="480"></iframe>
        </div>
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

export default Desktop