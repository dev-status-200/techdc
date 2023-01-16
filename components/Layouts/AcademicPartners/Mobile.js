import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cursor from "react-cursor-follow";
import Aos from 'aos';
import CountUp from 'react-countup';
import ButtonCustom from '../../Shared/ButtonCustom';
import { BiPhoneCall } from "react-icons/bi";

const Mobile = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    Aos.init({duration:600});
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
            <h1 className='blue py-5 my-5'><strong>Academic Partners</strong></h1>
          </div>
        </div>

        <div>
          <Container> 
            <Row className='px-1'>
              <Col xs={12}>
                <h3 style={{fontWeight:300}} className="text-center">Academic Partners</h3>
                <div className="bullet-service my-3" data-aos="slide-up">
                  <strong>TechDC has earned its goodwill among its clients in a very short span.</strong>
                </div>
                <div className="bullet-service my-3" data-aos="slide-up">
                  <strong>TechDC feels proud to announce its biggest clients in the industry of academia.</strong>
                </div>
                <div className="bullet-service my-3" data-aos="slide-up">
                  <strong>So far, one of the two biggest clients of TechDC are Hamdard University and Saint Patrick’s Institute of Science & Technology.</strong>
                </div>
                <div className="bullet-service my-3" data-aos="slide-up">
                  <strong>Our both corporate clients endorse our training and development services as the best and mandatory for our technical youth.</strong>
                </div>
                </Col>

              <Col xs={12}>
                <div data-aos="fade-down-left"></div>
                <img className=' my-5' src={'shared/academic-img.PNG'} height={250} data-aos="fade-up " />
              </Col>
            </Row>

          </Container>
        </div>

        <div className='grey-bg my-5 py-5'>
            <Container fluid>
                <Row className='text-center'>
                    <Col>
                        <img src={'shared/12-c.JPG'} width={300} />
                    </Col>
                    <Col>
                        <p className='f-18 f-i f-300'>Saint Patrick’s</p>
                        <h2 className='f-i  f-700 l-s'>Institute of Science & Technology and TechDC</h2>
                        <p className='f-18 f-300 my-3'>Saint Patrick’s Institute of Science & Technology and TechDC</p>
                        <div className='blue my-4 mx-3'>
                            <p>From MoU signing ceremony at Saint Patrick’s with Team TechDC.</p>
                            <p>Chief Guests include Anthony Desilva- Executive Secretary of Catholic Board, Clive Vaz- Principal and Anthony Daniel- Deputy Principal of College, Umer Khan- Board Member and Muhammad Amash- Director Strategic Planning TechDC.</p>
                        </div>
                        <h4 className=''>What TechDC Ensures to its Trainees here:</h4>
                        <p className='blue'>MoU between both the organizations was signed on 14th June 2019.</p>
                        <p className='blue'>TechDC has partnered with this institution for the mutual goals of training & development of the future technicians and technologists.</p>
                        <p className='blue'>By far, TechDC holds this peerless position to train over 800 technicians from this institute on different disciplines in a day.</p>
                        <p className='blue'>12 industrial training programs per year with proper certifications</p>
                        <p className='blue'>Three years of DAE program is ensured to TechDC’s Engineering Technologists here.</p>
                    </Col>
                </Row>
            </Container>
        </div>
        
        <div className='my-5'>
            <Container fluid className='text-center'>
                <Row>
                    <Col>
                        <h2 className='f-i f-700 l-s'>Hamdard University & TechDC</h2>
                        <ul className='grey my-5'>
                            <li>TechDC signed the MoU with HU on 27th January 2020.</li>
                            <li>Right now, TechDC has enrolled over 300 technologists at Hamdard University’s BSc Mechanical/Civil/Electrical Engineering Technologies.</li>
                            <li>With collaboration of HIMs, BS Industrial Management has also been started while other programs like BBA and more are in pipeline.</li>
                        </ul>
                        <h2 className='f-i  f-700 mt-5 l-s'>MoU Signing with Hamdard University</h2>
                        <ul className='grey my-5'>
                            <li>Sneak Peak from MoU signing ceremony at Hamdard University</li>
                            <li>Team TechDC with vice Chanceller Dr. Shabib Ul Hassan</li>
                            <li>Registrar Pervaz Ahmed Memon</li>
                            <li>Director Quality Enhancement Cell Shahzad Kayani</li>
                            <li>Dean FEST Dr. Anwar Manzar {"("}TI{")"}</li>
                        </ul>
                    </Col>
                    <Col >
                        <img src={'shared/sign.PNG'} width={200}  />
                    </Col>
                </Row>
            </Container>
        </div>

        <div className='my-5 py-5'>
            <Container>
                <Row className='text-center'>
                    <Col md={12}>
                        <h1>What TechDC Ensures to its Technologists at Hamdard University</h1>
                    </Col>
                    <Col md={12}>
                        <Row className=' mt-5' data-aos="slide-up">
                            <Col md={1}></Col>
                            <Col md={5} className="">
                                <div className='green-box p-5 mb-5 mx-3 white'>
                                HEC and NTC recognized Bachelor's <br/>degree programs
                                </div>
                                <div className='green-box p-5 mx-3 mb-5 white'>
                                Higher Studies Opportunities at the most affordable scholarship
                                </div>
                            </Col>
                            <Col md={5} className="">
                                <div className='green-box p-5 mx-3 mb-5 white'>
                                Flexible classes and paractical timings with their jobs
                                </div>
                                <div className='green-box p-5 mx-3 mt-5 white'>
                                {" "}12 traingings per {" "} year with their academic <br/>classes{" "}
                                </div>
                            </Col>
                            <Col md={1}></Col>
                        </Row>
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
    </div>
  )
}

export default Mobile