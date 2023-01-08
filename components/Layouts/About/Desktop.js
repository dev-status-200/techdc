import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cursor from "react-cursor-follow";
import Aos from 'aos';
import CountUp from 'react-countup';

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
            <h1 className='blue py-5 my-5'><strong>About Us</strong></h1>
          </div>
        </div>
        <div>
          <Container> 
            <Row className='px-5'>
              <Col md={12}>
                <p className='blue f-25'>
                  <span className='f-35'><strong>Technology Development Council {"("}TechDC{")"}</strong></span>{" "}
                  is aimed to back technology-related development programs and to offer a sound platform for the advancement of the engineering technicians and technologists all over Pakistan
                </p>
                <p className='grey my-4'>
                  TechDC caters to the foremost needs of our technology-youth, likewise, working on some of the most specific grey-areas in which they lack. Through its strategized technology training programs which are according to all the international standards, it assures that its affiliated engineering technicians and technologists are acknowledged not only for their skillsets but also for their professionalism.
                </p>
                <p className='grey my-4'>
                Moreover, TechDC associates with one of the most prominent organizations in the industry to empower its engineering technicians and technologists to attain their utmost prospects within their fields through the opportunities of higher studies from top-tier universities on scholarships and industrial transformation.
                </p>
                <p className='grey my-4'>
                On the other hand, TechDC assures its client organizations to provide them its trained technicians and technologists for employee transformation and guarantees their retention in the long term.
                </p>
              </Col>
            </Row>
            <Row className='my-4'>
              <Col md={4}>
                <div style={{float:'right'}}>
                <div className='f-50' >
                  <strong><CountUp end={2000} duration={1} separator="," enableScrollSpy={true} />+</strong>
                </div>
                <div><strong>Trainee Members</strong></div>
                </div>
              </Col>
              <Col style={{backgroundColor:'silver', maxWidth:3, height:100}}>
              </Col>
              <Col md={6} className="py-4">
                <p style={{color:'grey'}}>Peerless Position in the industry to train over 600 technicians at a time Over 300 Technologists enrolled in BSc Engineering Technology program</p>
              </Col>
            </Row>
            <Row > 
              <Col md={12} className="text-center">
                <img src={'/about/about-1.png'} style={{width:'80%'}} /> 
              </Col>
            </Row>
            <Row className='px-5'>
              <Col md={12} className="text-center  my-4">
                <p className='blue f-30'>Chairman's Message</p>
              </Col>
              <Col md={4}>
                <div style={{float:'right'}}>
                  <img src={'/people/chairman-techdc.JPG'}   />
                  <div className='blue mt-3'>
                    <strong>Mr. Brig. {"("}Retd{")"} Tariq Hussain Khan</strong>
                  </div>
                  <div className='grey mt-3'>
                  Sitara-e-Imtiaz (Military), PSC, PSTC, MBA MS, Ph.D. Scholar
                  </div>
                  <a className='blue' style={{textDecoration:'none'}}>chairman@techdc.org</a>
                </div>
              </Col>
              <Col md={8}>
                <p className='grey'>
                At this time of national and worldwide change, the engineering technicians and technologists{"’"} community should work together to meet the new challenges and prospects that lie onward. In the provision of this, the Technology Development Council (TechDC) will continue to ensure that the systems and procedures for professional training programs are vigorous and suitable for the purpose, thus providing the assertion that our professionally trained Technicians and Technologist are skilled and competent to safeguard our society.
                </p>
                <p className='grey'>
                To standardize Pakistan{"’"}s Engineering technician and technologist profession, maintain the index of professionally listed Technologists and Technicians, our activities are governed and overseen by committees made up of industry representatives, including employers and academics. TechDC is charged with adaptable engineering technician and technologists{"’"} profession in Pakistan and influencing the training and education required to practice engineering. Besides, it is being set and maintains the internationally recognized standards of competence and ethics which govern the retention of titles.
                </p>
              </Col>
            </Row>
          </Container>
          <div className='grey-bg p-5 my-5'> 
            <Container>
              <Row className='px-5 my-5'>
                <Col md={8}>
                  <h2><strong>Our Biggest Client Organizations</strong></h2>
                  <p className='grey my-3'>TechDC has proved and earned its goodwill among its client organizations in a very span because of its incredible training and development strategies. That is why TechDC feels proud to announce its biggest clients in the industry of academia.</p>
                  <p className='grey my-3'>So far, one of the two biggest clients of TechDC is <strong>Hamdard University</strong> and <strong>Saint Patrick{"’"}s Institute of Science & Technology</strong>. Our both corporate clients endorse our training and development services as the best and mandatory for our technical youth.</p>
                </Col>
                <Col md={4}>
                  <img src={'/shared/techdc-client-organizations.JPG'} />
                </Col>
              </Row>
            </Container>
          </div>
          <div className='p-5 my-5'> 
            <Container>
              <Row className='px-5 my-5 px-5 mx-5'>
              <div className='text-center'>
                <p><span className='bg-highlight'>TechDC Members</span></p>
                <h1 className='mb-4'><strong>Board Members</strong></h1>
              </div>
              <Col md={4}>
                <img src={'/people/col-wali-techdc.JPG'} />
                <p className='f-18'>
                <strong>
                  Professor Colonel {"("}R{")"} Muhammad Wali Khan Durrani
                </strong>
                </p>
                <p className='grey f-12'>CHIEF EXECUTIVE OFFICER OF AVIATION INSTITUTE OF MANAGEMENT  <span className='mx-2'>|</span>  REGIONAL FACILITATOR EMBRY-RIDDLE AERONAUTICAL UNIVERSITY </p>
                <a className='blue' style={{textDecoration:'none'}}>walidurrani@techdc.org</a>
              </Col>
              <Col md={4}>
                <img src={'/people/momerkhan-techdc.JPG'} />
                <p className='f-18'>
                <strong>
                  Mr. Muhammad Omer Khan
                </strong>
                </p>
                <p className='grey f-12'>REGIONAL VICE CHAIR-REGION AT LARGE  <span className='mx-2'>|</span>   AHSRAE-USA BASED HVACR SOCIETY </p>
                <a className='blue' style={{textDecoration:'none'}}>omer.khan@techdc.org</a>
              </Col>
                <Col md={4}>
                  <img src={'/people/muhammad-zafar-techdc.JPG'} />
                  <p className='f-18'>
                <strong>
                Mr. Syed Muhammad Zafar
                </strong>
                </p>
                <p className='grey f-12'>HEAD INSTRUCTOR  <span className='mx-2'>|</span>  SAINT PATRICK’S INSTITUTE OF SCIENCE AND TECHNOLOGY </p>
                <a className='blue' style={{textDecoration:'none'}}>smzafar@techdc.org</a>
                </Col>
              </Row>
            </Container>

            <Container>
              <Row className='px-5 my-5 px-5 mx-5'>
              <div className='text-center'>
                <h1 className='mb-4'><strong>Team Members</strong></h1>
              </div>
              <Col md={4}>
                <div className='img-hover-zoom'>
                <img src={'/people/ammash-techdcc.JPG'} />
                </div>
                <div className='img-attr'>
                <span className='img-name'>Muhammad Amash</span><br/>
                <span className='img-desig'>DIRECTOR STRATEGIC PLANNING</span>
                </div>
              </Col>
              <Col md={4}>
                <div className='img-hover-zoom'>
                <img src={'/people/ali-techdc.JPG'} />
                </div>
                <div className='img-attr'>
                <span className='img-name px-5'>Ali Munir</span><br/>
                <span className='img-desig'>DIRECTOR PUBLIC RELATIONS</span>
                </div>
              </Col>
                <Col md={4}>
                <div className='img-hover-zoom'>
                  <img src={'/people/Aijaz-baig-techdc.JPG'} />
                </div>
                <div className='img-attr'>
                <span className='img-name px-5'>Aijaz Baig</span><br/>
                <span className='img-desig'>DIRECTOR TRAINING & RESEARCH</span>
                </div>
                </Col>
                <Col md={4}>
                <div className='img-hover-zoom'>
                  <img src={'/people/hareem-techdc.JPG'} />
                </div>
                <div className='img-attr'>
                <span className='img-name'>Hareem Fatima</span><br/>
                <span className='img-desig'>HR BUSINESS PARTNER</span>
                </div>
                </Col>
                <Col md={4}>
                <div className='img-hover-zoom'>
                  <img src={'/people/ebad-techdc.JPG'} />
                </div>
                <div className='img-attr'>
                <span className='img-name px-5'>Ebad Khan</span><br/>
                <span className='img-desig'>DIRECTOR REGISTRATIONS</span>
                </div>
                </Col>
              </Row>
            </Container>
          </div>
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

export default Desktop