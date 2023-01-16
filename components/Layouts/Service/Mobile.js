import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cursor from "react-cursor-follow";
import Aos from 'aos';
import CountUp from 'react-countup';
import ButtonCustom from '../../Shared/ButtonCustom';
import { BiPhoneCall } from "react-icons/bi";

const Mobile = () => {
  const [width, setWidth] = useState(0);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    Aos.init({duration:300});
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
            <h1 className='blue py-5 my-5'><strong>Our Services</strong></h1>
          </div>
        </div>

        <div>
          <Container> 
            <Row className=''>
              <Col md={6}>
                <h3 style={{fontWeight:300}}>Technology Related Training Programs</h3>
                <p className="my-5 grey">TechDC will provide adequate training to refine the skills of its members as required by the industrial sector to ensure that engineering technicians and technologists meet the vital skill set which helps them to properly develop their career, reach the industry, and grow in their respective fields.</p>

                <div className="bullet-service my-3" data-aos="slide-up">
                  <strong>1 - Career Development</strong>
                </div>
                <div className="bullet-service my-3" data-aos="slide-up">
                  <strong>2 - Higher Education Oppertunities</strong>
                </div>
                <h3 className="my-5" style={{fontWeight:300}}>What TechDC Guarantees To It's Client Organizations?</h3>
                <p className="my-5 grey">We believe that the human resources we provide to the industries are our basic assets for our goodwill in the market. For that we make sure that our technicians & technologists we are providing for employee transformation possess the following key features:</p>
                <div className="bullet-service my-3" data-aos="slide-up">
                  <strong>1 - Guarantees worker’s Retention:</strong>
                </div>
                <div className="bullet-service my-3" data-aos="slide-up">
                  <strong>2 - A pool of suitable workers:</strong>
                </div>
                <div className="bullet-service my-3" data-aos="slide-up">
                  <strong>3 - Professionalism:</strong>
                </div>
                <div className="bullet-service my-3" data-aos="slide-up">
                  <strong>4 - Trained Workers:</strong>
                </div>
                <h3 className="my-5" style={{fontWeight:300}}>Further HR services that TechDC provides:</h3>
                <p className="my-5 grey">Our technology-related recruitment services enable our client organisation to hire associate engineers and technicians in vast numbers also.</p>
                <span className='grey'>TechDC ensures:  </span>
              <ul className='grey my-3'>
                <li >Its technicians and technologists have high employee retention rate</li>
                <li>Technicians are specialised in their field of subjects i.e. Mechanical, Electrical, Electronics, Automotive, Civil and many more</li>
                <li>High-level of professional unlike other technicians available in the industry</li>
              </ul>
                </Col>

              <Col md={6}>
              <div></div>
                <img className='' src={'service/service-1.jpg'} style={{width:'70vw',position:'relative', left:50}}  />
                <img src={'service/service-2.jpg'} 
                  style={{
                    position:'relative',
                    bottom:30,
                    width:'70vw'
                  }}
                />
                
              <h5 style={{fontWeight:700}}>More About Us</h5>
              <p className="my-3 grey"
                style={{maxWidth:380}}
              >
                Moreover, TechDC associates with one of the most prominent organizations in the industry to empower its engineering technicians and technologists to attain their utmost prospects within their fields through the opportunities of higher studies from top-tier universities on scholarships and industrial transformation.
              </p>
              <div>
              <BiPhoneCall/>
              <span className='mx-2'>+9231 3269 0927</span>
              </div>
              <div className="my-5">
              <ButtonCustom  title={'Contact Us'} width={150} color1={'grey'} color2={'#231f28'} />
              </div>
              <hr/>
              </Col>
            </Row>

          </Container>
        </div>
        </>
      }
      {
      load && 
      <div style={{ overflowX:'hidden', overflowY:'hidden', textAlign:'center', padding:'20%'}} data-aos="fade-up">
          <img src='/loader.svg' height={100}  />
      </div>
      }
      <Cursor style={{zIndex:1}} hollow color={'rgb(32, 89, 169)'} duration={0.8} size={45} />
    </div>
  )
}

export default Mobile